import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// For storing all the recipe datas
const dataSlice = createSlice({
  name: "data",
  initialState: { datas: "" },
  reducers: {
    // While data updated, or added
    addValue(state, action) {
      state.datas = action.payload;
    },
  },
});

// Overlays
// For adding recipe overlay,
const addRecipeOverlaySlice = createSlice({
  name: "recipeOverlay",
  initialState: { className: "overlay hidden" },
  reducers: {
    updateClass(state, action) {
      state.className = action.payload;
    },
  },
});

// For update recipe overlay
const updateOverlaySlice = createSlice({
  name: "updateOverlay",
  initialState: { className: "overlay hidden" },
  reducers: {
    updateClass(state, action) {
      state.className = action.payload;
    },
  },
});

// For login/register overlay
const loginOverlaySlice = createSlice({
  name: "loginOverlay",
  initialState: { className: "overlay hidden" },
  reducers: {
    updateClass(state, action) {
      state.className = action.payload;
    },
  },
});

// Result and recipe display

// For recipe results
const resultSlice = createSlice({
  name: "result",
  initialState: { resultData: "" },
  reducers: {
    updateData(state, action) {
      state.resultData = action.payload;
    },
    search(state, action) {
      // For search feature
      if (action.payload.word.trim() === "") {
        state.resultData = action.payload.datas;
      } else {
        const value = action.payload.datas.filter((data) => {
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
        if (value.length > 0) {
          state.resultData = value;
        } else {
          state.resultData = "";
        }
      }
    },
  },
});

// For recipe to display
const recipeSlice = createSlice({
  name: "recipe",
  initialState: { recipeData: "" },
  reducers: {
    reset(state) {
      state.recipeData = "";
    },
    load(state) {
      state.recipeData = "loading";
    },
    showItem(state, action) {
      state.recipeData = action.payload.datas.find(
        (data) => data.key === action.payload.key
      );
    },
  },
});

// For preseving current user
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

export const updateOverlayAction = updateOverlaySlice.actions;

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
    updateOverlay: updateOverlaySlice.reducer,
  },
  // reducer:recipeSlice.reducer
});

export default store;
