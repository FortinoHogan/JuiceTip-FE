import React from "react";
import { ISearchBar } from "./ISearchBar";

const SearchBar = (props: ISearchBar) => {
  const { className } = props;
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
