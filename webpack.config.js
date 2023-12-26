const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        use: 'ts-loader',
        exclude: /node-modules/,
      }
    ],
  },
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg', '.png'], // Add more extensions if needed
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 8080,
    open: true,
  },
};
