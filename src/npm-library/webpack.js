const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./index.js"),
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    library: {
      name: "ld_library", // Webpack 会将模块直接挂载到全局对象上,可通过window.ld_library.xxx 获取
      type: "umd",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
    }),
  ],
};
