import React from "react";
import "./Pagination.css";

const Pagination = () => {
  return (
    <div class="pagination">
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>Page 1</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
