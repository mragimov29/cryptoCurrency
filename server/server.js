const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    favorites: []
  });
});

app.listen(5000, () => {
  console.log('5000 listen');
})
