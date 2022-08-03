const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// GETS BACK ALL THE RECIPES
router.get("/", async (req, res) => {
  try {
    const allRecipes = await Recipe.find(); // .find() will find all the recipes. Mongoose has a lot of built-in methods to apply here, like .limit(5) will limit the posts returned to the first 5 posts.
    res.json(allRecipes);
  } catch (err) {
    res.json({ message: err });
  }
});

//  GETS BACK A SPECIFIC POST
router.get("/:recipeId", async (req, res) => {
  try {
    const specificRecipe = await Recipe.findById(req.params.recipeId);
    res.json(specificRecipe);
  } catch (err) {
    res.json({ message: err });
  }
});

// POSTS A NEW RECIPE
// router.post("/", async (req, res) => {
//   const recipe = new Recipe({
//     name: req.body.name,
//     description: req.body.description,
//     tags: req.body.tags,
//     ingredients: req.body.ingredients,
//     flex: req.body.flex,
//     instructions: req.body.instructions,
//     notes: req.body.notes,
//   });

//   try {
//     const savedRecipe = await recipe.save();
//     res.json(savedRecipe);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// DELETES A SPECIFIC RECIPE
// router.delete("/:recipeId", async (req, res) => {
//   try {
//     const deletedRecipe = await Recipe.deleteOne({ _id: req.params.recipeId });
//     res.json(deletedRecipe);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// UPDATES A SPECIFIC RECIPE
// router.patch("/:recipeId", async (req, res) => {
//   try {
//     const updatedRecipe = await Recipe.updateOne(
//       { _id: req.params.recipeId },
//       { $set: { notes: req.body.notes } }
//     );
//     res.json(updatedRecipe);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
