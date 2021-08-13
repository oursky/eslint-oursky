var plugins = ["@babel/plugin-transform-typescript"];

var presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "8",
      },
      modules: process.env.NODE_ENV === "test" ? "commonjs" : false,
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
];

module.exports = {
  plugins,
  presets,
};
