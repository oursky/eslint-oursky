var plugins = [
  "@babel/plugin-transform-typescript",
  "@babel/plugin-proposal-class-properties",
];

var presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "8",
      },
      loose: true,
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
