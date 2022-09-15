import { useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import AddRecipeOverlay from "./components/Overlay/AddRecipeOverlay";
import RecipeViewer from "./components/recipeViewer/RecipeViewer";
import ResultsView from "./components/resultsView/ResultsView";

import { useDispatch } from "react-redux";

import { currentUserAction, dataActions, resultActions } from "./store/index";
import LoginOverlay from "./components/Overlay/LoginSignup";
import UpdateRecipeOverlay from "./components/Overlay/updateOverlay";

function App() {
  const dispatch = useDispatch();
  // Actions from redux store
  const actions = dataActions;
  const resultAction = resultActions;
  const userAction = currentUserAction;

  // For getting data when site is loaded
  useEffect(() => {
    const callData = async () => {
      const data = await fetch("/v1/getData");
      const datas = await data.json();
      dispatch(userAction.updateUser(datas.username ? datas.username : ""));
      dispatch(actions.addValue(datas.datas));
      dispatch(resultAction.updateData(datas.datas));
    };
    callData();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <ResultsView />
        <RecipeViewer />
      </div>
      <AddRecipeOverlay />
      <LoginOverlay />
      <UpdateRecipeOverlay />
    </>
  );
}

export default App;
