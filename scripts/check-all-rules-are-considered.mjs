import { readFileSync } from "fs";

const todos = [
  {
    rules: "rules/eslint",
    config: "../src/configs/eslint.mjs",
  },
  {
    rules: "rules/typescript",
    config: "../src/configs/typescript.mjs",
  },
  {
    rules: "rules/tsdoc",
    config: "../src/configs/tsdoc.mjs",
  },
  {
    rules: "rules/react",
    config: "../src/configs/react.mjs",
  },
  {
    rules: "rules/reacthooks",
    config: "../src/configs/reacthooks.mjs",
  },
  {
    rules: "rules/reactnative",
    config: "../src/configs/reactnative.mjs",
  },
];

(async function main() {
  let missingRules = [];

  for (const todo of todos) {
    const content = readFileSync(todo.rules, { encoding: "utf8" });
    const allRules = content.split("\n").filter((line) => line !== "");

    const module = await import(todo.config);
    const consideredRules = Object.keys(module.default.rules);

    const consideredRulesSet = new Set(consideredRules);

    const unconsideredRulesSet = allRules.filter(
      (element) => !consideredRulesSet.has(element)
    );

    missingRules = missingRules.concat([...unconsideredRulesSet]);
  }

  if (missingRules.length > 0) {
    for (const rule of missingRules) {
      console.error(rule);
    }
    process.exitCode = 1;
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
