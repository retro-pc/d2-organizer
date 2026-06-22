import { Item } from "../../scripts/items/types/Item";
import "./ItemTooltip.css";
import { getBase } from "../../scripts/items/getBase";
import { colorClass } from "../collection/utils/colorClass";
import { useMemo, useState } from "preact/hooks";
import { consolidateMods } from "../../scripts/items/post-processing/consolidateMods";
import { addModGroups } from "../../scripts/items/post-processing/addModGroups";
import { describeSingleMod } from "../../scripts/items/post-processing/describeSingleMod";
import { ARMORS, WEAPONS } from "../../game-data";

let UNIQUE_ID = 0;

function Range({ range }: { range?: [number, number] }) {
  if (!range) return null;
  return <span class="sidenote"> [{range.join(" - ")}]</span>;
}

export function ItemTooltip({ item, baseCode }: { item: Item; baseCode?: string }) {
  const [tooltipId] = useState(() => `item-tooltip-${UNIQUE_ID++}`);
  const className = colorClass(item);

  // Combine item mods and socket mods, then re-consolidate and re-describe
  // so that e.g. All Resistances *25 (item) + *38 (gems) = *63
  const consolidatedMods = useMemo(() => {
    const mods = [
      ...(item.modifiers ?? []).map((m) => ({ ...m })),
      ...(item.socketModifiers ?? []).map((m) => ({ ...m })),
    ];
    consolidateMods(mods);
    for (const mod of mods) {
      mod.description = describeSingleMod(mod);
    }
    addModGroups(mods);
    mods.sort(
      ({ priority: a = 0, param: c = 0 }, { priority: b = 0, param: d = 0 }) =>
        b - a || (d ?? 0) - (c ?? 0)
    );
    return mods;
  }, [item]);

  if (item.simple) {
    return <span class={className}>{item.name}</span>;
  }

  const base = getBase(item);
  const baseName =
    base.name || (baseCode ? (ARMORS[baseCode] ?? WEAPONS[baseCode])?.name : undefined);

  const magicMods = consolidatedMods.map(
    ({ description, range }) =>
      description && (
        <div class="magic">
          {description}
          <Range range={range} />
        </div>
      )
  );

  if (item.ethereal || item.sockets) {
    const toDisplay = [
      item.ethereal && "Ethereal",
      item.sockets && `Socketed (${item.sockets})`,
    ].filter((m) => !!m);
    magicMods?.push(
      <div class="magic">
        {toDisplay.join(", ")}
        <Range range={item.socketsRange} />
      </div>
    );
  }

  const setItemMods = item.setItemModifiers?.flatMap((mods) =>
    mods.map(
      ({ description, range }) =>
        description && (
          <div class="set">
            {description} <Range range={range} />
          </div>
        )
    )
  );

  const setGlobalMods = item.setGlobalModifiers?.flatMap((mods) =>
    mods.map(
      ({ description }) =>
        description && <div class="unique">{description}</div>
    )
  );
  setGlobalMods?.unshift(<br />);

  let reqline = null;
  if (item.reqlevel && item.reqlevel > 1)
    reqline = <div>Level Required: {item.reqlevel || 1}</div>;

  return (
    <span class="tooltip-container">
      <span
        class={`tooltip-trigger ${className}`}
        tabIndex={0}
        aria-describedby={tooltipId}
      >
        {item.name}
      </span>
      <div id={tooltipId} class="tooltip-content" role="tooltip">
        <div class={className}>{item.name}</div>
        {baseName && <div class={className}>{baseName}</div>}
        <div>Item Level: {item.level}</div>
        {reqline}
        {"def" in base && (
          <div>
            Defense:{" "}
            <span class={item.enhancedDefense ? "magic" : ""}>
              {item.defense}
              <Range range={item.defenseRange} />
            </span>
          </div>
        )}
        {item.durability && (
          <div>
            Durability: {item.durability?.[0]} of{" "}
            {item.durability[1] + (item.extraDurability ?? 0)}
          </div>
        )}
        {magicMods}
        {setItemMods}
        {setGlobalMods}
      </div>
    </span>
  );
}
