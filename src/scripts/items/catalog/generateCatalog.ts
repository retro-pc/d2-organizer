import { Item } from "../types/Item";
import {
  ItemEquipSlot,
  ItemLocation,
  ItemStorageType,
} from "../types/ItemLocation";
import { ItemQuality } from "../types/ItemQuality";
import {
  ARMORS,
  Equipment,
  Gem,
  GEMS,
  MISC,
  ModifierRange,
  RUNEWORDS,
  Runeword,
  SET_ITEMS,
  UNIQUE_ITEMS,
  WEAPONS,
} from "../../../game-data";
import { generateFixedMods } from "../post-processing/generateFixedMods";
import { postProcessItem } from "../post-processing/postProcessItem";
import { LAST_LEGACY } from "../../character/parsing/versions";
import { PlugyStash } from "../../plugy-stash/types";
import { itemMatchesTypes } from "./itemTypeMatching";

export const VIRTUAL_OWNER: PlugyStash = {
  filename: "catalog.sss",
  lastModified: 0,
  version: LAST_LEGACY,
  personal: false,
  pageFlags: false,
  gold: 0,
  pages: [],
};

function makeItemBase(): Omit<Item, "code" | "name" | "quality"> {
  return {
    raw: "",
    owner: VIRTUAL_OWNER,
    version: "",
    identified: true,
    socketed: false,
    simple: false,
    ethereal: false,
    personalized: false,
    runeword: false,
    location: ItemLocation.STORED,
    equippedInSlot: ItemEquipSlot.NONE,
    stored: ItemStorageType.STASH,
    column: 0,
    row: 0,
    search: "",
    corpse: false,
    mercenary: false,
    modifiers: [],
  };
}

// Determine which of a gem's stat sets (weapon/armor/shield) applies to the
// bases a runeword can be made in, mirroring addSocketedMods's categorization.
function getGemCategory(rw: Runeword): keyof Gem {
  for (const base of Object.values(ARMORS)) {
    if (base && itemMatchesTypes(base.type, rw.itypes, rw.etypes)) {
      return base.type === "shie" || base.type === "head" || base.type === "ashd"
        ? "shield"
        : "armor";
    }
  }
  for (const base of Object.values(WEAPONS)) {
    if (base && itemMatchesTypes(base.type, rw.itypes, rw.etypes)) {
      return "weapon";
    }
  }
  return "weapon";
}

// The stat bonuses granted by the runes socketed into a runeword, on top of
// the runeword's own named bonus.
function getRunewordSocketRanges(rw: Runeword): ModifierRange[] {
  const category = getGemCategory(rw);
  return rw.runes.flatMap((code) => GEMS[code]?.[category] ?? []);
}

export function generateUniqueItems(): Item[] {
  const items: Item[] = [];
  for (let i = 0; i < UNIQUE_ITEMS.length; i++) {
    const unique = UNIQUE_ITEMS[i];
    if (!unique.enabled || !unique.code) continue;
    try {
      const item = {
        ...makeItemBase(),
        code: unique.code,
        level: unique.qlevel,
        reqlevel: unique.reqlevel,
        quality: ItemQuality.UNIQUE,
        unique: i,
        name: unique.name,
        modifiers: generateFixedMods(unique.modifiers, true),
      } as Item;
      postProcessItem(item);
      items.push(item);
    } catch (_e) {
      console.warn("Catalog generation error:", _e);
    }
  }
  return items;
}

export function generateSetItems(): Item[] {
  const items: Item[] = [];
  for (let i = 0; i < SET_ITEMS.length; i++) {
    const setItem = SET_ITEMS[i];
    if (!setItem.code) continue;
    try {
      const item = {
        ...makeItemBase(),
        code: setItem.code,
        level: setItem.qlevel,
        reqlevel: setItem.levelReq,
        quality: ItemQuality.SET,
        unique: i,
        name: setItem.name,
        modifiers: generateFixedMods(setItem.baseModifiers, true),
        setItemModifiers: setItem.setModifiers.map((mods) =>
          generateFixedMods(mods, true)
        ),
      } as Item;
      postProcessItem(item);
      items.push(item);
    } catch (_e) {
      console.warn("Catalog generation error:", _e);
    }
  }
  return items;
}

export function generateRunewords(): Item[] {
  const items: Item[] = [];
  for (let i = 0; i < RUNEWORDS.length; i++) {
    const rw = RUNEWORDS[i];
    if (!rw || !rw.enabled) continue;
    try {
      const item = {
        ...makeItemBase(),
        // Empty code — runewords apply to various bases; getBase returns FALLBACK_BASE
        code: "",
        level: rw.levelReq,
        reqlevel: rw.levelReq,
        quality: ItemQuality.NORMAL,
        runeword: true,
        runewordId: i,
        name: rw.name,
        sockets: rw.runes.length,
        modifiers: generateFixedMods(rw.modifiers, true),
        socketModifiers: generateFixedMods(getRunewordSocketRanges(rw), true),
      } as Item;
      postProcessItem(item);
      items.push(item);
    } catch (_e) {
      console.warn("Catalog generation error:", _e);
    }
  }
  return items;
}

export function generateMiscItems(): Item[] {
  const items: Item[] = [];
  for (const [code, base] of Object.entries(MISC)) {
    if (!base || base.stackable || base.type === "book") continue;
    try {
      const item = {
        ...makeItemBase(),
        simple: true,
        code,
        level: base.qlevel,
        reqlevel: base.levelReq,
        quality: ItemQuality.NORMAL,
        name: base.name,
      } as Item;
      items.push(item);
    } catch (_e) {
      console.warn("Catalog generation error:", _e);
    }
  }
  return items;
}

// Plain armor/weapon bases that can spawn as magic or rare items.
export function generateEquipmentItems(): Item[] {
  const items: Item[] = [];
  for (const bases of [ARMORS, WEAPONS] as Record<string, Equipment | undefined>[]) {
    for (const [code, base] of Object.entries(bases)) {
      if (!base || !base.spawnable) continue;
      try {
        const item = {
          ...makeItemBase(),
          code,
          level: base.qlevel,
          reqlevel: base.levelReq,
          quality: ItemQuality.NORMAL,
          name: base.name,
        } as Item;
        if ("def" in base) {
          const armor = base as { def: number[] };
          item.defense = armor.def[0];
          item.defenseRange = [armor.def[0], armor.def[1]];
        }
        items.push(item);
      } catch (_e) {
        console.warn("Catalog generation error:", _e);
      }
    }
  }
  return items;
}
