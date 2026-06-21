import { D2rPage, D2rStash } from "../types";
import { SaveFileReader } from "../../save-file/SaveFileReader";
import { parseItemList } from "../../items/parsing/parseItemList";

export function parsePage(reader: SaveFileReader, stash: D2rStash) {
  const header = reader.readInt32LE().toString(16);
  if (header !== "aa55aa55") {
    throw new Error(`Unexpected header ${header} for a stash page`);
  }

  reader.read(8); // mode(4B) + version(4B)
  const gold = reader.readInt32LE();
  const sectorSize = reader.readInt32LE(); // total page size including 64-byte header
  const pageType = reader.readInt8(); // 0=normal, 1=extended gems/runes, 2=metadata
  reader.read(43); // padding to reach offset 0x40 (JM header position)

  const page: D2rPage = { gold, items: [] };

  if (pageType === 2) {
    // v105 metadata pages carry no items and have no JM header — skip remaining bytes
    const remaining = sectorSize - 64;
    if (remaining > 0) {
      reader.read(remaining);
    }
    return page;
  }

  page.items.push(...parseItemList(reader, stash));
  return page;
}
