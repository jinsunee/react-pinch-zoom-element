const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./example/src/index.tsx",
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-pinch-zoom-element": `${__dirname}/src`,
    },
  },
  devServer: {
    port: process.env.PORT || "3000",
    static: {
      directory: "./example/public",
    },
    historyApiFallback: true,
  },
};
