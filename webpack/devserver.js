import setupConfig from "../configuration/setup";

const PORT = setupConfig.webpackDevServer.port;

export const devServerConfig = {
  port: PORT,
  static: {
    publicPath: setupConfig.publicPath + "/",
  },

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export function setDevFileServer(configuration) {
  return {
    ...configuration,
    output: {
      ...configuration.output,
      publicPath: `http://localhost:${PORT}${configuration.output.publicPath}`,
    },
  };
}
