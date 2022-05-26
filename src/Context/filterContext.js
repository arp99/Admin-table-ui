import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getFilteredData } from "../Utils/getFilteredData";
import { getPageData } from "../Utils/getPageData";
import { useSearch } from "./searchContext";
import { useUser } from "./userDataContext";

const filterContext = createContext();

export const FilterDataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    userData: { totalUserData },
  } = useUser();

  const { searchData } = useSearch();
  const filteredData = useMemo(
    () => getFilteredData(totalUserData, "SEARCH", searchData),
    [totalUserData, searchData]
  );
  const pageData = useMemo(
    () => getPageData(filteredData, currentPage),
    [currentPage, filteredData]
  );

  useEffect(() => {
    if (pageData.length === 0 && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [pageData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchData]);

  return (
    <filterContext.Provider
      value={{ currentPage, setCurrentPage, pageData, filteredData }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterData = () => useContext(filterContext);
