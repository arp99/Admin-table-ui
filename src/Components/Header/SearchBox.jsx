import { useState } from "react";
import { useSearch } from "../../Context/searchContext";

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchData } = useSearch();

  const handleSearch = (evt) => {
    let timerId;
    setSearchValue(evt.target.value);
    timerId = setTimeout(() => {
      clearTimeout(timerId);
      setSearchData(evt.target.value);
    }, 1000);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search by name, email or role"
        className="w-64 border-2 border-gray-400 rounded-sm px-1 py-2 placeholder:text-gray-400"
        value={searchValue}
        onChange={handleSearch}
      />
    </>
  );
};
