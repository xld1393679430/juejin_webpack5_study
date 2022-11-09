const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const getStyleLoader = () => isDev ? "style-loader" : MiniCssExtractPlugin.loader

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          getStyleLoader(), 
          {
            loader: "css-loader", 
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"), // 添加autoprefixer插件, 注意：需要在package.json添加browserslist或者添加.browserslistrc文件才生效。详情见https://www.jianshu.com/p/6f1b1e1c10db
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [getStyleLoader(), "css-loader", "less-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // 使用 resolve.extensions 声明自动解析 .ts 后缀文件，这意味着代码如 import "./a.ts" 可以忽略后缀声明，简化为 import "./a" 文件
  },
  plugins: [
    new ESLintPlugin({ extensions: [".js", ".ts"] }), // 添加 eslint-webpack-plugin 插件实例
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "./src", "index.html")
    }),
  ],
};
