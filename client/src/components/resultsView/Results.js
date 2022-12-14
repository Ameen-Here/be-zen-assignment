import React from "react";

import "./Results.css";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { recipeAction } from "../../store";

const Results = () => {
  const dispatch = useDispatch();
  const recipeDispatch = recipeAction;
  const TRIAL_DATA = useSelector((state) => state.result.resultData);
  const recipeDatas = useSelector((state) => state.data.datas);
  const publisherName = useSelector((state) => state.currentUser.currentUser);
  return (
    <ul className="results">
      {TRIAL_DATA === "" && <li>No items found</li>}
      {TRIAL_DATA !== "" &&
        TRIAL_DATA.map((val) => (
          <li key={val.key} className="preview">
            <a
              className="preview__link preview__link--active"
              href="#"
              onClick={async () => {
                // Adding load spinner animation
                dispatch(recipeDispatch.load());
                setTimeout(() => {
                  // Displaying recipe details
                  dispatch(
                    recipeDispatch.showItem({
                      key: val.key,
                      datas: recipeDatas,
                    })
                  );
                }, 500);
              }}
            >
              <figure className="preview__fig">
                <img src={val.img} alt="Test" />
              </figure>
              <div className="preview__data">
                <h4 className="preview__title">{val.title}</h4>
                <p className="preview__publisher">
                  {val.publisher === publisherName ? "you" : val.publisher}
                </p>
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
