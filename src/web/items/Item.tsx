import { Item } from "../../scripts/items/types/Item";
import { AdditionalInfo } from "./AdditionalInfo";
import "./Item.css";
import { ItemTooltip } from "./ItemTooltip";
import { ItemLocationDesc } from "./ItemLocationDesc";

export interface ItemProps {
  item: Item;
  duplicates?: Item[];
  withLocation: boolean;
  withCharacteristics?: boolean;
  onAdd?: (item: Item) => void;
  onHover?: (item: Item | null) => void;
}

export function Item({ item, duplicates, withLocation, withCharacteristics = true, onAdd, onHover }: ItemProps) {
  return (
    <tr
      class={onAdd ? "item item-selectable" : "item"}
      onClick={onAdd ? () => onAdd(item) : undefined}
      onMouseEnter={onHover ? () => onHover(item) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      <th scope="row" aria-label={item.name}>
        <ItemTooltip item={item} />
      </th>
      {withCharacteristics && (
        <td>
          <AdditionalInfo item={item} quantity={duplicates?.length} />
        </td>
      )}
      {withLocation && (
        <td>
          <ItemLocationDesc item={item} />
        </td>
      )}
    </tr>
  );
}
