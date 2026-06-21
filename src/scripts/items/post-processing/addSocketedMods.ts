import { Item } from "../types/Item";
import { ARMORS, GEMS, MISC, ModifierRange } from "../../../game-data";
import { ItemParsingError } from "../../errors/ItemParsingError";
import { generateFixedMods } from "./generateFixedMods";

/**
 * Adds mods from sockets to the base item.
 * Jewel mods go into modifiers (merge with item stats).
 * Gem/rune mods go into socketModifiers (shown separately in item card).
 */
export function addSocketedMods(socketedItem: Item, socketable: Item) {
  const miscType = MISC[socketable.code]?.type;
  if (miscType === "jewl" || miscType === "cjwl") {
    if (!socketedItem.modifiers) socketedItem.modifiers = [];
    socketedItem.modifiers.push(...socketable.modifiers!);
  } else {
    const gem = GEMS[socketable.code];
    if (!gem) {
      throw new ItemParsingError(
        socketedItem,
        "Only gems, runes and jewels can be put in sockets"
      );
    }
    const base = ARMORS[socketedItem.code];
    let ranges: ModifierRange[];
    if (!base) {
      ranges = gem.weapon;
    } else if (
      base.type === "shie" ||
      base.type === "head" ||
      base.type === "ashd"
    ) {
      ranges = gem.shield;
    } else {
      ranges = gem.armor;
    }
    if (!socketedItem.socketModifiers) socketedItem.socketModifiers = [];
    socketedItem.socketModifiers.push(...generateFixedMods(ranges));
  }
}
