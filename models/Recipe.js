const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  star: Boolean,
  description: String,
  tags: {
    quick: Boolean,
    easy: Boolean,
    temperature: {
      value: String,
      unit: String,
    },
    onepot: Boolean,
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

exports.Recipe = new mongoose.model("Recipe", RecipeSchema);
