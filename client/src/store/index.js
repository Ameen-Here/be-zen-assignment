import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { TRIAL_DATA } from "./TRIAL_DATA";

const initialState = { resultData: TRIAL_DATA };

const resultSlice = createSlice({
  name: "result",
  initialState: initialState,
  reducers: {
    search(state, action) {
      if (action.payload.trim() === "") {
        state.resultData = TRIAL_DATA;
      } else {
        const value = TRIAL_DATA.filter((data) => {
          //   console.log();
          return (
            data.title.toLowerCase().startsWith(action.payload.toLowerCase()) ||
            data.ingredients.filter((datas) => {
              return datas.ingredient
                .toLowerCase()
                .startsWith(action.payload.toLowerCase());
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
      state.recipeData = TRIAL_DATA.find((data) => data.id === action.payload);
    },
  },
});

export const recipeAction = recipeSlice.actions;

export const resultActions = resultSlice.actions;

const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
    recipe: recipeSlice.reducer,
  },
  // reducer:recipeSlice.reducer
});

export default store;
