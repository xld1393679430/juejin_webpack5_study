const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const Merge = require("webpack-merge");
const base = require("./webpack.base");
const { getEntry } = require("./src/lib");

module.exports = Merge.merge(base, {
  entry: path.join(__dirname, getEntry()),
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"], // 需要同时配置vue-loader和VueLoaderPlugin才能正常运行
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
});
