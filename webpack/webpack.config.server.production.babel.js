import { serverConfiguration } from "universal-webpack";
import settings from "./universal-webpack-settings";
import baseConfiguration from "./webpack.config";

const fileLoaders = baseConfiguration.module.rules.filter(
  (item) => item.loader === "file-loader"
);

for (const loader of fileLoaders) {
  loader.options = {
    emitFile: false,
  };
}

export default serverConfiguration(baseConfiguration, settings);
