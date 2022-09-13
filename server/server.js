require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Connecting Mongoose to mongo

mongoose
  .connect("mongodb://localhost:27017/recipeez", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection established with mongoose"))
  .catch((err) => console.log(`Error in connecting with mongoose ${err}`));

mongoose.connection.on("error", (err) => logError(err));

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
