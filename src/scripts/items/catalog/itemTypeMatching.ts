import { ITEM_TYPES } from "../../../game-data";

const typeAncestors = new Map<string, Set<string>>();

export function getTypeAncestors(code: string): Set<string> {
  if (!code) return new Set();
  const cached = typeAncestors.get(code);
  if (cached) return cached;
  const result = new Set<string>([code]);
  for (const parent of (ITEM_TYPES ?? {})[code] ?? []) {
    for (const anc of getTypeAncestors(parent)) result.add(anc);
  }
  typeAncestors.set(code, result);
  return result;
}

export function itemMatchesTypes(
  itemType: string,
  itypes: string[],
  etypes: string[]
): boolean {
  const ancestors = getTypeAncestors(itemType);
  if (itypes && itypes.length > 0 && !itypes.some((t) => ancestors.has(t)))
    return false;
  if (etypes && etypes.some((t) => ancestors.has(t))) return false;
  return true;
}
