const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// GET
router.get("/", (req, res) => {
  res.send("we are on recipes, yay habibi!");
}); // We use 'app' to create routes. 'get' shoots us back a message. We can also use 'post', 'delete', etc.

router.get("/garlicky-noodles", (req, res) => {
  res.send("Garlicky Noodles");
});

// POST
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
