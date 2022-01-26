import express from "express";
import fs from "fs";
import renderViewMiddleware from "./middleware/renderView";
import path from "path";
var morgan = require("morgan");

// const setupConfiguration = require("configuration/setup");

// import setupConfiguration from "../configuration/setup";

const PORT = 8000;

export default function server(parameters) {
  const app = express();

  // app.use(morgan("combined"));

  app.use("/assets", express.static("build/assets"));

  // app.get("/api/user/cart", (req, res) => {
  //   fs.readFile("./data/cart.json", "utf8", (err, data) => {
  //     if (err) {
  //       return res.status(404).send;
  //     }
  //     return res.send(JSON.parse(data));
  //   });
  // });

  // app.get("/recipes", (req, res) => {
  //   // Read and open the recipes json file
  //   fs.readFile(`${__dirname}/../data/recipes.json`, "utf8", (err, data) => {
  //     // Error handling - return an error
  //     if (err) {
  //       res.status(500).end();
  //       return console.error(err);
  //     }
  //     let recipes = JSON.parse(data);
  //     res.status(200).send({ recipes });
  //   });
  // });

  // app.get("/featured", (req, res) => {
  //   // Read and open the featured recipe json file
  //   fs.readFile(`${__dirname}/../data/featured.json`, "utf8", (err, data) => {
  //     // Error handling - return an error
  //     if (err) {
  //       res.status(500).end();
  //       return console.error(err);
  //     }
  //     let recipe = JSON.parse(data);
  //     res.status(200).send({ recipe });
  //   });
  // });

  // app.get("/assets", (req, res) => {
  //   res.send("Test route success!");
  // });

  // app.get("/*", renderViewMiddleware(parameters));

  app.use(renderViewMiddleware(parameters));

  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
}
