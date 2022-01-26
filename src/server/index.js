// require("source-map-support/register");

var startServer = require("universal-webpack/server");
var settings = require("../../webpack/universal-webpack-settings.json");
var configuration = require("../../webpack/webpack.config");

startServer(configuration, settings);
