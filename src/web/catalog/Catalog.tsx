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
import { ARMORS, WEAPONS, RUNEWORDS } from "../../game-data";
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

interface AddForm {
  item: Item;
  ethereal: boolean;
  baseCode: string;
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
    setAddForm({
      item,
      ethereal: false,
      baseCode: baseGroups[0]?.items[0]?.code ?? "",
    });
  }

  function confirmAdd() {
    if (!addForm) return;
    const { item, ethereal, baseCode } = addForm;
    addItem(item, { ethereal, baseCode: item.runeword ? baseCode : undefined });
    setAddForm(null);
  }

  const baseGroups = useMemo(
    () =>
      addForm?.item.runeword
        ? buildBaseGroups(addForm.item, addForm.item.sockets ?? 1)
        : [],
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
