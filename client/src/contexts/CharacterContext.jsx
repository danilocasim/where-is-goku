import { createContext } from 'react';

export const CharacterContext = createContext({
  characters: [],
  setCharacters: () => {},
  setStopInterval: () => {},
  setSession: () => {},
  setSecondsPassed: () => {},
  showAddPlayer: false,
  setShowAddPlayer: () => {},
});
