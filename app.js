const express = require("express"); // We import the package
const app = express(); // We execute the package
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

////////////////////////////////////////////////////////////////
// v2.0
const { MongoClient } = require("mongodb");

const uri = process.env.DB_CONNECTION;

// define the first route
app.get("/", async (req, res) => {
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

    return res.json(allRecipes);
  } catch {
    console.log("incatch1");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// // Port
const PORT = process.env.PORT || 3000;

//How do we start listening to the server? Like this...
app.listen(PORT, () => console.log(`The server is running at ${PORT}`));

////////////////////////////////////////////////////////////////
// v1.0

// Middlewares - A middlewear is a function that executes when routes are being hit
// app.use(bodyParser.json()); // A middlewear
// app.use(cors());

// // Import routes
// const recipesRoute = require("./routes/recipes");

// app.use("/recipe-api", recipesRoute);

// // Routes
// app.get("/", (req, res) => {
//   res.send(
//     "This is the home page. Add an endpoint like 'recipes' to start your foodie journey."
//   );
// }); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

// // Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, () =>
//   console.log("Database connection successful.")
// );

// // // Port
// const PORT = process.env.PORT || 3000;

// // // Starting a server
// app.listen(PORT, () => console.log(`The server is running at ${PORT}`));

////////////////////////////////////////////////////////////////
// v1.1

// Middlewares - A middlewear is a function that executes when routes are being hit
// app.use(bodyParser.json()); // A middlewear
// app.use(cors());

// // Routes
// const recipesRoute = require("./routes/recipes");

// app.use("/recipe-api", recipesRoute);

// // Connect to DB
// mongoose
//   .connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connection successful.");
//   });

// // Port
// const PORT = process.env.PORT || 3000;

// // Starting a server
// app.listen(PORT, () => console.log(`The server is running at ${PORT}`));
