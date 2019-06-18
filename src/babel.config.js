module.exports = {
  presets: ["@babel/preset-flow"],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", {modules: false}],
    [
      "babel-plugin-transform-rename-import",
      {original: "^(.+)\\.mjs$", replacement: "$1"}
    ],
    "babel-plugin-inline-dotenv"
  ]
};