var webpack = require('webpack');

var config = {
  target: "web",
  context: __dirname,
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    sourceMapFilename: "[file].map"
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

if (process.env.NODE_ENV === 'devlopment') {
  config.devtool = 'source-map';
  config.cache = true;
  config.debug = true;
}

module.exports = config;