import { readGameFile, writeJson } from "./files";
import { Gem, Skill } from "../types";
import { readModifierRange } from "./modifierRange";

const GEM_PREFIXES: Record<"weapon" | "armor" | "shield", string> = {
  weapon: "weapon",
  armor: "helm",
  shield: "shield",
};

export async function gemsToJson(skills: Skill[]) {
  const table = await readGameFile("Gems");
  const gems: Record<string, Gem> = {};
  for (const line of table) {
    const code = line["code"].trim();
    const gem: Gem = {
      weapon: [],
      armor: [],
      shield: [],
    };
    (["weapon", "armor", "shield"] as const).forEach((list) => {
      const prefix = GEM_PREFIXES[list];
      for (let i = 1; i <= 3; i++) {
        const modifier = readModifierRange(
          line[`${prefix}Mod${i}Code`],
          line[`${prefix}Mod${i}Param`],
          line[`${prefix}Mod${i}Min`],
          line[`${prefix}Mod${i}Max`],
          skills
        );
        if (modifier) {
          gem[list].push(modifier);
        }
      }
    });
    gems[code] = gem;
  }
  await writeJson("Gems", gems);
  return gems;
}
