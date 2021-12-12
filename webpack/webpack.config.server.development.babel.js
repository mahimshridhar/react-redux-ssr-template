import configuration from "./webpack.config.server.production.babel";
import { setDevFileServer } from "./devserver";

// Same as production configuration
// with the only change that all files
// are served by webpack devserver.

configuration.output = {
  ...configuration.output,
  libraryTarget: "commonjs2",
};

export default setDevFileServer(configuration);
