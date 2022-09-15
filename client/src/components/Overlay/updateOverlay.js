import React from "react";

import UploadIcon from "@mui/icons-material/Upload";

import { useDispatch, useSelector } from "react-redux";

import { useRef } from "react";
import { updateOverlayAction } from "../../store";

const UpdateRecipeOverlay = () => {
  // For adding current values
  const recipeData = useSelector((state) => state.recipe.recipeData);

  const dispatch = useDispatch();
  const action = updateOverlayAction;
  const closeOverlayHandler = () => {
    dispatch(action.updateClass("overlay hidden"));
  };
  const className = useSelector((state) => state.updateOverlay.className);

  // Handling Form Data

  // Initializing ref to get form values and to reset them after submission
  const titleInpRef = useRef();
  const imgInpRef = useRef();
  const servingInpRef = useRef();
  const timeInpRef = useRef();
  const instructionInpRef = useRef();
  const ing1InpRef = useRef();
  const ing2InpRef = useRef();
  const ing3InpRef = useRef();
  const ing4InpRef = useRef();
  const ing5InpRef = useRef();
  const ing6InpRef = useRef();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const title = titleInpRef.current.value;
    const img = imgInpRef.current.value;
    const time = timeInpRef.current.value;
    const serving = servingInpRef.current.value;
    // Extracting comma based string to array with no extra white space
    const instructions = instructionInpRef.current.value
      .split(",")
      .map((instruction) => instruction.trim());

    // Extracting instruction
    const extractIngValue = (ingVal) => {
      return ingVal.current.value ? ingVal.current.value.split(",") : "";
    };

    const ing1 = ing1InpRef.current.value.split(",");
    const ing2 = extractIngValue(ing2InpRef);
    const ing3 = extractIngValue(ing3InpRef);
    const ing4 = extractIngValue(ing4InpRef);
    const ing5 = extractIngValue(ing5InpRef);
    const ing6 = extractIngValue(ing6InpRef);
    // Removing instruction that are blank and making it into an array of 1ty, unit, instruction object
    const ingredients = [ing1, ing2, ing3, ing4, ing5, ing6]
      .filter((data) => data.length === 3)
      .map((data) => {
        const value = { qty: data[0], unit: data[1], ingredient: data[2] };
        return value;
      });

    const update = {
      title,
      img,
      time,
      serving,
      ingredients,
      instructions,
    };

    const filter = {
      key: recipeData.key,
    };

    const fetchDataJson = await fetch("/v1/updateRecipe", {
      method: "POST",
      body: JSON.stringify({
        filter,
        update,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const fetchData = await fetchDataJson.json();
    console.log(fetchData);
    // Feedback Later
    // Close Modal & clear all form inp
  };
  if (!recipeData || recipeData === "loading") {
    return <></>;
  } else
    return (
      <div className={className}>
        <div className="add-recipe-window ">
          <button className="btn--close-modal" onClick={closeOverlayHandler}>
            &times;
          </button>
          <form className="upload" onSubmit={onFormSubmit}>
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input
                ref={titleInpRef}
                name="title"
                type="text"
                defaultValue={recipeData.title}
              />
              <label>Image URL</label>
              <input
                ref={imgInpRef}
                name="image"
                type="text"
                value={recipeData.title}
              />

              <label>Prep time</label>
              <input
                ref={timeInpRef}
                placeholder="In Minutes"
                type="number"
                value={recipeData.time}
              />
              <label>Servings</label>
              <input
                ref={servingInpRef}
                type="number"
                value={recipeData.serving}
              />
              <label>Instruction(comma seperated)</label>
              <input
                ref={instructionInpRef}
                placeholder="Format: method-1,method-2,..."
                type="text"
                value={recipeData.instructions}
              />
            </div>

            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                ref={ing1InpRef}
                type="text"
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[0] !== "undefined" &&
                  `${recipeData.ingredients[0].qty},${recipeData.ingredients[0].unit},${recipeData.ingredients[0].ingredient}`
                }
              />
              <label>Ingredient 2</label>
              <input
                ref={ing2InpRef}
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[1] !== "undefined"
                    ? `${recipeData.ingredients[1].qty},${recipeData.ingredients[1].unit},${recipeData.ingredients[1].ingredient}`
                    : ""
                }
              />
              <label>Ingredient 3</label>
              <input
                ref={ing3InpRef}
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[2] !== "undefined"
                    ? `${recipeData.ingredients[2].qty},${recipeData.ingredients[2].unit},${recipeData.ingredients[2].ingredient}`
                    : ""
                }
              />
              <label>Ingredient 4</label>
              <input
                ref={ing4InpRef}
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[3] !== "undefined"
                    ? `${recipeData.ingredients[3].qty},${recipeData.ingredients[3].unit},${recipeData.ingredients[3].ingredient}`
                    : ""
                }
              />
              <label>Ingredient 5</label>
              <input
                ref={ing5InpRef}
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[4] !== "undefined"
                    ? `${recipeData.ingredients[4].qty},${recipeData.ingredients[4].unit},${recipeData.ingredients[4].ingredient}""`
                    : ""
                }
              />
              <label>Ingredient 6</label>
              <input
                ref={ing6InpRef}
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
                value={
                  typeof recipeData.ingredients[5] !== "undefined"
                    ? `${recipeData.ingredients[5].qty},${recipeData.ingredients[5].unit},${recipeData.ingredients[5].ingredient}`
                    : ""
                }
              />
            </div>

            <button className="btn upload__btn">
              <svg>
                <UploadIcon />
              </svg>
              <span>Upload</span>
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateRecipeOverlay;
