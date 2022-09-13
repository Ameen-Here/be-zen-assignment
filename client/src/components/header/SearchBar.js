import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { resultActions } from "../../store";

const SearchBar = () => {
  const recipeData = useSelector((state) => state.data.datas);
  const inpRef = useRef();

  const dispatch = useDispatch();
  const searchActions = resultActions;
  const searchData = async (e) => {
    e.preventDefault();

    dispatch(
      searchActions.search({ word: inpRef.current.value, datas: recipeData })
    );
  };
  return (
    <form className="search" onSubmit={searchData}>
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
        ref={inpRef}
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
