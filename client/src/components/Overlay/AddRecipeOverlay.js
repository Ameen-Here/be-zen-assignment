import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeOverlayAction } from "../../store";
import "./AddRecipe.css";

const AddRecipeOverlay = () => {
  const dispatch = useDispatch();
  const action = recipeOverlayAction;
  const closeOverlayHandler = () => {
    dispatch(action.updateClass("overlay hidden"));
  };
  const className = useSelector((state) => state.recipeOverlay.className);
  return (
    <div className={className}>
      <div className="add-recipe-window ">
        <button className="btn--close-modal" onClick={closeOverlayHandler}>
          &times;
        </button>
        <form className="upload">
          <div className="upload__column">
            <h3 className="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input required name="title" type="text" />
            <label>Image URL</label>
            <input required name="image" type="text" />

            <label>Prep time</label>
            <input required name="cookingTime" type="number" />
            <label>Servings</label>
            <input placeholder="In Minutes" required type="number" />
            <label>Instruction(comma seperated)</label>
            <input required placeholder="method-1,method-2,..." type="text" />
          </div>

          <div className="upload__column">
            <h3 className="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              type="text"
              required
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 2</label>
            <input
              type="text"
              name="ingredient-2"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 3</label>
            <input
              type="text"
              name="ingredient-3"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient-4"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient-5"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 6</label>
            <input
              type="text"
              name="ingredient-6"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
          </div>

          <button className="btn upload__btn">
            <svg>
              <use href="src/img/icons.svg#icon-upload-cloud"></use>
            </svg>
            <span>Upload</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeOverlay;
