import {
  ITEM_STATS,
  ModifierRange,
  PROPERTIES,
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
    const { stats } = PROPERTIES[prop];
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
                  : propParam)
              : undefined,
          });
      }
    }
  }
  return modifiers;
}
