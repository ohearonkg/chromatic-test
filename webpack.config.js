const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const appEntryPath = path.resolve(__dirname, "./src/index.tsx");
const htmlTemplatePath = path.resolve(__dirname, "./public/index.html");

module.exports = {
  entry: appEntryPath,
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: htmlTemplatePath })],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", ".css", ".sass"],
  },
};
