import { readGameFile, writeJson } from "./files";
import { getString } from "../strings";
import { CharacterClass, Skill } from "../types";

export async function skillsToJson(charClasses: CharacterClass[]) {
  const skills: Skill[] = [];
  const descriptions = await readGameFile("SkillDesc");
  for (const line of await readGameFile("Skills")) {
    const description = descriptions.find(
      (desc) =>
        desc["skilldesc"]?.toLocaleLowerCase() ===
        line["skill"].trim().toLocaleLowerCase()
    );
    const charClass = charClasses.findIndex(
      ({ code }) => code === line["charclass"].trim()
    );
    skills[Number(line["*Id"])] = {
      code: line["skill"].trim(),
      name: getString(description?.["str name"]?.trim() ?? line["skill"].trim()),
      ...(charClass >= 0 && { charClass }),
    };
  }
  await writeJson("Skills", skills);
  return skills;
}
