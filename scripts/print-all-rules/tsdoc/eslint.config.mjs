import tsdoc from "eslint-plugin-tsdoc";

export default [
  {
    files: ["**/*.{ts,mts,tsx,mtsx}"],
    plugins: {
      tsdoc,
    },
    rules: {
      "tsdoc/syntax": "error",
    },
  },
];
