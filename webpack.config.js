const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib/dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'lib/dist'),
    },
    compress: true,
    port: 9000,
  },
};