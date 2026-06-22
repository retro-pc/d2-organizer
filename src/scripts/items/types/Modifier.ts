/*
 * Charges have  spell + level + charges + maxCharges
 * Chance to cast have spell + level + chance
 * Others have value + param (optional)
 */
export interface Modifier {
  id: number;
  stat: string;
  priority: number;
  value?: number;
  param?: number;
  spell?: number;
  level?: number;
  charges?: number;
  maxCharges?: number;
  chance?: number;
  // This isn't from the game, it's our way of handling groups of mods (like poison damage)
  // that need special treatment for displaying or searching
  values?: number[];
  description?: string;
  // Not from the game either, this is the possible range for that mod
  range?: [number, number];
  // Not from the game either: for "random skill" mods (e.g. Ormus' Robes),
  // the range of skill ids the game can randomly pick from.
  skillRange?: [number, number];
  // For "random skill tab" mods (e.g. Wraithstep skilltab-war),
  // the range of tab binary IDs the game can randomly pick from.
  skillTabRange?: [number, number];
}
