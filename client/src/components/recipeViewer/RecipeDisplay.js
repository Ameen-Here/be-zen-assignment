import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import CheckIcon from "@mui/icons-material/Check";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

import { useDispatch, useSelector } from "react-redux";
import { updateOverlayAction } from "../../store";

const RecipeDisplay = (props) => {
  const publisherName = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();
  const action = updateOverlayAction; // For opening update overlay
  return (
    <div>
      <figure className="recipe__fig">
        <img src={props.trialData.img} alt="Tomato" className="recipe__img" />
        <h1 className="recipe__title">
          <span>{props.trialData.title}</span>
        </h1>
      </figure>
      <div className="recipe__details">
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <AccessTimeIcon />
          </svg>
          <span className="recipe__info-data recipe__info-data--minutes">
            {props.trialData.time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <PeopleIcon />
          </svg>
          <span className="recipe__info-data recipe__info-data--people">
            {props.trialData.serving}
          </span>
          <span className="recipe__info-text">servings</span>
        </div>
      </div>
      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {props.trialData.ingredients.map((data) => (
            <li className="recipe__ingredient">
              <svg className="recipe__icon">
                <CheckIcon />
              </svg>
              <div className="recipe__quantity">{data.qty}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{data.unit} </span>
                {data.ingredient}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <ol>
          {props.trialData.instructions.map((data) => (
            <li className="recipe__directions-text">{data}</li>
          ))}
        </ol>
        {props.trialData.publisher === publisherName && (
          <>
            <br />
            <button
              onClick={() => dispatch(action.updateClass("overlay"))}
              className="btn upload__btn"
            >
              <svg className="recipe__icon">
                <ArrowRightAlt />
              </svg>
              <span>Update</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDisplay;
