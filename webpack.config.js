var path = require("path");
var webpack = require('webpack');

module.exports = {
  target: "web",
  context: __dirname,
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".jsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: "babel" }
    ],
    noParse: /\.min\.js/
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
