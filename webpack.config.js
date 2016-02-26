module.exports = {
  entry: "./src/index.js",
  devtool: 'inline-source-map', // for source map
  output: {
    path: './dist',
    publicPath: "/dist",  // for dev server
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/,exclude: /node_modules/, loader: "style!css" }
    ]
  }
};
