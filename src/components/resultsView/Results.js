import React from "react";

import "./Results.css";

import { useSelector } from "react-redux/es/exports";

const Results = () => {
  const TRIAL_DATA = useSelector((state) => state.recipe.recipeData);
  return (
    <ul className="results">
      {TRIAL_DATA.map((val) => (
        <li key={val.id} className="preview">
          <a className="preview__link preview__link--active" href="#23456">
            <figure className="preview__fig">
              <img src={val.img} alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">{val.title}</h4>
              <p className="preview__publisher">{val.publisher}</p>
              <div className="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Results;
