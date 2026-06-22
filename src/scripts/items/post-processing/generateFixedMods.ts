import {
  ITEM_STATS,
  ModifierRange,
  PROPERTIES,
  PROPERTY_GROUPS,
  SKILL_TABS,
} from "../../../game-data";
import { Modifier } from "../types/Modifier";

// No socketable item can imbue extra sockets, and no set can gain sockets with multiple items
// (that would make no sense), so we can ignore the sockets mod.
const SPECIAL_PROPS = ["sock"];

export function generateFixedMods(
  ranges: ModifierRange[],
  allowRanges = false
) {
  const modifiers: Modifier[] = [];
  for (const { prop, min, max, param } of ranges) {
    if (SPECIAL_PROPS.includes(prop)) {
      continue;
    }
    // Expand composite/random property groups before individual property lookup
    const group = PROPERTY_GROUPS[prop];
    if (group) {
      // pickmode 1 with a single prop and parmin/parmax: one of N random tab params.
      // Create one merged modifier with skillTabRange instead of N separate entries.
      const firstProp = group["prop1"] as string | undefined;
      const parmin1 = group["parmin1"] as number | undefined;
      const parmax1 = group["parmax1"] as number | undefined;
      if (
        group.pickmode === 1 &&
        firstProp &&
        parmin1 !== undefined &&
        parmax1 !== undefined &&
        group["prop2"] === undefined
      ) {
        const subProperty = PROPERTIES[firstProp];
        if (subProperty) {
          for (const { stat } of subProperty.stats) {
            if (stat === "item_addskill_tab") {
              const statId = ITEM_STATS.findIndex((s) => s?.stat === stat);
              if (statId >= 0) {
                const statDef = ITEM_STATS[statId]!;
                const value = (group["modmax1"] as number | undefined) ?? max ?? 1;
                modifiers.push({
                  id: statId,
                  stat,
                  priority: statDef.descPriority,
                  value,
                  param: SKILL_TABS[parmin1].id,
                  skillTabRange: [SKILL_TABS[parmin1].id, SKILL_TABS[parmax1].id],
                });
              }
            }
          }
        }
        continue;
      }

      // pickmode 2: expand all sub-props.
      // pickmode 1 with multiple props (no parmin/parmax): show only prop1 as representative.
      const maxProps = group.pickmode === 1 ? 1 : Infinity;
      const subRanges: ModifierRange[] = [];
      for (let i = 1; i <= maxProps; i++) {
        const subProp = group[`prop${i}`] as string | undefined;
        if (subProp === undefined) break;
        const subMin = (group[`modmin${i}`] as number | undefined) ?? min;
        const subMax = (group[`modmax${i}`] as number | undefined) ?? max;
        const parmin = group[`parmin${i}`] as number | undefined;
        const parmax = group[`parmax${i}`] as number | undefined;
        if (parmin !== undefined && parmax !== undefined) {
          for (let p = parmin; p <= parmax; p++) {
            subRanges.push({ prop: subProp, min: subMin, max: subMax, param: p });
          }
        } else {
          subRanges.push({ prop: subProp, min: subMin, max: subMax, param });
        }
      }
      modifiers.push(...generateFixedMods(subRanges, allowRanges));
      continue;
    }

    const property = PROPERTIES[prop];
    if (!property) {
      console.warn(`Unknown property "${prop}" — skipping mod`);
      continue;
    }
    const { stats } = property;
    for (const { stat, type, param: propParam } of stats) {
      // Check if this frequent findIndex impacts performance
      const statId = ITEM_STATS.findIndex(
        (itemStat) => itemStat?.stat === stat
      );
      if (statId < 0) {
        throw new Error(`Unknown mod ${stat}`);
      }
      const previous = modifiers[modifiers.length - 1];
      const statDef = ITEM_STATS[statId]!;
      const shared: Modifier = {
        id: statId,
        stat,
        priority: statDef.descPriority,
      };
      switch (type) {
        case "proc":
          modifiers.push({
            ...shared,
            level: max!,
            spell: Number(param!),
            chance: min!,
          });
          break;
        case "charges":
          modifiers.push({
            ...shared,
            level: max!,
            spell: Number(param!),
            charges: min!,
            maxCharges: min!,
          });
          break;
        case "all":
          if (!("value" in previous)) {
            throw new Error("No previous mod to copy");
          }
          modifiers.push({
            ...shared,
            value: previous.value,
            param: previous.param,
          });
          break;
        case "min":
          modifiers.push({
            ...shared,
            value: min!,
          });
          break;
        case "max":
          modifiers.push({
            ...shared,
            value: max!,
          });
          break;
        case "param":
          modifiers.push({
            ...shared,
            value: Number(param!),
          });
          break;
        case "other":
          if (prop === "skill-rand") {
            // For skill-rand, param is the bonus value, and min/max are the
            // range of skill ids the game can randomly choose from.
            modifiers.push({
              ...shared,
              value: Number(param!),
              skillRange: [min!, max!],
            });
            break;
          }
          if (min !== max && !allowRanges) {
            throw new Error(`Unexpected range modifier ${prop}: ${min}-${max}`);
          }
          modifiers.push({
            ...shared,
            value: max!,
            // Only set param when the stat actually encodes one in binary (paramSize > 0).
            // Gem/rune ranges default param to 0, which would mismatch parsed binary mods
            // (param=undefined) and prevent consolidation for stats like resistances.
            param: statDef.paramSize
              ? (param != null
                  ? stat === "item_addskill_tab"
                    ? SKILL_TABS[Number(param)].id
                    : param
                  : propParam != null && stat === "item_addskill_tab"
                    ? SKILL_TABS[Number(propParam)].id
                    : propParam)
              : undefined,
          });
      }
    }
  }
  return modifiers;
}
