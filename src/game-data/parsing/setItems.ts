import { readGameFile, writeJson } from "./files";
import { SetItem, Skill } from "../types";
import { getString } from "../strings";
import { readModifierRange } from "./modifierRange";

export async function setItemsToJson(skills: Skill[]) {
  const itemsTable = await readGameFile("SetItems");
  const setItems: SetItem[] = [];
  for (const line of itemsTable) {
    const item: SetItem = {
      name: getString(line["index"].trim()),
      code: line["item"].trim(),
      set: line["set"].trim(),
      qlevel: Number(line["lvl"]),
      levelReq: Number(line["lvl req"]),
      baseModifiers: [],
      setModifiers: [],
    };
    for (let i = 1; i <= 9; i++) {
      const modifier = readModifierRange(
        line[`prop${i}`],
        line[`par${i}`],
        line[`min${i}`],
        line[`max${i}`],
        skills
      );
      if (modifier) {
        item.baseModifiers.push(modifier);
      }
    }
    for (let i = 1; i <= 5; i++) {
      const partial = [];
      for (const s of ["a", "b"]) {
        const modifier = readModifierRange(
          line[`aprop${i}${s}`],
          line[`apar${i}${s}`],
          line[`amin${i}${s}`],
          line[`amax${i}${s}`],
          skills
        );
        if (modifier) {
          partial.push(modifier);
        }
      }
      item.setModifiers.push(partial);
    }
    setItems.push(item);
  }
  await writeJson("SetItems", setItems);
  return setItems;
}
