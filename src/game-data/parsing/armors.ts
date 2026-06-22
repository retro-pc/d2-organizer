import { readGameFile, writeJson } from "./files";
import { Armor, EquipmentTier } from "..";
import { getString } from "../strings";

export async function armorsToJson() {
  const table = await readGameFile("Armor");
  const armors: Record<string, Armor> = {};
  for (const line of table) {
    const code = line["code"].trim();
    const tier =
      code === line["normcode"].trim()
        ? EquipmentTier.NORMAL
        : code === line["ubercode"].trim()
        ? EquipmentTier.EXCEPTIONAL
        : EquipmentTier.ELITE;
    armors[code] = {
      name: getString(line["namestr"].trim()),
      type: line["type"].trim(),
      tier,
      def: [Number(line["minac"]), Number(line["maxac"])],
      maxSockets: Number(line["gemsockets"]),
      spawnable: line["spawnable"].trim() === "1",
      indestructible: line["nodurability"].trim() === "1",
      width: Number(line["invwidth"]),
      height: Number(line["invheight"]),
      qlevel: Number(line["level"]),
      levelReq: Number(line["levelreq"]),
      stackable: line["stackable"] === "1",
    };
  }
  await writeJson("Armor", armors);
  return armors;
}
