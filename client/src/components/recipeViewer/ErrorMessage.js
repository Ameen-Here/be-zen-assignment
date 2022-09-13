import React from "react";
import WarningIcon from "@mui/icons-material/Warning";

const ErrorMessage = () => {
  return (
    <div className="error">
      <div>
        <svg>
          <WarningIcon />
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
};

export default ErrorMessage;
