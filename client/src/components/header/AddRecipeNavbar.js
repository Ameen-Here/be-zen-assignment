import React from "react";
import AddIcon from "@mui/icons-material/Add";

import "./AddRecipeNavbar.css";
import { useDispatch } from "react-redux";
import { recipeOverlayAction } from "../../store";

const AddRecipeNavbar = () => {
  const dispatch = useDispatch();
  const action = recipeOverlayAction;
  const addRecipeOverlayHandler = async () => {
    const data = await fetch("/v1/fakeLogin");
    const datas = await data.json();
    console.log(datas);
    dispatch(recipeOverlayAction.updateClass("overlay"));
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button
            className="nav__btn nav__btn--add-recipe"
            onClick={addRecipeOverlayHandler}
          >
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
