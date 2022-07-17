const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//How do we start listening to the server? Like this...
app.listen(3000);
