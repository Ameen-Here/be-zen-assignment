import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { resultActions } from "../../store";

const SearchBar = () => {
  const inpRef = useRef();

  const dispatch = useDispatch();
  const searchActions = resultActions;
  const searchData = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/hello");
    const datas = await data.json();
    console.log(datas);
    dispatch(searchActions.search(inpRef.current.value));
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
