const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: String,
  description: String,
  star: Boolean,
  tags: {
    quick: Boolean,
    easy: Boolean,
    temperature: {
      value: String,
      unit: String,
    },
    lesswash: Boolean,
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
  instructions: [String],
  notes: String,
});

module.exports = mongoose.model("Recipes", RecipeSchema);
