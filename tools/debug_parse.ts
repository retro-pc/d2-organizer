import * as fs from "fs";
import { parseCharacter } from "./character/parsing/parseCharacter";

const raw = fs.readFileSync("/Users/stan/dev/d2-organizer/tools/warlock/hexlock.d2s");
const character = parseCharacter(new Uint8Array(raw));
console.log("Total items:", character.items.length);

for (const item of character.items) {
  const skillTabMods = (item.modifiers || []).filter((m) => m.stat === "item_addskill_tab");
  if (skillTabMods.length > 0 || item.code === "utb") {
    console.log(`\n[${item.name}] code=${item.code} quality=${item.quality}`);
    for (const mod of (item.modifiers || [])) {
      console.log(`  ${mod.stat} param=${mod.param} value=${mod.value} => "${mod.description}"`);
    }
  }
}
