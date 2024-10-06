export default {
  input: "./src/index.mjs",
  output: {
    format: "commonjs",
    file: "./dist/index.cjs",
  },
  external: [
    "@eslint/compat",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-native",
    "eslint-plugin-sonarjs",
    "eslint-plugin-tsdoc",
    "typescript-eslint",
  ],
};
