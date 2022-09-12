import "./App.css";
import Header from "./components/header/Header";
import RecipeViewer from "./components/recipeViewer/RecipeViewer";
import ResultsView from "./components/resultsView/ResultsView";

function App() {
  return (
    <div className="container">
      <Header />
      <ResultsView />
      <RecipeViewer />
    </div>
  );
}

export default App;
