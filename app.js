const express = require("express"); // We import the package
const app = express(); // We execute the package
const { MongoClient } = require("mongodb");
require("dotenv/config");

const uri = process.env.MONGODB_URI;

// define the first route
app.get("/recipes", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const allRecipes = await client
      .db("test")
      .collection("recipes")
      .find()
      .toArray();
    console.log("Connected to the server!");
    console.log("allRecipes", allRecipes);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

//How do we start listening to the server? Like this...
app.listen(3000);

////////////////////////////////////////////////////////////////
// v1.0

// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// Middlewares - A middlewear is a function that executes when routes are being hit
// app.use(bodyParser.json()); // A middlewear
// app.use(cors());

// Import routes
// const recipesRoute = require("./routes/recipes");

// app.use("/recipes", recipesRoute);

// Routes
// app.get("/", (req, res) => {
//   res.send("we are on home, habibi!");
// }); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

// Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, () =>
//   console.log("connected to DB!!")
// );

//How do we start listening to the server? Like this...
// app.listen(3000);
