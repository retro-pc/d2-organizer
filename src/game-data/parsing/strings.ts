import { readGameFile, writeJson } from "./files";

export async function stringsToJson() {
  const allStrings: Record<string, string> = {};
  for (let i = 1; i < 5; i++) {
    for (const row of await readGameFile(`strings/strings${i}`)) {
      allStrings[row["String Index"].trim()] = row["Text"].trim();
    }
  }
  await writeJson("Strings", allStrings);
}
