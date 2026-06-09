import { readFile } from "fs/promises";
import { parseCharacter } from "./character/parsing/parseCharacter";
import { parseD2rStash } from "./d2r-stash/parsing/parseD2rStash";

async function main() {
  // const stash = parseD2rStash(await readFile("test/save/SharedStashSoftCoreV2.d2i"));
  // console.log(stash);

  // const character = parseCharacter(await readFile("test/save/Seileen.d2s"));
  // console.log(character);
}

void main();
