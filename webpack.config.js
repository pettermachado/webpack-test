var path = require('path');

module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};

