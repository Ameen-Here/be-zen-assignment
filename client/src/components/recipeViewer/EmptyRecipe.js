import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const EmptyRecipe = () => {
  return (
    <div className="message">
      <div>
        <svg>
          <EmojiEmotionsIcon />
        </svg>
      </div>
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
    </div>
  );
};

export default EmptyRecipe;
