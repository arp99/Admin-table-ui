import { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");

  return (
    <searchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);
