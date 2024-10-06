import { fixupPluginRules } from "@eslint/compat";
import tsdoc from "eslint-plugin-tsdoc";

export default {
  name: "@oursky/tsdoc",
  plugins: {
    tsdoc: fixupPluginRules(tsdoc),
  },
  rules: {
    "tsdoc/syntax": "error",
  },
};
