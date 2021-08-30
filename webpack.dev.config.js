const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // 每次build之前删除dist文件夹下的所有文件
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    disableHostCheck: true,
    inline: true,
    hot: true,
    port: 8080,
    host: "0.0.0.0",
    overlay: {
      errors: true,
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false,
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      hash: true,
    }),
  ],
  mode: "development",
};
