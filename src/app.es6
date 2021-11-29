import express from "express";
import fs from "fs";

const app = express();

app.get("/recipes", (req, res) => {
  // Read and open the recipes json file
  fs.readFile(`${__dirname}/../data/recipes.json`, "utf8", (err, data) => {
    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    let recipes = JSON.parse(data);
    res.status(200).send({ recipes });
  });
});

app.get("/featured", (req, res) => {
  // Read and open the featured recipe json file
  fs.readFile(`${__dirname}/../data/featured.json`, "utf8", (err, data) => {
    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    let recipe = JSON.parse(data);
    res.status(200).send({ recipe });
  });
});

app.listen(3000, () => {
  console.log("App listening on port: 3000");
});
