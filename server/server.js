const express = require("express");
const fs = require("fs");

const app = express();
favorites = [];

app.get(`/api/:id`, (req, res) => {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (!err) {
      const x = JSON.parse(data);

      if (!x[`${req.params.id}`]) {
        x[`${req.params.id}`] = [];
        fs.writeFileSync("./data.json", JSON.stringify(x));
      }
      res.json(x[`${req.params.id}`]);
    } else {
      console.error(err);
    }
  });
});

app.put(`/api/change/:id`, function (req, res) {
  // res.json({favorites: req.body});
});

app.listen(5000, () => {
  console.log("5000 listen");
});
