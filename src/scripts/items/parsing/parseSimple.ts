import { Item } from "../types/Item";
import { BinaryStream } from "../../save-file/binary";
import { getBase } from "../getBase";
import { FIRST_D2R } from "../../character/parsing/versions";
import { decodeHuffman } from "./huffman";
import { ItemsOwner } from "../../save-file/ownership";

export function parseSimple(stream: BinaryStream, owner: ItemsOwner) {
  const { read, readBool, readInt, skip } = stream;

  // Header bits 0–26 are the same for all versions
  skip(4);
  const identified = readBool(); // bit 4
  skip(6);
  const socketed = readBool(); // bit 11
  skip(9);
  const simple = readBool(); // bit 21
  const ethereal = readBool(); // bit 22
  skip(1);
  const personalized = readBool(); // bit 24
  skip(1);
  const runeword = readBool(); // bit 26

  // Bits 27–34 differ: D2R has EXTRAS flag at bit 28 + 3-bit version;
  // legacy has 10-bit version spanning bits 27–36.
  let extras: boolean | undefined;
  let version: string;
  if (owner.version >= FIRST_D2R) {
    skip(1); // bit 27: unknown
    extras = readBool(); // bit 28: EXTRAS — triggers 52-bit skip after stat blocks
    skip(3); // bits 29–31: unknown
    version = read(3); // bits 32–34
  } else {
    skip(5);
    version = readInt(10).toString();
  }

  const location = readInt(3);
  const equippedInSlot = readInt(4);
  const column = readInt(4);
  const row = readInt(4);
  const stored = readInt(3);

  const item: Item = {
    raw: "",
    owner,
    identified,
    socketed,
    simple,
    ethereal,
    personalized,
    runeword,
    extras,
    version,
    location,
    equippedInSlot,
    column,
    row,
    stored,
    code: "",
    search: "",
  };

  if (owner.version >= FIRST_D2R) {
    item.code = decodeHuffman(stream, 4).trim();
  } else {
    item.code = String.fromCharCode(
      readInt(8),
      readInt(8),
      readInt(8),
      readInt(8)
    ).trim();
  }

  // Checking base for all items, not just simple ones. That way we fail early if something goes wrong.
  const base = getBase(item);

  // Items that check for the difficulty they were found in have 2 extra bits for the difficulty
  if (base.type === "ques" && base.trackQuestDifficulty) {
    read(2);
  }

  item.nbFilledSockets = readInt(item.simple ? 1 : 3);
  if (item.socketed && item.nbFilledSockets > 0) {
    // Array to store socketed items
    item.filledSockets = [];
  }

  if (item.simple) {
    item.name = base.name;
  }

  return item;
}
