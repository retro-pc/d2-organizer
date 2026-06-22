import { readGameFile, writeJson } from "./files";
import { ItemStat } from "../types";
import { getString } from "../strings";

export async function itemStatsToJson() {
  const table = await readGameFile("ItemStatCost");
  const itemStats: ItemStat[] = [];
  for (const line of table) {
    const stat = line["Stat"];
    if (stat.startsWith("unused") || stat.endsWith("_bytime")) {
      continue;
    }
    const id = Number(line["*ID"]);
    const item: ItemStat = {
      stat: stat.trim(),
      encode: Number(line["Encode"]),
      size: Number(line["Save Bits"]),
      charSize: line["CSvBits"] ? Number(line["CSvBits"]) : undefined,
      bias: Number(line["Save Add"]),
      paramSize: Number(line["Save Param Bits"]),
      descPriority: Number(line["descpriority"]),
      descFunc: Number(line["descfunc"]),
      descVal: Number(line["descval"]),
      descPos: line["descstrpos"],
      descNeg: line["descstrneg"],
      descAdditional: getString(line["descstr2"].trim()),
      display: Number(line["advdisplay"]),
    };
    if (
      (item.encode === 2 && (item.size !== 7 || item.paramSize !== 16)) ||
      (item.encode === 3 && (item.size !== 16 || item.paramSize !== 16))
    ) {
      throw new Error("Invalid SkillOnEvent mod");
    }
    // Somehow these are "merged" with the next mod in the save file,
    // but there doesn't seem to be an indication of it in the text file.
    if ([17, 48, 50, 52, 54, 55, 57, 58].includes(id)) {
      item.followedBy = id + 1;
    }
    itemStats[id] = item;
  }
  await writeJson("ItemStatCost", itemStats);
  return itemStats;
}
