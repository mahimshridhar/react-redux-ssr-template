import express from "express";
import fs from "fs";
import path from "path";
import renderViewMiddleware from "../src/middleware/renderView";

export default function server(parameters) {
  // console.log("oarams", parameters);
  const app = express();

  app.use(express.static(__dirname + "build/assets"));

  app.get("/api/user/cart", (req, res) => {
    fs.readFile("./data/cart.json", "utf8", (err, data) => {
      if (err) {
        return res.status(404).send;
      }
      return res.send(JSON.parse(data));
    });
  });

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

  app.get("/test", (req, res) => {
    res.send("Test route success!");
  });

  app.get("/*", renderViewMiddleware(parameters));

  app.listen(3001, () => {
    console.log("App listening on port: 2");
  });
}
