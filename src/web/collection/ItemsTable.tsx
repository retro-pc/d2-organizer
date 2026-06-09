import { Item as ItemType } from "../../scripts/items/types/Item";
import { useEffect, useMemo, useState } from "preact/hooks";
import { groupItems } from "../items/groupItems";
import { Pagination } from "../controls/Pagination";
import { Item } from "../items/Item";

export interface ItemsTableProps {
  items: ItemType[];
  pageSize: number;
}

export function ItemsTable({ items, pageSize }: ItemsTableProps) {
  const [firstItem, setFirstItem] = useState(0);

  const groupedItems = useMemo(() => groupItems(items), [items]);

  useEffect(() => {
    setFirstItem(0);
  }, [items]);

  return (
    <>
      <Pagination
        nbEntries={groupedItems.length}
        pageSize={pageSize}
        currentEntry={firstItem}
        onChange={setFirstItem}
        text={(first, last) => (
          <>
            Items {first} - {last} out of {groupedItems.length}{" "}
            <span class="sidenote">({items.length} with duplicates)</span>
          </>
        )}
      />
      <table id="collection">
        <thead>
          <tr class="sidenote">
            <th>Item</th>
            <th>Characteristics</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {groupedItems
            .slice(firstItem, firstItem + pageSize)
            .map((items, index) => (
              <Item
                key={items[0].id ?? index}
                item={items[0]}
                duplicates={items}
                withLocation={true}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
