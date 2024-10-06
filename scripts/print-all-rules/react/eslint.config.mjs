import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    ...react.configs.flat.all,
  },
];
