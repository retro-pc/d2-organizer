import { readGameFile, writeJson } from "./files";
import fs from "fs/promises";
import path from "path";

export async function stringsToJson() {
  const allStrings: Record<string, string> = {};
  for (let i = 1; i < 5; i++) {
    for (const [code, value] of await readGameFile(`strings/strings${i}`)) {
      allStrings[code.trim()] = value.trim();
    }
  }

  await writeJson("Strings", allStrings);

  const baseFile = path.join("./game-data/json", "strings.json");
  const updateFile = path.join("./game-data/json", "npcs.json");

  const baseData = JSON.parse(await fs.readFile(baseFile, "utf8"));
  const npcsArray = JSON.parse(await fs.readFile(updateFile, "utf8"));
  const updateData: Record<string, string> = Object.fromEntries(
    npcsArray
      .filter((npc: any) => npc.Key && npc.enUS)
      .map((npc: any) => [npc.Key, npc.enUS])
  );

  const result = {
    ...baseData,
    ...updateData,
  };

  await fs.writeFile(baseFile, JSON.stringify(result, null, 2), "utf8");
}
