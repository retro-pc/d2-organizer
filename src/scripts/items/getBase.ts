import {
  Armor,
  ARMORS,
  EquipmentTier,
  Misc,
  MISC,
  SetItem,
  UniqueItem,
  Weapon,
  WEAPONS,
} from "../../game-data";
import { Item } from "./types/Item";

const FALLBACK_BASE: Misc = {
  name: "",
  type: "",
  tier: EquipmentTier.NORMAL,
  maxSockets: 6,
  spawnable: false,
  indestructible: false,
  width: 1,
  height: 1,
  qlevel: 0,
  levelReq: 0,
  stackable: false,
};

export function getBase(
  item: UniqueItem | SetItem | Item
): Armor | Weapon | Misc {
  return (
    ARMORS[item.code] || WEAPONS[item.code] || MISC[item.code] || FALLBACK_BASE
  );
}
