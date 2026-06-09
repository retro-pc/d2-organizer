import { Item } from "../../scripts/items/types/Item";
import { AdditionalInfo } from "./AdditionalInfo";
import "./Item.css";
import { ItemTooltip } from "./ItemTooltip";
import { ItemLocationDesc } from "./ItemLocationDesc";

export interface ItemProps {
  item: Item;
  duplicates?: Item[];
  withLocation: boolean;
}

export function Item({ item, duplicates, withLocation }: ItemProps) {
  return (
    <tr class="item">
      <th scope="row" aria-label={item.name}>
        <ItemTooltip item={item} />
      </th>
      <td>
        <AdditionalInfo item={item} quantity={duplicates?.length} />
      </td>
      {withLocation && (
        <td>
          <ItemLocationDesc item={item} />
        </td>
      )}
    </tr>
  );
}
