import React from "react";

import "./Results.css";

const TRIAL_DATA = [
  {
    title: "Yummy Hyderbadi Biriyani",
    img: "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg",
    publisher: "Chef Pillai",
    id: 1,
  },

  {
    title: "2 min Maggi noodles",
    img: "https://tse2.mm.bing.net/th?id=OIP.TrHlR5V88SQHciAP7pPRVgHaDt&pid=Api&P=0",
    publisher: "Raghav",
    id: 2,
  },
  {
    title: "Healthy Veg Pulao",
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg",
    publisher: "Devika Rai",
    id: 3,
  },
  {
    title: "Royal Falooda",
    img: "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
    publisher: "Annonymous",
    id: 4,
  },
  {
    title: "Paneer Butter Masala",
    img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
    publisher: "Roshan Andrews",
    id: 5,
  },
  {
    title: "Healthy Veg Pulao",
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg",
    publisher: "Devika Rai",
    id: 6,
  },
  {
    title: "Royal Falooda",
    img: "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
    publisher: "Annonymous",
    id: 7,
  },
  {
    title: "Paneer Butter Masala",
    img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
    publisher: "Roshan Andrews",
    id: 8,
  },
  {
    title: "Yummy Hyderbadi Biriyani",
    img: "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg",
    publisher: "Chef Pillai",
    id: 9,
  },
];

const Results = () => {
  return (
    <ul className="results">
      {TRIAL_DATA.map((val) => (
        <li key={val.id} className="preview">
          <a className="preview__link preview__link--active" href="#23456">
            <figure className="preview__fig">
              <img src={val.img} alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">{val.title}</h4>
              <p className="preview__publisher">{val.publisher}</p>
              <div className="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Results;
