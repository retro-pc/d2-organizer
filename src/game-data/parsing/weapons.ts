import { readGameFile, writeJson } from "./files";
import { EquipmentTier, Weapon } from "../types";
import { getString } from "../strings";

export async function weaponsToJson() {
  const table = await readGameFile("Weapons");
  const weapons: Record<string, Weapon> = {};
  for (const line of table) {
    const code = line["code"].trim();
    const tier =
      code === line["normcode"].trim()
        ? EquipmentTier.NORMAL
        : code === line["ubercode"].trim()
        ? EquipmentTier.EXCEPTIONAL
        : EquipmentTier.ELITE;
    weapons[code] = {
      name: getString(line["namestr"].trim()),
      type: line["type"].trim(),
      tier,
      maxSockets: Number(line["gemsockets"]) || 0,
      spawnable: line["spawnable"].trim() === "1",
      indestructible: line["nodurability"].trim() === "1",
      stackable: line["stackable"] === "1",
      twoHanded: line["2handed"] === "1",
      width: Number(line["invwidth"]),
      height: Number(line["invheight"]),
      qlevel: Number(line["level"]),
      levelReq: Number(line["levelreq"]),
      trackQuestDifficulty: line["quest"] === "1" || undefined,
    };
  }
  await writeJson("Weapons", weapons);
  return weapons;
}
