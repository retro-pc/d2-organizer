import { D2rPage, D2rStash } from "../types";
import { SaveFileReader } from "../../save-file/SaveFileReader";
import { parseItemList } from "../../items/parsing/parseItemList";

export function parsePage(reader: SaveFileReader, stash: D2rStash) {
  const pageStart = reader.nextIndex;
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

  if (pageType !== 2) {
    page.items.push(...parseItemList(reader, stash));
  }

  // Seek to the exact end of this page so the next page starts correctly
  reader.nextIndex = pageStart + sectorSize;
  return page;
}
