import { parseSimple } from "./parseSimple";
import { binaryStream } from "../../save-file/binary";
import { parseQuality } from "./parseQuality";
import { parseQuantified } from "./parseQuantified";
import { parseModifiers } from "./parseModifiers";
import { ItemParsingError } from "../../errors/ItemParsingError";
import { SaveFileReader } from "../../save-file/SaveFileReader";
import { LAST_LEGACY, V105_D2R } from "../../character/parsing/versions";
import { ItemsOwner } from "../../save-file/ownership";
import { MISC } from "../../../game-data";
import { ItemQuality } from "../types/ItemQuality";

export function parseItem(reader: SaveFileReader, owner: ItemsOwner) {
  // https://squeek502.github.io/d2itemreader/formats/d2.html
  const stream = binaryStream(reader);
  if (owner.version <= LAST_LEGACY) {
    // This is awkward, but we're juggling between the regular reader and the binary stream
    // In this case, we want to read with the binary stream to make sure the header is included
    // in the raw binary of the item.
    const header = String.fromCharCode(stream.readInt(8), stream.readInt(8));
    if (header !== "JM") {
      throw new Error(`Unexpected header ${header} for an item`);
    }
  }
  const item = parseSimple(stream, owner);

  if (!item.simple) {
    // If the id is cut short, it means it contained a "JM" which was identified as a boundary
    try {
      parseQuality(stream, item);
      parseQuantified(stream, item);
      parseModifiers(stream, item);
    } catch (e) {
      if (e instanceof ItemParsingError) {
        throw e;
      }
      throw new ItemParsingError(item, (e as Error).message);
    }
  }
  else
  {
    item.reqlevel = Math.max(item.reqlevel || 0, MISC[item.code]?.levelReq || 0)
  }

  // D2R EXTRAS flag: skip 52 bits; SET/UNIQUE/RUNEWORD items get an extra 64-bit chronicle block
  if (item.extras) {
    stream.read(52);
    if (
      item.runeword ||
      item.quality === ItemQuality.SET ||
      item.quality === ItemQuality.UNIQUE
    ) {
      stream.read(64);
    }
  }

  // v105: post-stat quantity flag (1 bit) present for ALL v105 items, including character files.
  // If the flag is set, read 8 bits of quantity (stash stackables use this for per-item count).
  if (owner.version >= V105_D2R) {
    if (stream.readBool()) {
      item.quantity = stream.readInt(8);
    }
  }

  item.raw = stream.done();
  return item;
}
