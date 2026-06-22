import { Misc, Runeword, Skill } from "../types";
import { readGameFile, writeJson } from "./files";
import { getString } from "../strings";
import { readModifierRange } from "./modifierRange";

export async function runewordsToJson(
  misc: Record<string, Misc>,
  skills: Skill[]
) {
  let runewords: Runeword[] = [];
  for (const line of await readGameFile("Runes")) {
    let index = Number(line["Name"].split("Runeword")[1]);
    const runes = [1, 2, 3, 4, 5, 6]
      .map((i) => line[`Rune${i}`].trim())
      .filter(Boolean);
    const runeword: Runeword = {
      name: getString(line["Name"].trim()),
      enabled:
        line["complete"].trim() === "1" &&
        !line["disallowCraftingInNonLadder"].trim(),
      runes,
      levelReq: runes.length
        ? Math.max(...runes.map((rune) => misc[rune]?.levelReq ?? 0))
        : 0,
      itypes: [1, 2, 3, 4, 5, 6]
        .map((i) => line[`itype${i}`].trim())
        .filter(Boolean),
      etypes: [1, 2, 3]
        .map((i) => line[`etype${i}`].trim())
        .filter(Boolean),
      modifiers: [],
    };
    for (let i = 1; i <= 7; i++) {
      const modifier = readModifierRange(
        line[`T1Code${i}`],
        line[`T1Param${i}`],
        line[`T1Min${i}`],
        line[`T1Max${i}`],
        skills
      );
      if (modifier) {
        runeword.modifiers.push(modifier);
      }
    }
    // There is a bug in the data, there are two Runeword95 but no Runeword96
    if (runewords[index] && !runeword.enabled) index++;
    runewords[index] = runeword;
  }
  runewords = runewords.filter((runeword) => !!runeword);
  await writeJson("Runewords", runewords);
  return runewords;
}
