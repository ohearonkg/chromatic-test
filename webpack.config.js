const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const appEntryPath = path.resolve(__dirname, "./src/index.tsx");
const htmlTemplatePath = path.resolve(__dirname, "./public/index.html");

module.exports = {
  entry: appEntryPath,
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: htmlTemplatePath })],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
