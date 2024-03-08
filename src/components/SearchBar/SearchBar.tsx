import React from "react";

const SearchBar = () => {
  return (
    <div className="mt-20 flex justify-center items-center w-full">
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
};

export default SearchBar;
