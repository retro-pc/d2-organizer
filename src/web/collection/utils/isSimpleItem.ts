import { Item } from "../../../scripts/items/types/Item";

const RESPECS = ["tes", "ceh", "bet", "fed", "toa"];
const UBERS = ["pk1", "pk2", "pk3", "dhn", "bey", "mbr", "std"];

export function isSimpleItem(item: Item) {
  // For some reason Essences and organs are not simple
  return (
    item.simple || RESPECS.includes(item.code) || UBERS.includes(item.code)
  );
}
