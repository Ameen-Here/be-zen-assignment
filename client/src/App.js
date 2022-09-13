import { useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import AddRecipeOverlay from "./components/Overlay/AddRecipeOverlay";
import RecipeViewer from "./components/recipeViewer/RecipeViewer";
import ResultsView from "./components/resultsView/ResultsView";

import { useDispatch } from "react-redux";

import { dataActions, resultActions } from "./store/index";

function App() {
  const dispatch = useDispatch();
  const actions = dataActions;
  const resultAction = resultActions;
  useEffect(async () => {
    const data = await fetch("/v1/getData");
    const datas = await data.json();
    console.log(datas);
    dispatch(actions.addValue(datas));
    dispatch(resultAction.updateData(datas));
    console.log("done");
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <ResultsView />
        <RecipeViewer />
      </div>
      <AddRecipeOverlay />
    </>
  );
}

export default App;
