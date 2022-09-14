import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginOverlayActions } from "../../store";
import "./AddRecipe.css";

import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";

const LoginOverlay = () => {
  const dispatch = useDispatch();
  const action = loginOverlayActions;
  const closeOverlayHandler = () => {
    dispatch(action.updateClass("overlay hidden"));
  };
  const className = useSelector((state) => state.loginOverlay.className);
  return (
    <div className={className}>
      <div className="add-recipe-window ">
        <button className="btn--close-modal" onClick={closeOverlayHandler}>
          &times;
        </button>
        <form className="upload">
          <div className="upload__column">
            <h3 className="upload__heading">Login Data</h3>
            <label>Username</label>
            <input required name="username" type="text" />
            <label>Password</label>
            <input required name="password" type="password" />
          </div>
          <div className="upload__column">
            <button className="btn upload__btn">
              <svg>
                <AddIcon />
              </svg>
              <span>Signup</span>
            </button>
            <button className="btn upload__btn">
              <svg>
                <LoginIcon />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginOverlay;
