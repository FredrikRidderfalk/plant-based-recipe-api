const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: String,
  description: String,
  _id: String,
  star: Boolean,
  tags: {},
  ingredients: {},
  flex: {},
  instructions: [String],
  notes: String,
});

module.exports = mongoose.model("Recipes", RecipeSchema);
