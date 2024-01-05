import { createContext, useState } from "react";
import { useContext } from "react";

export const SearchContextValue = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContextValue.Provider
      value={{ searchValue: searchValue, setSearchValue: setSearchValue }}
    >
      {children}
    </SearchContextValue.Provider>
  );
};
