import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { TRIAL_DATA } from "./TRIAL_DATA";

const initialState = { resultData: "" };

const dataSlice = createSlice({
  name: "data",
  initialState: { datas: "" },
  reducers: {
    addValue(state, action) {
      state.datas = action.payload;
    },
  },
});

const addRecipeOverlaySlice = createSlice({
  name: "recipeOverlay",
  initialState: { className: "overlay hidden" },
  reducers: {
    updateClass(state, action) {
      state.className = action.payload;
    },
  },
});

const loginOverlaySlice = createSlice({
  name: "loginOverlay",
  initialState: { className: "overlay hidden" },
  reducers: {
    updateClass(state, action) {
      state.className = action.payload;
    },
  },
});

const resultSlice = createSlice({
  name: "result",
  initialState: initialState,
  reducers: {
    updateData(state, action) {
      state.resultData = action.payload;
    },
    search(state, action) {
      if (action.payload.word.trim() === "") {
        state.resultData = action.payload.datas;
      } else {
        const value = action.payload.datas.filter((data) => {
          //   console.log();
          return (
            data.title
              .toLowerCase()
              .startsWith(action.payload.word.toLowerCase()) ||
            data.ingredients.filter((datas) => {
              return datas.ingredient
                .toLowerCase()
                .startsWith(action.payload.word.toLowerCase());
            }).length > 0
          );
        });
        console.log(value);
        if (value.length > 0) {
          state.resultData = value;
        } else {
          state.resultData = "";
        }
      }
    },
  },
});

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { recipeData: "" },
  reducers: {
    load(state) {
      state.recipeData = "loading";
    },
    showItem(state, action) {
      state.recipeData = action.payload.datas.find(
        (data) => data.id === action.payload.id
      );
    },
  },
});

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: { currentUser: "" },
  reducers: {
    updateUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const recipeAction = recipeSlice.actions;

export const resultActions = resultSlice.actions;

export const dataActions = dataSlice.actions;

export const recipeOverlayAction = addRecipeOverlaySlice.actions;

export const loginOverlayActions = loginOverlaySlice.actions;

export const currentUserAction = currentUserSlice.actions;

const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
    recipe: recipeSlice.reducer,
    data: dataSlice.reducer,
    recipeOverlay: addRecipeOverlaySlice.reducer,
    loginOverlay: loginOverlaySlice.reducer,
    currentUser: currentUserSlice.reducer,
  },
  // reducer:recipeSlice.reducer
});

export default store;
