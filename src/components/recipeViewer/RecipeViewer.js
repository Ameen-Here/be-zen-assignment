import React from "react";
import EmptyRecipe from "./EmptyRecipe";
import ErrorMessage from "./ErrorMessage";
import RecipeDisplay from "./RecipeDisplay";

import "./RecipeView.css";
import Spinner from "./Spinner";

const RecipeViewer = () => {
  return (
    <div className="recipe">
      {/* <EmptyRecipe /> */}
      <RecipeDisplay />
      {/* <Spinner /> */}
      {/* <ErrorMessage /> */}
    </div>
  );
};

export default RecipeViewer;
