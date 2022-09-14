import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import "./AddRecipeNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { loginOverlayActions, recipeOverlayAction } from "../../store";

const AddRecipeNavbar = () => {
  const dispatch = useDispatch();
  const recipeAction = recipeOverlayAction;
  const loginAction = loginOverlayActions;
  const addRecipeOverlayHandler = async () => {
    dispatch(recipeAction.updateClass("overlay"));
  };

  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const loginOverlayHandler = async () => {
    dispatch(loginAction.updateClass("overlay"));
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        {currentUser !== "" && (
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
        )}
        {currentUser === "" && (
          <li className="nav__item">
            <button
              className="nav__btn nav__btn--add-recipe"
              onClick={loginOverlayHandler}
            >
              <svg className="nav__icon">
                <PersonAddIcon />
              </svg>
              <span>Login/Signup</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default AddRecipeNavbar;
