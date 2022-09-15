import React from "react";

import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

import { useRef } from "react";
import {
  dataActions,
  recipeAction,
  resultActions,
  updateOverlayAction,
} from "../../store";

const UpdateRecipeOverlay = () => {
  // Actions from redux store
  const dispatch = useDispatch();
  const action = updateOverlayAction;
  const dataAction = dataActions;
  const resultAction = resultActions;
  const recipeActions = recipeAction;
  const closeOverlayHandler = () => {
    dispatch(action.updateClass("overlay hidden"));
  };

  // For adding current values
  const recipeData = useSelector((state) => state.recipe.recipeData);
  const className = useSelector((state) => state.updateOverlay.className);
  const recipesCollection = useSelector((state) => state.result.resultData);

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

  // To prevent form from submitting
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const clearInputs = () => {
    // Clearing Input data
    titleInpRef.current.value =
      imgInpRef.current.value =
      servingInpRef.current.value =
      timeInpRef.current.value =
      instructionInpRef.current.value =
      ing1InpRef.current.value =
      ing2InpRef.current.value =
      ing3InpRef.current.value =
      ing4InpRef.current.value =
      ing5InpRef.current.value =
      ing6InpRef.current.value =
        "";
  };

  const deleteDataHandler = async () => {
    toast.success("Deleting", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const filter = {
      key: recipeData.key,
    };

    // Delete request with recipe data key
    const fetchDataJson = await fetch("/v1/deleteRecipe", {
      method: "POST",
      body: JSON.stringify({
        filter,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const fetchData = await fetchDataJson.json();
    if (fetchData.status === "Successful") {
      const data = await fetch("/v1/getData");
      const datas = await data.json();
      // Feedback, Close Modal & updating datas
      toast.success("Successfully Deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(dataAction.addValue(datas.datas));
      dispatch(resultAction.updateData(datas.datas));
      dispatch(recipeActions.reset());
      dispatch(action.updateClass("overlay hidden"));
    }
    // Clearing inputs
    clearInputs();
  };

  const updateDataHandler = async () => {
    toast.success("Updating", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

    // Update Request
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
    // Evaluating result
    if (fetchData.status === "Successful") {
      const data = await fetch("/v1/getData");
      const datas = await data.json();
      // Feedback, Close Modal & updating datas
      toast.success("Successfully Updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(
        recipeActions.showItem({
          datas: recipesCollection,
          key: recipeData.key,
        })
      );
      dispatch(dataAction.addValue(datas.datas));
      dispatch(resultAction.updateData(datas.datas));
      dispatch(action.updateClass("overlay hidden"));
    }
    // clear all form inp
    clearInputs();
  };
  if (!recipeData || recipeData === "loading") {
    return <></>;
  } else
    return (
      <div className={className}>
        <ToastContainer />
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
                defaultValue={recipeData.img}
              />

              <label>Prep time</label>
              <input
                ref={timeInpRef}
                placeholder="In Minutes"
                type="number"
                defaultValue={recipeData.time}
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
                defaultValue={recipeData.instructions}
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
                defaultValue={
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
                defaultValue={
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
                defaultValue={
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
                defaultValue={
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
                defaultValue={
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
                defaultValue={
                  typeof recipeData.ingredients[5] !== "undefined"
                    ? `${recipeData.ingredients[5].qty},${recipeData.ingredients[5].unit},${recipeData.ingredients[5].ingredient}`
                    : ""
                }
              />
            </div>

            <button className="btn upload__btn" onClick={updateDataHandler}>
              <svg>
                <UpdateIcon />
              </svg>
              <span> Update</span>
            </button>
            <button className="btn upload__btn" onClick={deleteDataHandler}>
              <svg>
                <DeleteIcon />
              </svg>
              <span> Delete</span>
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateRecipeOverlay;
