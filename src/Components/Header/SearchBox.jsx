import { useState } from "react";
import { useSearch } from "../../Context/searchContext";
import { FiSearch, FiX } from "react-icons/fi";

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
    <div className="w-full h-full bg-lightGray rounded-2xl px-2 flex items-center gap-3 text-lightblue transition-all focus-within:shadow-hover">
      <FiSearch size={30} />
      <input
        type="text"
        placeholder="Search by name, email or role"
        className="w-full h-full bg-inherit outline-none rounded-2xl tracking-wider text-lightText placeholder:text-gray-400"
        value={searchValue}
        onChange={handleSearch}
      />
      {searchValue && (
        <FiX
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSearchValue("");
            setSearchData("");
          }}
        />
      )}
    </div>
  );
};
