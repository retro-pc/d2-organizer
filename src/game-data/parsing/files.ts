import { readFile, writeFile } from "fs/promises";

export const TXT_FOLDER = "game-data/txt";
export const JSON_FOLDER = "game-data/json";

export async function readGameFile(filename: string): Promise<Record<string, string>[]> {
  const raw = await readFile(`${TXT_FOLDER}/${filename}.txt`, {
    encoding: "utf-8",
  });
  const lines = raw
    .trim()
    .split("\n")
    .filter((line) => !line.startsWith("Expansion"))
    .map((line) => line.split("\t"));
  const [headers, ...rows] = lines;
  return rows.map((row) => {
    const record: Record<string, string> = {};
    headers.forEach((h, i) => {
      record[h] = row[i] ?? "";
    });
    return record;
  });
}

export async function writeJson(filename: string, data: unknown) {
  await writeFile(
    `${JSON_FOLDER}/${filename}.json`,
    JSON.stringify(data, undefined, 2)
  );
}
