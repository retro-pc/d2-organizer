import { SaveFileReader } from "../../save-file/SaveFileReader";
import { Character } from "../types";
import { parseAttributes } from "./parseAttributes";
import { parseItemList } from "../../items/parsing/parseItemList";
import { parseMercenary } from "./parseMercenary";
import { postProcessCharacter } from "./postProcessCharacter";
import { parseCorpses } from "./parseCorpses";
import { V105_D2R } from "./versions";

// Can't use Node's Buffer because this needs to run in the browser
export function parseCharacter(
  raw: Uint8Array,
  file?: { name: string; lastModified: number }
) {
  const reader = new SaveFileReader(raw);
  const header = reader.readInt32LE().toString(16);
  if (header !== "aa55aa55") {
    throw new Error("This does not look like a Diablo 2 character save (.d2s)");
  }

  const version = reader.readInt32LE(4);
  const isV105 = version >= V105_D2R;

  const character: Character = {
    filename: file?.name ?? "",
    lastModified: file?.lastModified ?? 0,
    version,
    // v105 moved the name into the extended header at 0x12B (utf8, 16 bytes)
    name: isV105
      ? reader.readString(16, 0x12b).split("\0")[0]
      : reader.readNullTerminatedString(20),
    class: reader.readInt8(isV105 ? 0x18 : 0x28),
    hasCorpse: false,
    hasMercenary: !!reader.readInt32LE(isV105 ? 0xa3 : 0xb3),
    characterData: new Uint8Array(),
    golem: new Uint8Array(),
    items: [],
  };

  parseAttributes(reader, version);

  // Skip over skills
  reader.readString(32);

  character.characterData = reader.read(reader.nextIndex - 16, 16);

  // Items on the character or in stash
  character.items.push(...parseItemList(reader, character));

  // Items on a corpse
  parseCorpses(reader, character);

  // TODO: classic characters
  const expansionChar = true;
  if (expansionChar) {
    parseMercenary(reader, character);
    // Captures iron golem (0x666b), and on v105 also warlock bind-demon (0x666c)
    character.golem = reader.readRemaining();
  }

  postProcessCharacter(character);
  return character;
}
