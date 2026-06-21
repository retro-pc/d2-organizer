# D2S v105 Format Notes

## Version Ranges
- v96 = LoD (offline classic D2)
- v97-v98 = D2I shared stash, early D2R
- v99 = Blizzless mod
- v105 = D2R 2.8+

---

## Header Structure Differences (v105 vs v99)

### At offset 0x10
- v99: 20 bytes (weaponSet 4B + name 16B)
- v105: 4 bytes only (zeros) → net -16 bytes

### Status byte
- v99: offset 0x24, bit 5 = expansion flag
- v105: offset 0x14, expansion bit **removed** (always 0) — moved to extended header byte 73

### Key header offsets (absolute byte positions)
| Field         | v99  | v105 |
|---------------|------|------|
| class byte    | 0x28 | 0x18 |
| merc data     | 0xB3 | 0xA3 |
| quests act 1  | 0x159| 0x19D|
| quests act 2  | 0x1B9| 0x1FD|
| quests act 3  | 0x219| 0x25D|
| `gf` stats    | 0x2FD| 0x341|

In code: `reader.seek(V105 ? X : Y)` — V105 offsets are 68 bytes higher throughout the fixed sections.

### Name field
- v99: offset 0x10, 16 bytes ASCII (or 0x10B fallback utf8 32 bytes)
- v105: no name at 0x10; read utf8 16 bytes at offset 0x12B

### Extended Header (starts after merc data)
- v99: 76 + 16 (name) + 52 = 144 bytes
- v105: 124 + 16 (name) + 88 = 228 bytes (+84 bytes)

### v105 Extended Header Block 1 (124 bytes)
- Bytes 0–72: zeros (unknown)
- **Byte 73 (abs ~0xF8): CHARACTER TYPE FLAG — CRITICAL**
  - `0x00` = INVALID → game crashes on load!
  - `0x01` = classic (pre-expansion)
  - `0x03` = expansion (required for all D2R characters)
- Bytes 74–75: `00 00` padding
- Bytes 76–123: equipped item reference entries for character select screen
  - Up to 4 entries, 12 bytes each: 4-byte base code (space-padded) + 8-byte metadata
  - All zeros = safe (game doesn't crash, just no icon on select screen)

---

## Item Bit Layout (D2R / v99 / v105)

Items are **not** prefixed by `JM` per-item in D2R — `JM` appears only as the item list header.

### Item header (bit-level, D2R format)
```
bits  0– 3: unknown (skip 4)
bit   4   : identified flag (1 = identified)
bits  5–10: unknown (skip 6)
bit  11   : socketed
bits 12–15: unknown (skip 4)
bit  16   : ear
bits 17–20: unknown (skip 4)
bit  21   : simple (no extended data)
bit  22   : ethereal
bit  23   : unknown (skip 1)
bit  24   : personalized
bit  25   : unknown (skip 1)
bit  26   : runeword
bit  27   : unknown (skip 1)      ← D2R only
bit  28   : EXTRAS flag            ← D2R only — triggers 52-bit skip after stats
bits 29–31: unknown (skip 3)      ← D2R only
bits 32–34: item version (3 bits) ← D2R only
bits 35–37: location (0=stored, 1=equipped, 2=belt, 3=cursor, 4=item, 6=socketed)
bits 38–41: body location (equipped slot)
bits 42–45: inventory column
bits 46–49: inventory row
bits 50–52: storage (1=inventory, 4=stash, 6=cube)
4× huffman chars: base item code (3 letters + space)
```

### After base code — simple items
```
1 bit: socketed count (always 1 bit for simple)
[D2R extras=1]: skipbits(52)
[V105]: 1 flag bit; if 1 → read 8-bit quantity
align to byte boundary
[then socketed child items...]
```

### After base code — non-simple items
```
3 bits: socketed count
32 bits: unknown (uid/time)
7 bits: item level
4 bits: quality (1=low,2=normal,3=sup,4=magic,5=set,6=rare,7=unique,8=crafted)
1 bit: has picture (if 1: 3 bits picture)
1 bit: class-specific (if 1: 11 bits)
[quality-specific data: set=12b, rare/crafted=8+8+6×12b, unique=12b, magic=11+11b]
[runeword: 12 bits rw-id + 4 bits unk]
[personalized: huffman chars until null (8-bit per char for v98+)]
[book: 5 bits]
[realm data: 1 bit; if 1 → skipbits(128 for misc, else 3)]
[armor: 11 bits defense]
[armor or weapon: 8 bits maxdur; if maxdur>0 → 9 bits curdur]
[V105 stackable: 1 flag bit; if 1 → 9 bits quantity]
[socketed: 4 bits socket count]
[set quality: 5 bits set-flags → each set bit = extra stat block]
stats block (9-bit stat ids until 0x1ff)
[set flags: up to 5 extra stat blocks]
[runeword: extra stat block]
[D2R extras=1]: skipbits(52)           ← always after ALL stat blocks
[D2R extras=1, Blizzless SET/UNIQUE/RUNEWORD]: skipbits(64)  ← chronicle-tracking field
[V105]: 1 flag bit; if 1 → read 8-bit quantity  ← post-stat quantity (extended stash use)
align to byte boundary
[then socketed child items...]
```

---

## v105 Quantity Fields

Two separate quantity mechanisms co-exist in v105:

| Position | Used for | Bits |
|----------|----------|------|
| Before socketed count (non-simple) / after socketed-count (simple) | Standard stackables (normal items in stash) | 1 flag + 9 bits |
| After all stats, before byte-align | D2I extended stash stackables | 1 flag + 8 bits |

The standard field is gated by `stackable` flag in item data. The v105 post-stat field is always checked regardless of `stackable` — used by D2R 2.4+ to store rune/gem/key stack counts in the extended stash page.

---

## Hireling Section (0x666a) — CRITICAL

The `0x666a` marker is always present (even when `mercId = 0`), but **the JM item list is omitted when the character has no active merc**.

Parser must peek 2 bytes after reading `0x666a`:
```js
if (reader.read16() !== 0x666a) throw Error('invalid hireling header');
const byteIdx = reader.bitpos >> 3;
const nextWord = reader.buffer[byteIdx] | (reader.buffer[byteIdx + 1] << 8);
if (nextWord === 0x4d4a) {            // JM marker present
  parseItemList(handler);
}
// else: no merc, no items — continue directly to 0x666b
```

Unconditionally calling `parseItemList()` when mercId=0 causes "invalid item table header" crash.

---

## Section Markers (in order of appearance)

| Marker    | Hex      | Content |
|-----------|----------|---------|
| `Woo!`    | 0x576f6f21 | Quests (298 bytes: 4 header + 6 sub-header + 3×96 data) |
| `WS`      | 0x5753   | Waypoints (80 bytes) |
| NPC intro | —        | NPC dialog flags (52 bytes) |
| `gf`      | 0x6667   | Character stats (9-bit stat ids) |
| `if`      | 0x6669   | Skills (30 bytes, one per skill slot) |
| `JM`      | 0x4d4a   | Item list header: count (2B) + items |
| `JM`      | 0x4d4a   | Corpse item list |
| `0x666a`  | —        | Merc items section; JM list follows **only if mercId ≠ 0** |
| `0x666b`  | —        | Iron golem: 1 flag byte; if 1 → one item follows |
| `0x666c`  | —        | v105 bind-demon / warlock data (see below) |

---

## 0x666c Section (v105 — Warlock bind-demon)

Structure: `01 00  6C 66  count(2B)  [entries...]`

Only the first entry is parsed. Entry format:
```
2B: entrySize
2B: idType    (1 = normal monster by hcidx, 2 = super unique by index)
2B: binaryId  (hcidx, 1-indexed → id = binaryId - 1)
2B: skip
2B: monType   (8 = unique, 12 = champion, 16 = minion?)
2B: skip
1B: difficulty (0 = Normal, 1 = Nightmare, 2 = Hell)
11B: skip
4B: area (level ID)
4B: level
48B: skip
8B: unique modifier IDs (indices into uniqueMods table)
4B: skip
```

The section is optional / non-critical — parse errors are silently caught.

---

## D2I Shared Stash Format

- Flat concatenation of pages (no global header)
- Each page: 64-byte header + JM item list
  - 0x00: Signature (4B) = `0xAA55AA55`
  - 0x04: Mode (4B)
  - 0x08: Version (4B) — 105 = D2R
  - 0x0C: Gold (4B)
  - 0x10: SectorSize (4B) — total page size including header
  - 0x14: PageType (1B) — 0=normal stash, 1=extended (gems/runes/materials), 2=metadata
  - 0x40: JM header (2B) + item count (2B) + items
- v105 D2R layout: 5 normal + 1 extended + 1 metadata = 7 pages total
- Metadata pages (type=2) have no JM header — skip them entirely
