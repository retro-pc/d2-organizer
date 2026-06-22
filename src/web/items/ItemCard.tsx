import { RenderableProps } from "preact";
import { Item } from "../../scripts/items/types/Item";
import { ItemQuality } from "../../scripts/items/types/ItemQuality";
import { getBase } from "../../scripts/items/getBase";
import { colorClass } from "../collection/utils/colorClass";
import { MISC, RUNEWORDS } from "../../game-data";
import "./ItemCard.css";

function Range({ range }: { range?: [number, number] }) {
  if (!range) return null;
  return <span class="sidenote"> [{range.join(" - ")}]</span>;
}

function Stat({ label, children }: RenderableProps<{ label: string }>) {
  return (
    <div class="item-card-stat">
      <span class="item-card-stat-label">{label}</span>
      <span class="item-card-stat-value">{children}</span>
    </div>
  );
}

export function ItemCard({ item }: { item: Item }) {
  const className = colorClass(item);
  const base = getBase(item);

  let modsHeader = "Properties";
  let modsHeaderClass = "magic";
  let modsLineClass = "";
  if (item.runeword) {
    modsHeader = "Runeword";
    modsHeaderClass = "unique";
    modsLineClass = "";
  } else if (item.quality === ItemQuality.UNIQUE) {
    modsHeader = "Unique";
    modsHeaderClass = "unique";
    modsLineClass = "";
  } else if (item.quality === ItemQuality.SET) {
    modsHeader = "Set";
    modsHeaderClass = "set";
    modsLineClass = "";
  }

  const magicMods =
    item.modifiers?.map(
      ({ description, range }) =>
        description && (
          <div class={`item-card-mod-line ${modsLineClass}`}>
            {description}
            <Range range={range} />
          </div>
        )
    ) ?? [];

  const setItemMods = item.setItemModifiers?.flatMap((mods) =>
    mods.map(
      ({ description, range }) =>
        description && (
          <div class="item-card-mod-line set">
            {description} <Range range={range} />
          </div>
        )
    )
  );

  const setGlobalMods = item.setGlobalModifiers?.flatMap((mods) =>
    mods.map(
      ({ description }) =>
        description && (
          <div class="item-card-mod-line unique">{description}</div>
        )
    )
  );

  const socketMods = item.socketModifiers?.map(
    ({ description, range }) =>
      description && (
        <div class="item-card-mod-line">
          {description}
          <Range range={range} />
        </div>
      )
  );

  const filledSockets = item.filledSockets ?? [];
  // Catalog runeword entries have no actual socketed items, but the runes
  // they require are known from the runeword's recipe.
  const requiredRunes =
    filledSockets.length === 0 && item.runeword && item.runewordId != null
      ? RUNEWORDS[item.runewordId]?.runes.map((code) => MISC[code]?.name ?? code)
      : undefined;
  const emptySockets = requiredRunes
    ? 0
    : Math.max(0, (item.sockets ?? 0) - filledSockets.length);

  return (
    <div class="item-card">
      <div class={`item-card-name ${className}`}>{item.name}</div>
      {base?.name && base.name !== item.name && (
        <div class={`item-card-base ${className}`}>{base.name}</div>
      )}

      <div class="item-card-divider" />

      <div class="item-card-stats">
        {item.level ? <Stat label="Item Level:">{item.level}</Stat> : null}
        {item.reqlevel && item.reqlevel > 1 ? (
          <Stat label="Required Level:">{item.reqlevel}</Stat>
        ) : null}
        {"def" in base && (
          <Stat label="Defense:">
            <span class={item.enhancedDefense ? "magic" : ""}>
              {item.defense}
              <Range range={item.defenseRange} />
            </span>
          </Stat>
        )}
        {item.durability && (
          <Stat label="Durability:">
            {item.durability[0]} / {item.durability[1] + (item.extraDurability ?? 0)}
          </Stat>
        )}
        {item.ethereal && (
          <div class="item-card-checkbox">
            <span class="item-card-checkbox-box">✓</span> Ethereal
          </div>
        )}
      </div>

      {magicMods.length > 0 && (
        <div class="item-card-section">
          <h4 class={modsHeaderClass}>{modsHeader}</h4>
          <hr class="item-card-hr" />
          {magicMods}
        </div>
      )}

      {!!setItemMods?.length && (
        <div class="item-card-section">
          <h4 class="set">Set Items Bonus</h4>
          <hr class="item-card-hr" />
          {setItemMods}
        </div>
      )}

      {!!setGlobalMods?.length && (
        <div class="item-card-section">
          <h4 class="unique">{item.runeword ? "Runeword" : "Full Set Bonus"}</h4>
          <hr class="item-card-hr" />
          {setGlobalMods}
        </div>
      )}

      {!!item.sockets && (
        <div class="item-card-section">
          <h4 class="socketed">Sockets ({item.sockets})</h4>
          <hr class="item-card-hr" />
          <div class="item-card-sockets">
            {filledSockets.map((socket) => (
              <div class="item-card-socket">
                <span class="item-card-socket-icon">🔒</span>
                <span class={colorClass(socket)}>{socket.name}</span>
              </div>
            ))}
            {requiredRunes?.map((name) => (
              <div class="item-card-socket">
                <span class="item-card-socket-icon">🔒</span>
                <span class="item-card-rune">{name}</span>
              </div>
            ))}
            {Array.from({ length: emptySockets }).map(() => (
              <div class="item-card-socket">
                <span class="item-card-socket-icon">🔒</span>
                <span class="sidenote">Empty</span>
              </div>
            ))}
          </div>
          {!!socketMods?.length && (
            <>
              <hr class="item-card-hr" />
              {socketMods}
            </>
          )}
        </div>
      )}
    </div>
  );
}
