import { createContext } from 'react';

export const CharacterContext = createContext({
  characters: [],
  setCharacters: () => {},
});
