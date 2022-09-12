import { Pagination } from "@mui/material";
import React from "react";
import Results from "./Results";
import "./ResultsView.css";

const ResultsView = () => {
  return (
    <div className="search-results">
      <Results />
      <Pagination />
    </div>
  );
};

export default ResultsView;
