const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongo DB Schema
const recipeSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  img: String,
  time: Number,
  serving: Number,
  ingredients: [Schema.Types.Mixed],
  id: Number,
});

module.exports = mongoose.model("Recipe", recipeSchema);

// ***************************************************** //
// Adding biriyani to the mongoose database.

// const biriyani = new Recipe({
//   title: "Yummy Hyderbadi Biriyani",
//   img: "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg",
//   publisher: "Chef Pillai",
//   time: 45, // In Min
//   serving: 4,
//   ingredients: [
//     { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//     { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//   ],
//   id: 1,
// });

// biriyani.save();

// Recipe.insertMany([
//   {
//     title: "Yummy Hyderbadi Biriyanii",
//     img: "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg",
//     publisher: "Chef Pillai",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 1,
//   },
//   {
//     title: "2 min Maggi noodles",
//     img: "https://tse2.mm.bing.net/th?id=OIP.TrHlR5V88SQHciAP7pPRVgHaDt&pid=Api&P=0",
//     publisher: "Raghav",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 2,
//   },
//   {
//     title: "Healthy Veg Pulao",
//     img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg",
//     publisher: "Devika Rai",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 3,
//   },
//   {
//     title: "Royal Falooda",
//     img: "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
//     publisher: "Annonymous",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Icecream" },
//     ],
//     id: 4,
//   },
//   {
//     title: "Paneer Butter Masala",
//     img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
//     publisher: "Roshan Andrews",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 5,
//   },
//   {
//     title: "Healthy Veg Pulao",
//     img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg",
//     publisher: "Devika Rai",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 6,
//   },
//   {
//     title: "Royal Falooda",
//     img: "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
//     publisher: "Annonymous",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Icecream" },
//     ],
//     id: 7,
//   },
//   {
//     title: "Paneer Butter Masala",
//     img: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
//     publisher: "Roshan Andrews",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 8,
//   },
//   {
//     title: "Yummy Hyderbadi Biriyani",
//     img: "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg",
//     publisher: "Chef Pillai",
//     time: 45, // In Min
//     serving: 4,
//     ingredients: [
//       { qty: 1000, unit: "g", ingredient: "Biriyani Rice" },
//       { qty: 0.5, unit: "cup", ingredient: "Biriyani Masala" },
//     ],
//     id: 9,
//   },
// ]);
