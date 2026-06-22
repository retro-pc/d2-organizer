import { Item as ItemType } from "../../scripts/items/types/Item";
import { useEffect, useMemo, useState } from "preact/hooks";
import { groupItems } from "../items/groupItems";
import { Pagination } from "../controls/Pagination";
import { Item } from "../items/Item";

export interface ItemsTableProps {
  items: ItemType[];
  pageSize: number;
  withLocation?: boolean;
  withCharacteristics?: boolean;
  onAdd?: (item: ItemType) => void;
  onHover?: (item: ItemType | null) => void;
}

export function ItemsTable({
  items,
  pageSize,
  withLocation = true,
  withCharacteristics = true,
  onAdd,
  onHover,
}: ItemsTableProps) {
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
        {(withCharacteristics || withLocation) && (
          <thead>
            <tr class="sidenote">
              <th>Item</th>
              {withCharacteristics && <th>Characteristics</th>}
              {withLocation && <th>Location</th>}
            </tr>
          </thead>
        )}
        <tbody>
          {groupedItems
            .slice(firstItem, firstItem + pageSize)
            .map((items, index) => (
              <Item
                key={items[0].id ?? index}
                item={items[0]}
                duplicates={items}
                withLocation={withLocation}
                withCharacteristics={withCharacteristics}
                onAdd={onAdd}
                onHover={onHover}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
