const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.tsx",
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        options: {
          configFile: "tsconfig.client.json",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
};
