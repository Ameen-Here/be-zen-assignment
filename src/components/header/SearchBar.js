import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search">
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button className="btn search__btn">
        <svg className="search__icon">
          <SearchIcon />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
