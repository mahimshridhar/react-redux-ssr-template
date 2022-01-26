import express from "express";
import renderViewMiddleware from "./middleware/renderView";
const setupConfiguration = require("../../configuration/setup");
const PORT = setupConfiguration.webserver.port;

export default function server(parameters) {
  const app = express();

  app.use("/assets", express.static("build/assets"));

  app.use(renderViewMiddleware(parameters));

  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
}
