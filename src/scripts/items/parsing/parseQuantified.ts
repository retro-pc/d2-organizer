import { BinaryStream } from "../../save-file/binary";
import { Item } from "../types/Item";
import { ARMORS, MISC, WEAPONS } from "../../../game-data";
import { V105_D2R } from "../../character/parsing/versions";

export function parseQuantified(
  { read, readBool, readInt }: BinaryStream,
  item: Item
) {
  const baseArmor = ARMORS[item.code];
  const baseWeapon = WEAPONS[item.code];
  const baseMisc = MISC[item.code];

  if (baseArmor) {
    // NOTE:
    // Any piece of armor that spawns with +% Enhanced Defense
    // has a base defense of maxac+1 (normal maximum base defense + 1).
    item.defense = readInt(11) - 10;
  }

  if (baseArmor || baseWeapon) {
    const maxDurability = readInt(8);
    // Indestructible items have max durability 0 and no current durability
    if (maxDurability) {
      item.durability = [readInt(8), maxDurability];
      // Skipping unknown extra bit
      read(1);
    }
  }

  if (item.owner.version >= V105_D2R) {
    // In v105, the stackable flag bit is unconditionally present for all non-simple items.
    // Earlier versions only include quantity bits when the item type is stackable.
    if (readBool()) {
      item.quantity = readInt(9);
    }
  } else if (
    baseArmor?.stackable ||
    baseWeapon?.stackable ||
    baseMisc?.stackable
  ) {
    item.quantity = readInt(9);
  }

  if (item.socketed) {
    item.sockets = readInt(4);
  }
}
