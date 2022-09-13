require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { Schema } = mongoose;

// Connecting Mongoose to mongo

mongoose
  .connect("mongodb://localhost:27017/recipeez", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection established with mongoose"))
  .catch((err) => console.log(`Error in connecting with mongoose ${err}`));

mongoose.connection.on("error", (err) => logError(err));

// Mongo DB Schema
const recipeSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  img: String,
  time: Number,
  serving: Number,
  ingredients: [Schema.Types.Mixed],
  id: Number,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

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

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
