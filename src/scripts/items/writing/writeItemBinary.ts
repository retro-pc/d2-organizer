import { Item } from "../types/Item";
import { ItemQuality } from "../types/ItemQuality";
import { ItemLocation, ItemStorageType } from "../types/ItemLocation";
import { Modifier } from "../types/Modifier";
import { ARMORS, ITEM_STATS, ItemStat, MISC, RUNEWORDS, WEAPONS } from "../../../game-data";
import { SaveFileWriter } from "../../save-file/SaveFileWriter";
import { BitWriter } from "./BitWriter";

// Stat ids that are implicitly written by a preceding "followedBy" stat
// (e.g. item_maxdamage_percent is followed by item_mindamage_percent with no
// id bits in between - the parser derives it automatically).
const FOLLOWED_BY_TARGETS = new Set(
  ITEM_STATS.map((s) => s?.followedBy).filter(
    (id): id is number => id !== undefined
  )
);

export interface CreateItemOpts {
  ethereal: boolean;
  baseCode?: string; // required for runeword items
  position?: { x: number; y: number }; // grid position in the shared stash
}

const HUFFMAN: Record<string, { v: number; l: number }> = {
  "0":{v:223,l:8},"1":{v:31,l:7},"2":{v:12,l:6},"3":{v:91,l:7},
  "4":{v:95,l:8},"5":{v:104,l:8},"6":{v:123,l:7},"7":{v:30,l:5},
  "8":{v:8,l:6},"9":{v:14,l:5}," ":{v:1,l:2},"a":{v:15,l:5},
  "b":{v:10,l:4},"c":{v:2,l:5},"d":{v:35,l:6},"e":{v:3,l:6},
  "f":{v:50,l:6},"g":{v:11,l:5},"h":{v:24,l:5},"i":{v:63,l:7},
  "j":{v:232,l:9},"k":{v:18,l:6},"l":{v:23,l:5},"m":{v:22,l:5},
  "n":{v:44,l:6},"o":{v:127,l:7},"p":{v:19,l:5},"q":{v:155,l:8},
  "r":{v:7,l:5},"s":{v:4,l:4},"t":{v:6,l:5},"u":{v:16,l:5},
  "v":{v:59,l:7},"w":{v:0,l:5},"x":{v:28,l:5},"y":{v:40,l:7},
  "z":{v:27,l:8},
};

function writeHuffmanCode(writer: BitWriter, code: string): void {
  const padded = code.toLowerCase().padEnd(4, " ");
  for (const c of padded) {
    const h = HUFFMAN[c];
    if (!h) throw new Error(`No huffman entry for '${c}'`);
    writer.writeUInt16(h.v, h.l);
  }
}

// Maps our ItemQuality enum to the 4-bit quality field in the binary
function qualityBits(q: ItemQuality | undefined): number {
  switch (q) {
    case ItemQuality.LOW:
      return 1;
    case ItemQuality.NORMAL:
      return 2;
    case ItemQuality.MAGIC:
      return 4;
    case ItemQuality.SET:
      return 5;
    case ItemQuality.RARE:
      return 6;
    case ItemQuality.UNIQUE:
      return 7;
    default:
      return 2;
  }
}

function writeModValue(writer: BitWriter, stat: ItemStat, mod: Modifier): void {
  if (stat.encode === 3) {
    // Charged skill: 6-bit level + 10-bit spell + 8-bit charges + 8-bit maxCharges
    writer.writeUInt8((mod.level ?? 0) + stat.bias, 6);
    writer.writeUInt16((mod.spell ?? 0) + stat.bias, 10);
    writer.writeUInt8((mod.charges ?? 0) + stat.bias, 8);
    writer.writeUInt8((mod.maxCharges ?? 0) + stat.bias, 8);
  } else if (stat.encode === 2) {
    // Chance to cast: 6-bit level + 10-bit spell + size-bit chance
    writer.writeUInt8((mod.level ?? 0) + stat.bias, 6);
    writer.writeUInt16((mod.spell ?? 0) + stat.bias, 10);
    writer.writeUInt32((mod.chance ?? 0) + stat.bias, stat.size);
  } else {
    if (stat.paramSize) {
      writer.writeUInt32(mod.param ?? 0, stat.paramSize);
    }
    writer.writeUInt32((mod.value ?? 0) + stat.bias, stat.size);
  }
}

function writeModifiers(writer: BitWriter, mods: Modifier[]): void {
  // Index mods by stat id, so "followedBy" chains can be resolved
  // regardless of the order they appear in.
  const idIndex = new Map<number, number>();
  for (let i = 0; i < mods.length; i++) {
    if (!idIndex.has(mods[i].id)) idIndex.set(mods[i].id, i);
  }

  for (let i = 0; i < mods.length; i++) {
    const mod = mods[i];
    const stat = ITEM_STATS[mod.id];
    if (!stat) continue;

    // Mods that are the target of another stat's "followedBy" are written
    // implicitly as part of that leader stat's chain - skip them here.
    if (FOLLOWED_BY_TARGETS.has(mod.id)) {
      const leaderId = mod.id - 1;
      if (
        idIndex.has(leaderId) &&
        ITEM_STATS[leaderId]?.followedBy === mod.id
      ) {
        continue;
      }
    }

    writer.writeUInt16(mod.id, 9);
    writeModValue(writer, stat, mod);

    // Follow the "followedBy" chain, writing each linked stat's value with
    // no id bits in between (the parser derives the id automatically).
    let nextId = stat.followedBy;
    while (nextId !== undefined) {
      const partnerStat = ITEM_STATS[nextId];
      const partnerIndex = idIndex.get(nextId);
      if (!partnerStat || partnerIndex === undefined) break;
      writeModValue(writer, partnerStat, mods[partnerIndex]);
      nextId = partnerStat.followedBy;
    }
  }
  writer.writeUInt16(0x1ff, 9); // terminator
}

// Write a single rune item binary (simple, location = socket)
function writeRuneItemBinary(runeCode: string, v105: boolean): Uint8Array {
  const writer = new BitWriter();

  // Flags
  writer.writeZeros(4); // b0-3
  writer.writeBit(1); // identified
  writer.writeZeros(6); // b5-10
  writer.writeBit(0); // b11: socketed = 0
  writer.writeZeros(9); // b12-20: unknown
  writer.writeBit(1); // b21: simple_item = 1
  writer.writeBit(0); // b22: ethereal = 0
  writer.writeBit(1); // b23: IFLAG_JUSTSAVED
  writer.writeBit(0); // b24: personalized
  writer.writeBit(0); // b25: drop_only
  writer.writeBit(0); // b26: given_runeword = 0
  writer.writeZeros(5); // b27-31

  writer.writeUInt16(5, 3); // D2R item version (3 bits, value 5 = binary 101)

  writer.writeUInt8(ItemLocation.SOCKET, 3); // location = socket (6)
  writer.writeUInt8(0, 4); // equipped_id
  writer.writeUInt8(0, 4); // position_x
  writer.writeUInt8(0, 4); // position_y
  writer.writeUInt8(0, 3); // stored = 0

  writeHuffmanCode(writer, runeCode);
  writer.writeUInt8(0, 1); // nr_of_items_in_sockets (simple → 1 bit)

  if (v105) writer.writeBit(0); // v105: post-stat quantity flag
  writer.align();
  return writer.toArray();
}

// Stash grid footprint of an item, accounting for runeword base selection
export function getItemDimensions(
  item: Item,
  opts: CreateItemOpts
): { width: number; height: number } {
  const code = item.runeword && opts.baseCode ? opts.baseCode : item.code;
  const base = ARMORS[code] || WEAPONS[code] || MISC[code];
  return base ? { width: base.width, height: base.height } : { width: 1, height: 1 };
}

export function writeItemBinary(item: Item, opts: CreateItemOpts, stashVersion = D2R_STASH_VERSION): Uint8Array {
  const v105 = stashVersion >= 105;
  const hasRuneword = item.runeword;
  // For runewords, use the selected base code
  const code = hasRuneword && opts.baseCode ? opts.baseCode : item.code;

  const isSimple = item.simple;
  const isRunewordWithBase = hasRuneword && !!opts.baseCode;
  const runeCount = isRunewordWithBase ? item.sockets ?? 0 : 0;

  const writer = new BitWriter();

  // 32-bit flags block
  writer.writeZeros(4); // b0-3: unknown
  writer.writeBit(1); // identified
  writer.writeZeros(6); // b5-10: unknown
  writer.writeBit(isRunewordWithBase ? 1 : item.socketed ? 1 : 0); // b11: socketed
  writer.writeZeros(9); // b12-20: unknown (ear/starter/etc)
  writer.writeBit(isSimple ? 1 : 0); // b21: simple_item
  writer.writeBit(opts.ethereal ? 1 : 0); // b22: ethereal
  writer.writeBit(1); // b23: IFLAG_JUSTSAVED
  writer.writeBit(0); // b24: personalized
  writer.writeBit(0); // b25: drop_only
  writer.writeBit(hasRuneword ? 1 : 0); // b26: given_runeword
  writer.writeZeros(5); // b27-31: unknown

  writer.writeUInt16(5, 3); // D2R item version (3 bits, value 5 = binary 101)

  // Location: stored in stash
  writer.writeUInt8(ItemLocation.STORED, 3);
  writer.writeUInt8(0, 4); // equipped_id = 0
  writer.writeUInt8(opts.position?.x ?? 0, 4); // position_x
  writer.writeUInt8(opts.position?.y ?? 0, 4); // position_y
  writer.writeUInt8(ItemStorageType.STASH, 3); // stored in stash

  writeHuffmanCode(writer, code);

  // Nr of filled sockets
  writer.writeUInt8(runeCount, isSimple ? 1 : 3);

  if (!isSimple) {
    // Unique item ID (random)
    writer.writeUInt32(Math.floor(Math.random() * 0xffffffff) >>> 0, 32);
    // Item level
    writer.writeUInt8(Math.min(item.level ?? 1, 99), 7);
    // Quality
    writer.writeUInt8(qualityBits(item.quality), 4);
    // Multiple pictures flag
    writer.writeBit(0);
    // Class-specific flag
    writer.writeBit(0);

    // Quality-specific ID
    switch (item.quality) {
      case ItemQuality.UNIQUE:
        writer.writeUInt16(item.unique ?? 0, 12);
        break;
      case ItemQuality.SET:
        writer.writeUInt16(item.unique ?? 0, 12);
        break;
      case ItemQuality.NORMAL:
        // normal quality: no extra id bits
        break;
    }

    // Runeword ID: binary stores (runewordId + 27); parser reads readInt(12) - 27
    if (hasRuneword && item.runewordId !== undefined) {
      writer.writeUInt16(item.runewordId + 27, 12);
      writer.writeUInt8(5, 4); // fixed value, always 5
    }

    // Timestamp flag
    writer.writeBit(0);

    const isArmor = !!ARMORS[code];
    const isWeapon = !!WEAPONS[code];

    // Defense rating for armors (stat id 31: armorclass, bias=10, size=11)
    if (isArmor) {
      const defStat = ITEM_STATS[31]!;
      const defMin = ARMORS[code]!.def[0];
      writer.writeUInt16(Math.max(0, defMin) + defStat.bias, defStat.size);
    }

    // Durability for weapons and armors
    const base = isArmor ? ARMORS[code] : isWeapon ? WEAPONS[code] : undefined;
    if (base) {
      const indestructible =
        base.indestructible ||
        (item.modifiers ?? []).some((m) => m.stat === "item_indesctructible");
      const maxDur = indestructible ? 0 : 50;
      writer.writeUInt16(maxDur, ITEM_STATS[73]!.size); // 8 bits: max durability
      if (maxDur > 0) {
        // 9 bits: 8-bit current durability + 1 unknown bit
        writer.writeUInt16(maxDur, ITEM_STATS[72]!.size);
      }
    }

    // v105: 1-bit stackable flag present for ALL v105 items
    if (v105) writer.writeBit(base?.stackable ? 1 : 0);
    if (base?.stackable) {
      writer.writeUInt16(item.quantity ?? 1, 9);
    }

    // Total sockets (4-bit field after durability)
    const totalSockets = isRunewordWithBase
      ? runeCount
      : item.socketed
      ? item.sockets ?? 0
      : 0;
    if (totalSockets > 0) {
      writer.writeUInt8(totalSockets, 4);
    }

    // Set plist_flag (5 bits)
    if (item.quality === ItemQuality.SET) {
      const count = item.setItemModifiers?.length ?? 0;
      writer.writeUInt8((1 << count) - 1, 5);
    }

    // Magic attributes
    if (hasRuneword) {
      writeModifiers(writer, []); // base item has no inherent mods
      writeModifiers(writer, item.modifiers ?? []); // runeword effect mods
    } else {
      writeModifiers(writer, item.modifiers ?? []);
      if (item.quality === ItemQuality.SET && item.setItemModifiers) {
        for (const modList of item.setItemModifiers) {
          writeModifiers(writer, modList);
        }
      }
    }
  }

  if (v105) writer.writeBit(0); // v105: post-stat quantity flag
  writer.align();

  // Append socketed rune items for runewords
  if (isRunewordWithBase && item.runewordId !== undefined) {
    const rw = RUNEWORDS[item.runewordId];
    if (rw) {
      for (const runeCode of rw.runes) {
        writer.writeArray(writeRuneItemBinary(runeCode, v105));
      }
    }
  }

  return writer.toArray();
}

const D2R_PAGE_HEADER = 0xaa55aa55;
const D2R_STASH_VERSION = 99;
export const STASH_PAGE_WIDTH = 10;
export const STASH_PAGE_HEIGHT = 10;
export const STASH_PAGE_COUNT = 3;

function writePage(w: SaveFileWriter, itemBytesList: Uint8Array[]) {
  const pageStart = w.nextIndex;
  w.writeInt32LE(D2R_PAGE_HEADER); // offset +0
  w.skip(4); // offset +4: unknown
  w.writeInt32LE(D2R_STASH_VERSION); // offset +8
  w.writeInt32LE(0); // offset +12: gold
  const lengthPos = w.nextIndex; // offset +16
  w.skip(48); // offset +16..+63: length + padding
  w.writeString("JM");
  w.writeInt16LE(itemBytesList.length);
  for (const bytes of itemBytesList) w.write(bytes);
  const pageEnd = w.nextIndex;
  w.writeInt32LE(pageEnd - pageStart, lengthPos);
  w.write([], pageEnd);
}

// Single item wrapped in a one-page D2R stash
export function wrapInD2rStash(itemBytes: Uint8Array): Uint8Array {
  const w = new SaveFileWriter();
  writePage(w, [itemBytes]);
  return w.done();
}

// Pack items across STASH_PAGE_COUNT pages (each STASH_PAGE_WIDTH × STASH_PAGE_HEIGHT)
// and write a D2R stash file.
export function wrapAllInD2rStash(
  items: Array<{ item: Item; opts: CreateItemOpts }>
): Uint8Array {
  // occupied[page] = Set of "x,y" strings
  const occupied: Set<string>[] = Array.from({ length: STASH_PAGE_COUNT }, () => new Set());

  function findSlot(width: number, height: number): { page: number; x: number; y: number } | null {
    for (let page = 0; page < STASH_PAGE_COUNT; page++) {
      for (let y = 0; y <= STASH_PAGE_HEIGHT - height; y++) {
        for (let x = 0; x <= STASH_PAGE_WIDTH - width; x++) {
          let fits = true;
          outer: for (let dx = 0; dx < width; dx++) {
            for (let dy = 0; dy < height; dy++) {
              if (occupied[page].has(`${x + dx},${y + dy}`)) { fits = false; break outer; }
            }
          }
          if (fits) return { page, x, y };
        }
      }
    }
    return null;
  }

  const pages: Uint8Array[][] = Array.from({ length: STASH_PAGE_COUNT }, () => []);

  for (const { item, opts } of items) {
    const { width, height } = getItemDimensions(item, opts);
    const slot = findSlot(width, height);
    if (!slot) continue; // no space — skip item
    const { page, x, y } = slot;
    for (let dx = 0; dx < width; dx++) {
      for (let dy = 0; dy < height; dy++) {
        occupied[page].add(`${x + dx},${y + dy}`);
      }
    }
    pages[page].push(writeItemBinary(item, { ...opts, position: { x, y } }));
  }

  const w = new SaveFileWriter();
  for (const pageItems of pages) writePage(w, pageItems);
  return w.done();
}
