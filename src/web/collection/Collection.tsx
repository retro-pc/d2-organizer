import "./Collection.css";
import { useContext, useMemo, useState } from "preact/hooks";
import { CollectionContext } from "../store/CollectionContext";
import "../controls/Controls.css";
import { Search, searchItems } from "../controls/Search";
import {
  filterItemsByQuality,
  QualityFilter,
  QualityFilterValue,
} from "../controls/QualityFilter";
import { ItemsTable } from "./ItemsTable";
import { Item as ItemType } from "../../scripts/items/types/Item";
import { ItemCard } from "../items/ItemCard";
import "../items/ItemCardLayout.css";
import { BufferContext } from "../store/BufferContext";

export function Collection() {
  const { allItems } = useContext(CollectionContext);
  const { addItem } = useContext(BufferContext);
  const [search, setSearch] = useState("");
  const [quality, setQuality] = useState<QualityFilterValue>("all");
  const [pageSize, setPageSize] = useState(20);
  const [hoveredItem, setHoveredItem] = useState<ItemType | null>(null);

  const filteredItems = useMemo(
    () => filterItemsByQuality(searchItems(allItems, search), quality),
    [allItems, search, quality]
  );

  function handleAdd(item: ItemType) {
    addItem(item, { ethereal: item.ethereal ?? false });
  }

  return (
    <>
      <div class="controls">
        <Search value={search} onChange={setSearch}>
          Search for an item:
        </Search>
        <QualityFilter value={quality} onChange={setQuality} />
        <div>
          <p>
            <label for="page-size-select">Items per page:</label>
          </p>
          <p>
            <select
              id="page-size-select"
              value={pageSize}
              onChange={({ currentTarget }) =>
                setPageSize(Number(currentTarget.value))
              }
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </p>
        </div>
      </div>


      <div class="item-card-layout">
        <div class="item-card-layout-main">
          <ItemsTable
            items={filteredItems}
            pageSize={pageSize}
            onAdd={handleAdd}
            onHover={setHoveredItem}
          />
        </div>
        <div class="item-card-layout-panel">
          {hoveredItem && !hoveredItem.simple && (
            <ItemCard item={hoveredItem} />
          )}
        </div>
      </div>
    </>
  );
}
