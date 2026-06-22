import { readGameFile, writeJson } from "./files";
import { Misc } from "../types";
import { getString } from "../strings";

export async function miscToJson() {
  const misc: Record<string, Misc> = {};
  for (const line of await readGameFile("Misc")) {
    const code = line["code"].trim();
    misc[code] = {
      name: getString(line["namestr"].trim()),
      type: line["type"].trim(),
      tier: 0,
      maxSockets: Number(line["gemsockets"]),
      spawnable: line["spawnable"].trim() === "1",
      indestructible: line["nodurability"].trim() === "1",
      width: Number(line["invwidth"]),
      height: Number(line["invheight"]),
      qlevel: Number(line["level"]),
      levelReq: Number(line["levelreq"]),
      stackable: line["stackable"] === "1",
      trackQuestDifficulty: line["quest"] === "1" || undefined,
    };
    // Token of absolution name is messed up, has the description at the start
    if (code === "toa") {
      misc[code].name = misc[code].name.split("\\n")[1];
    }
  }
  await writeJson("Misc", misc);
  return misc;
}
