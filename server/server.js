require("dotenv").config();
const express = require("express");
const app = express();

const User = require("./models/user.js");
const Recipe = require("./models/recipe.js");

// Middleware
const { isLoggedIn } = require("./middleware.js");

// Export mongoose
const mongoose = require("mongoose");

// Export sessiom
const session = require("express-session");

const { Schema } = mongoose;

// Export passport and dependencies
const passport = require("passport");
const LocalStrategy = require("passport-local");

const sessionConfig = {
  secret: "thisisasecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

// Passport
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

// Routes

app.get("/v1/getData", async (req, res) => {
  const datas = await Recipe.find({});
  res.send({ datas: [...datas], username: req.user?.username });
});

app.post("/v1/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({
      username,
    });
    const newUser = await User.register(user, password);
    req.login(newUser, (err) => {
      if (err) {
        return next(err);
      }
      res.send({ message: "Logged In", username: username, error: false });
    });
  } catch (e) {
    res.send({ error: true, message: e.message });
  }
});

app.post(
  "/v1/login",
  passport.authenticate("local", {
    failureMessage: true,
  }),
  (req, res) => {
    res.send({ status: "logged in", username: req.user.username });
  }
);

app.get("/v1/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.send("logged out");
  });
});

// CRUD Database

app.post("/v1/addRecipe", isLoggedIn, async (req, res) => {
  const data = req.body.sendData;
  console.log(data);
  const newData = new Recipe(data);

  await newData.save();
  res.send({ status: "Successful" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
