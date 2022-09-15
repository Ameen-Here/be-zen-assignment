const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongo DB Schema
const recipeSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  img: String,
  time: Number,
  serving: Number,
  publisher: String,
  ingredients: [Schema.Types.Mixed],
  key: String,
  instructions: [String],
});

module.exports = mongoose.model("Recipe", recipeSchema);
