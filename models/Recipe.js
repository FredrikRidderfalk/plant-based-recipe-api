const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: String,
  description: String,
  id: Number,
  tags: {
    quick: Boolean,
    easy: Boolean,
    temperature: {
      value: String,
      unit: String,
    },
    dishes: Boolean,
    cheap: Boolean,
  },
  ingredients: [
    {
      name: String,
      amount: Number,
      unit: String,
    },
  ],
  flex: [
    {
      ingredient: String,
      substitutes: String,
    },
  ],
  instructions: [],
  notes: String,
});

module.exports = mongoose.model("Recipes", RecipeSchema);
