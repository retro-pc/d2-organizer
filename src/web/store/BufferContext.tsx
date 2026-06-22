import { createContext, RenderableProps } from "preact";
import { useCallback, useState } from "preact/hooks";
import { Item } from "../../scripts/items/types/Item";
import { CreateItemOpts } from "../../scripts/items/writing/writeItemBinary";

export interface BufferedItem {
  item: Item;
  opts: CreateItemOpts;
}

export interface BufferContextValue {
  items: BufferedItem[];
  addItem: (item: Item, opts: CreateItemOpts) => void;
  removeItem: (index: number) => void;
  clearBuffer: () => void;
}

export const BufferContext = createContext<BufferContextValue>({
  items: [],
  addItem: () => undefined,
  removeItem: () => undefined,
  clearBuffer: () => undefined,
});

export function BufferProvider({ children }: RenderableProps<unknown>) {
  const [items, setItems] = useState<BufferedItem[]>([]);

  const addItem = useCallback((item: Item, opts: CreateItemOpts) => {
    setItems((prev) => [...prev, { item, opts }]);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearBuffer = useCallback(() => setItems([]), []);

  return (
    <BufferContext.Provider value={{ items, addItem, removeItem, clearBuffer }}>
      {children}
    </BufferContext.Provider>
  );
}
