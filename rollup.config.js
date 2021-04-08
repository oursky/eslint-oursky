import { readFileSync } from "fs";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

const getBuiltins = require("builtins");

const extensions = [".mjs", ".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  resolve({
    extensions,
  }),
  commonjs({}),
  babel({
    extensions,
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  json({
    preferConst: true,
    indent: "  ",
  }),
];

function makeExternal() {
  const jsonString = readFileSync("package.json", { encoding: "utf8" });
  const packageJSON = JSON.parse(jsonString);
  const deps = Object.keys(packageJSON["dependencies"] || {});
  const builtins = getBuiltins();

  function external(id) {
    return deps.indexOf(id) >= 0 || builtins.indexOf(id) >= 0;
  }

  return external;
}

export default {
  plugins,
  external: makeExternal(),
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
};
