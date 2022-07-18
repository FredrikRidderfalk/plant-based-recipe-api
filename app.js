const express = require("express"); // We import the package
const app = express(); // We execute the package
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

// Middlewares - A middlewear is a function that executes when routes are being hit
app.use(bodyParser.json()); // A middlewear
app.use(cors());

// Import routes
const recipesRoute = require("./routes/recipes");

app.use("/recipes", recipesRoute);

// Routes
app.get("/", (req, res) => {
  res.send("we are on home, habibi!");
}); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB!!")
);

//How do we start listening to the server? Like this...
app.listen(3000);
