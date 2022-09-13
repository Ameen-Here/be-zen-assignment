import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { TRIAL_DATA } from "./TRIAL_DATA";

const initialState = { recipeData: TRIAL_DATA };

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {},
});

export const recipeActions = recipeSlice.actions;

const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
  },
  // reducer:recipeSlice.reducer
});

export default store;
