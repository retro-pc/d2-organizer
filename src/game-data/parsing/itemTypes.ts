import { readGameFile, writeJson } from "./files";

export async function itemTypesToJson() {
  const table = await readGameFile("ItemTypes");
  const types: Record<string, string[]> = {};
  for (const line of table) {
    const code = line["Code"]?.trim();
    if (!code) continue;
    const parents = [line["Equiv1"]?.trim(), line["Equiv2"]?.trim()].filter(
      Boolean
    ) as string[];
    types[code] = parents;
  }
  await writeJson("ItemTypes", types);
  return types;
}
