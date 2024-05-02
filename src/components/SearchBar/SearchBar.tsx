import React, { useState } from "react";
import { ISearchBar } from "./ISearchBar";

const SearchBar = (props: ISearchBar) => {
  const { className, onSearch } = props;
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  }
  if (className) {
    return (
      <div
        className={`mt-20 flex justify-center items-center w-full rounded-lg ${className}`}
      >
        <div className="flex items-center bg-white w-full h-12 rounded-lg px-4 justify-between">
          <input
            type="text"
            placeholder="Search ..."
            className="font-semibold outline-none w-full"
            value={query}
            onChange={handleChange}
          />
          <img
            src={require("../../assets/images/searchIcon.png")}
            alt="searchIcon"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`mt-20 flex justify-center items-center w-full rounded-lg`}
      >
        <div className="flex items-center bg-white w-2/3 h-12 rounded-lg px-4 justify-between">
          <input
            type="text"
            placeholder="Search ..."
            className="pl-4 font-semibold outline-none w-full"
            value={query}
            onChange={handleChange}
          />
          <img
            src={require("../../assets/images/searchIcon.png")}
            alt="searchIcon"
          />
        </div>
      </div>
    );
  }
};

export default SearchBar;
