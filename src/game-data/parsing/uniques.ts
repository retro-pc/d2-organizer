import { readGameFile, writeJson } from "./files";
import { Skill, UniqueItem } from "../types";
import { getString } from "../strings";
import { readModifierRange } from "./modifierRange";

export async function uniquesToJson(skills: Skill[]) {
  const table = await readGameFile("UniqueItems");
  const uniques: UniqueItem[] = [];
  for (const line of table) {
    const item: UniqueItem = {
      name: getString(line["index"].trim()),
      enabled: line["disabled"].trim() !== "1",
      code: line["code"].trim(),
      qlevel: Number(line["lvl"]),
      reqlevel: Number(line["lvl req"]),
      modifiers: [],
    };
    for (let i = 1; i <= 12; i++) {
      const modifier = readModifierRange(
        line[`prop${i}`],
        line[`par${i}`],
        line[`min${i}`],
        line[`max${i}`],
        skills
      );
      if (modifier) {
        item.modifiers.push(modifier);
      }
    }
    uniques.push(item);
  }
  await writeJson("UniqueItems", uniques);
  return uniques;
}
