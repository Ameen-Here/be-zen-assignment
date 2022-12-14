import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction, loginOverlayActions } from "../../store";
import "./AddRecipe.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef } from "react";

import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";

const LoginOverlay = () => {
  const usernameInpRef = useRef();
  const passwordInpRef = useRef();

  const dispatch = useDispatch();
  const action = loginOverlayActions;
  const userAction = currentUserAction;

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const loginHandler = async () => {
    const username = usernameInpRef.current.value;
    const password = passwordInpRef.current.value;
    toast.success("Logging In", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Log in request
    const data = await fetch("/v1/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // Evaluating return value, is logged in confirmed or not
    if (data.status === 401) {
      toast.error("Incorrect username or password", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const datas = await data.json();
      toast.success("Logged in", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(userAction.updateUser(datas.username));
      dispatch(action.updateClass("overlay hidden"));
    }
  };

  const signUpHandler = async () => {
    const username = usernameInpRef.current.value;
    const password = passwordInpRef.current.value;

    // Checking password length
    if (password.length < 6) {
      toast.error("Password length is too short", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("signing up", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Register request
      const data = await fetch("/v1/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const datas = await data.json();
      // Checking if user exist already or not.
      if (datas.error) {
        toast.error(datas.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success(datas.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(userAction.updateUser(datas.username));
        dispatch(action.updateClass("overlay hidden"));
      }
    }
  };

  const closeOverlayHandler = () => {
    dispatch(action.updateClass("overlay hidden"));
  };
  const className = useSelector((state) => state.loginOverlay.className);

  return (
    <>
      <ToastContainer />
      <div className={className}>
        <div className="add-recipe-window ">
          <button className="btn--close-modal" onClick={closeOverlayHandler}>
            &times;
          </button>

          <form className="upload" onSubmit={formSubmit}>
            <div className="upload__column">
              <h3 className="upload__heading">Login Data</h3>
              <label>Username</label>
              <input
                ref={usernameInpRef}
                required
                name="username"
                type="text"
              />
              <label>Password(5+ character)</label>
              <input
                ref={passwordInpRef}
                required
                name="password"
                type="password"
              />
            </div>
            <div className="upload__column">
              <button className="btn upload__btn" onClick={signUpHandler}>
                <svg>
                  <AddIcon />
                </svg>
                <span>Signup</span>
              </button>
              <button className="btn upload__btn" onClick={loginHandler}>
                <svg>
                  <LoginIcon />
                </svg>
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginOverlay;
