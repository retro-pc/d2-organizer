import { useContext, useMemo, useState } from "preact/hooks";
import { Search, searchItems } from "../controls/Search";
import "../controls/Controls.css";
import { ItemsTable } from "../collection/ItemsTable";
import { Item } from "../../scripts/items/types/Item";
import { ItemQuality } from "../../scripts/items/types/ItemQuality";
import {
  generateUniqueItems,
  generateSetItems,
  generateRunewords,
  generateMiscItems,
  generateEquipmentItems,
} from "../../scripts/items/catalog/generateCatalog";
import { ARMORS, WEAPONS, RUNEWORDS, SKILLS, SKILL_TABS } from "../../game-data";
import { itemMatchesTypes } from "../../scripts/items/catalog/itemTypeMatching";
import { BufferContext } from "../store/BufferContext";
import { ItemCard } from "../items/ItemCard";
import "../items/ItemCardLayout.css";
import "./Catalog.css";

type Category = "uniques" | "sets" | "runewords" | "misc" | "base";

interface CategoryDef {
  id: Category;
  label: string;
  colorClass: string;
}

const CATEGORIES: CategoryDef[] = [
  { id: "runewords", label: "Runewords", colorClass: "cat-runeword" },
  { id: "uniques", label: "Unique Items", colorClass: "cat-unique" },
  { id: "base", label: "Base Items", colorClass: "cat-misc" },
  { id: "sets", label: "Set Items", colorClass: "cat-set" },
  { id: "misc", label: "Miscellaneous", colorClass: "cat-misc" },
];

interface SkillChoice {
  modIdx: number;
  label: string;
  options: { value: number; label: string }[];
}

interface AddForm {
  item: Item;
  ethereal: boolean;
  baseCode: string;
  skillChoices: Record<number, number>; // modIdx -> chosen param value
}

const TIER_LABELS = ["Normal", "Exceptional", "Elite"] as const;

function buildBaseGroups(runeword: Item, socketCount: number) {
  const rwData = RUNEWORDS[runeword.runewordId ?? -1];
  const itypes: string[] = rwData?.itypes ?? [];
  const etypes: string[] = rwData?.etypes ?? [];
  const byTier: { code: string; label: string }[][] = [[], [], []];

  for (const [code, base] of Object.entries(ARMORS)) {
    if (
      base &&
      base.spawnable &&
      base.maxSockets >= socketCount &&
      itemMatchesTypes(base.type, itypes, etypes)
    ) {
      byTier[base.tier].push({ code, label: base.name });
    }
  }
  for (const [code, base] of Object.entries(WEAPONS)) {
    if (
      base &&
      base.spawnable &&
      base.maxSockets >= socketCount &&
      itemMatchesTypes(base.type, itypes, etypes)
    ) {
      byTier[base.tier].push({ code, label: base.name });
    }
  }

  return byTier
    .map((items, i) => ({ label: TIER_LABELS[i], items }))
    .filter((g) => g.items.length > 0);
}

function getSkillChoices(item: Item): { choices: Record<number, number>; meta: SkillChoice[] } {
  const choices: Record<number, number> = {};
  const meta: SkillChoice[] = [];
  for (let modIdx = 0; modIdx < (item.modifiers ?? []).length; modIdx++) {
    const mod = item.modifiers![modIdx];
    if (mod.skillRange) {
      const [minId, maxId] = mod.skillRange;
      const options: { value: number; label: string }[] = [];
      for (let i = minId; i <= maxId; i++) {
        if (SKILLS[i]) options.push({ value: i, label: SKILLS[i].name });
      }
      if (options.length) {
        choices[modIdx] = options[0].value;
        meta.push({ modIdx, label: `+${mod.value} to Skill`, options });
      }
    } else if (mod.skillTabRange) {
      const [minId, maxId] = mod.skillTabRange;
      const options = SKILL_TABS.filter(({ id }) => id >= minId && id <= maxId).map(
        ({ id, name }) => ({ value: id, label: name })
      );
      if (options.length) {
        choices[modIdx] = mod.param ?? options[0].value;
        meta.push({ modIdx, label: "Skill Tab", options });
      }
    }
  }
  return { choices, meta };
}

export function Catalog() {
  const [category, setCategory] = useState<Category | null>(null);
  const [search, setSearch] = useState("");
  const [addForm, setAddForm] = useState<AddForm | null>(null);
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const { addItem } = useContext(BufferContext);

  const uniqueItems = useMemo(() => generateUniqueItems(), []);
  const setItems = useMemo(() => generateSetItems(), []);
  const runewords = useMemo(() => generateRunewords(), []);
  const miscItems = useMemo(() => generateMiscItems(), []);
  const equipmentItems = useMemo(() => generateEquipmentItems(), []);

  const allItems = useMemo(() => {
    switch (category) {
      case "uniques":
        return uniqueItems;
      case "sets":
        return setItems;
      case "runewords":
        return runewords;
      case "misc":
        return miscItems;
      case "base":
        return equipmentItems;
      default:
        return [];
    }
  }, [category, uniqueItems, setItems, runewords, miscItems, equipmentItems]);

  const filteredItems = useMemo(
    () => searchItems(allItems, search),
    [allItems, search]
  );

  function openAddForm(item: Item) {
    const baseGroups = item.runeword
      ? buildBaseGroups(item, item.sockets ?? 1)
      : [];
    const { choices } = getSkillChoices(item);
    setAddForm({
      item,
      ethereal: false,
      baseCode: baseGroups[0]?.items[0]?.code ?? "",
      skillChoices: choices,
    });
  }

  function confirmAdd() {
    if (!addForm) return;
    const { item, ethereal, baseCode, skillChoices } = addForm;
    let finalItem = item;
    if (Object.keys(skillChoices).length > 0) {
      const modifiers = (item.modifiers ?? []).map((mod, idx) => {
        const chosen = skillChoices[idx];
        if (chosen == null) return mod;
        // Remove skillRange/skillTabRange so the specific chosen skill is displayed
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { skillRange, skillTabRange, ...rest } = mod;
        return { ...rest, param: chosen };
      });
      finalItem = { ...item, modifiers };
    }
    addItem(finalItem, { ethereal, baseCode: item.runeword ? baseCode : undefined });
    setAddForm(null);
  }

  const baseGroups = useMemo(
    () =>
      addForm?.item.runeword
        ? buildBaseGroups(addForm.item, addForm.item.sockets ?? 1)
        : [],
    [addForm?.item]
  );

  const skillChoiceMeta = useMemo(
    () => (addForm?.item ? getSkillChoices(addForm.item).meta : []),
    [addForm?.item]
  );

  return (
    <>
      {/* Search */}
      <div class="catalog-search">
        <Search value={search} onChange={setSearch}>
          Search:
        </Search>
      </div>

      {/* Category tiles */}
      <div class="catalog-categories">
        {CATEGORIES.map(({ id, label, colorClass }) => (
          <button
            key={id}
            class={`catalog-category-tile ${category === id ? "active" : ""}`}
            onClick={() => {
              setCategory(id);
              setAddForm(null);
            }}
          >
            <span class={`catalog-category-name ${colorClass}`}>{label}</span>
          </button>
        ))}
      </div>

      {/* Add form (appears when an item is clicked) */}
      {addForm && (
        <div class="catalog-add-form">
          <strong>{addForm.item.name}</strong>
          <label>
            <input
              type="checkbox"
              checked={addForm.ethereal}
              onChange={(e) =>
                setAddForm({
                  ...addForm,
                  ethereal: (e.target as HTMLInputElement).checked,
                })
              }
            />{" "}
            Ethereal
          </label>
          {addForm.item.quality === ItemQuality.NORMAL &&
            addForm.item.runeword && (
              <label>
                Base:{" "}
                <select
                  value={addForm.baseCode}
                  onChange={(e) =>
                    setAddForm({
                      ...addForm,
                      baseCode: (e.target as HTMLSelectElement).value,
                    })
                  }
                >
                  {baseGroups.map(({ label, items }) => (
                    <optgroup key={label} label={label}>
                      {items.map(({ code, label: name }) => (
                        <option key={code} value={code}>
                          {name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
            )}
          {skillChoiceMeta.map(({ modIdx, label, options }) => (
            <label key={modIdx}>
              {label}:{" "}
              <select
                value={addForm.skillChoices[modIdx]}
                onChange={(e) =>
                  setAddForm({
                    ...addForm,
                    skillChoices: {
                      ...addForm.skillChoices,
                      [modIdx]: Number((e.target as HTMLSelectElement).value),
                    },
                  })
                }
              >
                {options.map(({ value, label: name }) => (
                  <option key={value} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button class="button" onClick={confirmAdd}>
            Add to transfer
          </button>
          <button class="button sidenote" onClick={() => setAddForm(null)}>
            Cancel
          </button>
        </div>
      )}

      {/* Items table + card panel */}
      {category && (
        <div class="item-card-layout">
          <div class="item-card-layout-main">
            <ItemsTable
              items={filteredItems}
              pageSize={50}
              withLocation={false}
              withCharacteristics={false}
              onAdd={openAddForm}
              onHover={setHoveredItem}
            />
          </div>
          <div class="item-card-layout-panel">
            {hoveredItem && !hoveredItem.simple && (
              <ItemCard item={hoveredItem} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
