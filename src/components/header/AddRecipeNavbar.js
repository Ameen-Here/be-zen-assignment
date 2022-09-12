import React from "react";
import AddIcon from "@mui/icons-material/Add";

import "./AddRecipeNavbar.css";

const AddRecipeNavbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button className="nav__btn nav__btn--add-recipe">
            <svg className="nav__icon">
              <AddIcon />
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AddRecipeNavbar;
