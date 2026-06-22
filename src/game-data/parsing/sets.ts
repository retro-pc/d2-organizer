import { readGameFile, writeJson } from "./files";
import { Set, SetItem, Skill } from "../types";
import { getString } from "../strings";
import { readModifierRange } from "./modifierRange";

export async function setsToJson(setItems: SetItem[], skills: Skill[]) {
  const setsTable = await readGameFile("Sets");
  const sets: Record<string, Set> = {};
  for (const line of setsTable) {
    const setId = line["index"].trim();
    const set: Set = {
      name: getString(line["name"].trim()),
      levelReq: setItems
        .filter(({ set }) => setId === set)
        .reduce((max, { levelReq }) => Math.max(max, levelReq), 0),
      modifiers: [],
    };
    // Partial set bonuses: PCode2a/b through PCode5a/b
    for (let i = 2; i <= 5; i++) {
      const partial = [];
      for (const s of ["a", "b"]) {
        const modifier = readModifierRange(
          line[`PCode${i}${s}`],
          line[`PParam${i}${s}`],
          line[`PMin${i}${s}`],
          line[`PMax${i}${s}`],
          skills
        );
        if (modifier) {
          partial.push(modifier);
        }
      }
      set.modifiers.push(partial);
    }
    // Full set bonus: FCode1..8
    const full = [];
    for (let i = 1; i <= 8; i++) {
      const modifier = readModifierRange(
        line[`FCode${i}`],
        line[`FParam${i}`],
        line[`FMin${i}`],
        line[`FMax${i}`],
        skills
      );
      if (modifier) {
        full.push(modifier);
      }
    }
    set.modifiers.push(full);
    sets[setId] = set;
  }
  await writeJson("Sets", sets);
  return sets;
}
