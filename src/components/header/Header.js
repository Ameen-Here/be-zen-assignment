import React from "react";
import AddRecipeNavbar from "./AddRecipeNavbar";
import SearchBar from "./SearchBar";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__logo">Recipeez</h2>
      <SearchBar />
      <AddRecipeNavbar />
    </header>
  );
};

export default Header;
