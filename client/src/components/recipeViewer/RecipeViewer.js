import React from "react";
import EmptyRecipe from "./EmptyRecipe";
import RecipeDisplay from "./RecipeDisplay";

import { useSelector } from "react-redux/es/exports";

import "./RecipeView.css";
import Spinner from "./Spinner";

const RecipeViewer = () => {
  const recipeData = useSelector((state) => state.recipe.recipeData);
  return (
    <div className="recipe">
      {recipeData === "" ? (
        <EmptyRecipe />
      ) : recipeData === "loading" ? (
        <Spinner />
      ) : (
        <RecipeDisplay trialData={recipeData} />
      )}
    </div>
  );
};

export default RecipeViewer;
