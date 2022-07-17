const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// GET
router.get("/", (req, res) => {
  res.send("we are on recipes, yay habibi!");
}); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

// router.get("/garlicky-noodles", (req, res) => {
//   res.send("Garlicky Noodles");
// });

// POST
router.post("/", (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
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
