import { useContext } from "preact/hooks";
import { BufferContext } from "../store/BufferContext";
import { ItemTooltip } from "../items/ItemTooltip";
import { AdditionalInfo } from "../items/AdditionalInfo";
import { wrapAllInD2rStash } from "../../scripts/items/writing/writeItemBinary";
import "./Transfer.css";
import "../items/Item.css";

function downloadFile(bytes: Uint8Array, filename: string) {
  const blob = new Blob([bytes], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function Transfer() {
  const { items, removeItem, clearBuffer } = useContext(BufferContext);

  if (items.length === 0) {
    return (
      <p id="transfer-items">
        You have not selected any items yet. Browse the{" "}
        <a href="#catalog">Item catalog</a> or your{" "}
        <a href="#collection">Collection</a> and click an item to add it.
      </p>
    );
  }

  function transferItems() {
    try {
      const stash = wrapAllInD2rStash(items);
      downloadFile(stash, "SharedStashSoftCoreV2.d2i");
    } catch (e) {
      console.error("Failed to generate stash binary", e);
    }
  }

  return (
    <div id="transfer-items">
      <p>
        You have currently selected{" "}
        <span class="magic">{items.length}</span> items (full list below).
      </p>
      <p>Select where you want to transfer them:</p>
      <ul class="owner-selector">
        <li>
          <label>
            <input type="radio" name="target" checked={true} readOnly />{" "}
            Create a new <span class="magic">Offline stash</span> for me
          </label>
        </li>
      </ul>
      <p>
        <button class="button" onClick={transferItems}>
          Transfer my items
        </button>
        <button
          class="button sidenote"
          style="margin-left: 12px"
          onClick={clearBuffer}
        >
          Clear selection
        </button>
      </p>

      <h4>Selected items</h4>
      <table id="collection">
        <thead>
          <tr class="sidenote">
            <th>Item</th>
            <th>Characteristics</th>
            <th>Options</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ item, opts }, index) => (
            <tr class="item" key={index}>
              <th scope="row" aria-label={item.name}>
                <ItemTooltip item={item} baseCode={opts.baseCode} />
              </th>
              <td>
                <AdditionalInfo item={item} />
              </td>
              <td>
                {opts.ethereal && <span class="transfer-tag">Ethereal</span>}
                {opts.baseCode && (
                  <span class="transfer-tag">{opts.baseCode}</span>
                )}
              </td>
              <td class="transfer-actions">
                <button onClick={() => removeItem(index)} title="Remove">
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
