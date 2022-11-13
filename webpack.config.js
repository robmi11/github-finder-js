const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src"),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
      watch: true,
    },
    watchFiles: ["src/**/*.js", "public/**/*"],
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  target: "web",
  cache: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Github Finder App",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "templates", "template.html"),
    }),
  ],
};
