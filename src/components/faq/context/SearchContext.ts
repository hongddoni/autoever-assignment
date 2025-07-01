import { createContext } from "react";

export type SearchContextType = {
    searchValue: string;
    setSearchValue: (value: string) => void;
  };

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined!
);
