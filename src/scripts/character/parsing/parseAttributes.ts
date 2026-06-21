import { binaryStream } from "../../save-file/binary";
import { ITEM_STATS } from "../../../game-data";
import { SaveFileReader } from "../../save-file/SaveFileReader";
import { V105_D2R } from "./versions";

export function parseAttributes(reader: SaveFileReader, version: number) {
  // v105 restructured the fixed save-file sections; the gf stats block moved
  const gfOffset = version >= V105_D2R ? 0x341 : 0x2fd;
  const header = reader.readString(2, gfOffset);
  if (header !== "gf") {
    throw new Error(`Unexpected header ${header} for an attributes list`);
  }
  // Maximum 51 bytes of attributes data
  const stream = binaryStream(reader);
  let attribute: number;
  while ((attribute = stream.readInt(9)) !== 511) {
    // This is the value of the attribute, we do not need it
    stream.readInt(ITEM_STATS[attribute]?.charSize ?? 0);
  }
}
