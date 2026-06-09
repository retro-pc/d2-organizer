import { readGameFile, writeJson } from "./files";

export async function itemTypesToJson() {
  const table = await readGameFile("ItemTypes");
  const types: Record<string, string[]> = {};
  for (const line of table) {
    const code = line[1]?.trim();
    if (!code) continue;
    const parents = [line[2]?.trim(), line[3]?.trim()].filter(
      Boolean
    ) as string[];
    types[code] = parents;
  }
  await writeJson("ItemTypes", types);
  return types;
}
