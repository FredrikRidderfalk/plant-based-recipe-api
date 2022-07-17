const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// GET
router.get("/", (req, res) => {
  res.send("we are on recipes, yay habibi!");
});

// router.get("/garlicky-noodles", (req, res) => {
//   res.send("Garlicky Noodles");
// });

// POST
router.post("/", (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    notes: req.body.notes,
  });

  recipe
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
