const express = require("express"); // We import the package
const app = express(); // We execute the package
require("dotenv/config");

const { MongoClient } = require("mongodb");

const uri = process.env.DB_CONNECTION;

// Define the home route
app.get("/", (req, res) => {
  res.send(
    "This is the home page. The following endpoints are available to you: /meals, /desserts, and /drinks"
  );
}); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

// Define the recipes route
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

    return res.json(allRecipes);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// Define the desserts route
// Define the drinks route

// // Port
const PORT = process.env.PORT || 3000;

// Starting a server
app.listen(PORT, () => console.log(`The server is running at ${PORT}`));
