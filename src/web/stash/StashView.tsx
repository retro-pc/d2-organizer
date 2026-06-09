import { Pagination } from "../controls/Pagination";
import { Page } from "./Page";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { pageName } from "./utils/pageName";
import { CollectionContext } from "../store/CollectionContext";
import { Search, searchItems } from "../controls/Search";
import "../controls/Controls.css";
import {
  filterItemsByQuality,
  QualityFilter,
  QualityFilterValue,
} from "../controls/QualityFilter";
import {
  isPlugyStash,
  isStash,
  ownerName,
} from "../../scripts/save-file/ownership";
import { characterPages } from "./characterPages";
import { Item as ItemType } from "../../scripts/items/types/Item";
import { ItemCard } from "../items/ItemCard";
import "../items/ItemCardLayout.css";
import { BufferContext } from "../store/BufferContext";

const PAGE_SIZE = 10;

export function StashView() {
  const { owners, lastActivePlugyStashPage } = useContext(CollectionContext);
  const { addItem } = useContext(BufferContext);
  const [ownerIndex, setOwnerIndex] = useState(() =>
    Math.max(
      0,
      owners.findIndex((owner) => isPlugyStash(owner) && !owner.personal)
    )
  );
  const [search, setSearch] = useState("");
  const [quality, setQuality] = useState<QualityFilterValue>("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<ItemType | null>(null);

  function handleAdd(item: ItemType) {
    addItem(item, { ethereal: item.ethereal ?? false });
  }

  const owner = owners[ownerIndex];

  const rawPages = useMemo(() => {
    if (!owner) {
      return [];
    }
    if (isStash(owner)) {
      return owner.pages;
    } else {
      return characterPages(owner, !!lastActivePlugyStashPage?.get(owner));
    }
  }, [owner, lastActivePlugyStashPage]);

  const filteredPages = useMemo(() => {
    return (
      rawPages
        .map((page, index) => ({
          ...page,
          name: pageName(page).replace("#", `${index + 1}`),
          items: filterItemsByQuality(
            searchItems(page.items, search, "name" in page ? page.name : ""),
            quality
          ),
        }))
        .filter(({ items }) => items.length > 0) ?? []
    );
  }, [rawPages, search, quality]);

  useEffect(() => {
    setCurrentPage(0);
  }, [owner]);

  const pagination = (
    <Pagination
      nbEntries={filteredPages.length}
      pageSize={PAGE_SIZE}
      currentEntry={currentPage}
      onChange={setCurrentPage}
      text={(first, last) =>
        `Pages ${first} - ${last} out of ${filteredPages.length}`
      }
    />
  );

  return (
    <>
      <div class="controls">
        <div>
          <p>
            <label for="character-select">Select a character:</label>
          </p>
          <p>
            <select
              id="character-select"
              value={ownerIndex}
              onChange={({ currentTarget }) =>
                setOwnerIndex(Number(currentTarget.value))
              }
            >
              {owners.map((owner, i) => (
                <option value={i}>{ownerName(owner)}</option>
              ))}
            </select>
          </p>
        </div>
        <Search value={search} onChange={setSearch}>
          Search for an item or a page:
        </Search>
        <QualityFilter value={quality} onChange={setQuality} />
      </div>
      {pagination}
      <div class="item-card-layout">
        <div class="item-card-layout-main">
          {filteredPages
            .slice(currentPage, currentPage + PAGE_SIZE)
            .map((page, index) => (
              <Page
                key={index}
                page={page}
                index={index + currentPage}
                onAdd={handleAdd}
                onHover={setHoveredItem}
              />
            ))}
        </div>
        <div class="item-card-layout-panel">
          {hoveredItem && !hoveredItem.simple && (
            <ItemCard item={hoveredItem} />
          )}
        </div>
      </div>
      {pagination}
    </>
  );
}
