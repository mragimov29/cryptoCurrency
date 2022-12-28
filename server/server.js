const express = require("express");
const fs = require("fs");
const bp = require("body-parser");

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true, limit: "50mb" }));

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
  console.log(req.body);
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (!err) {
      const x = JSON.parse(data);

      x[`${req.params.id}`] = req.body;
      fs.writeFileSync("./data.json", JSON.stringify(x));

      res.json(x[`${req.params.id}`]);
    } else {
      console.error(err);
    }
  });
});

app.get("/", function (req, res) {
  fs.readFile("./data.json", "utf8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.listen(5000, () => {
  console.log("5000 listen");
});
