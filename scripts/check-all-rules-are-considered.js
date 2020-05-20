const fs = require("fs");

const todos = [
  {
    rules: "rules/eslint",
    config: "../src/configs/eslint",
  },
  {
    rules: "rules/typescript",
    config: "../src/configs/typescript",
  },
  {
    rules: "rules/tsdoc",
    config: "../src/configs/tsdoc",
  },
  {
    rules: "rules/react",
    config: "../src/configs/react",
  },
  {
    rules: "rules/reacthooks",
    config: "../src/configs/reacthooks",
  },
  {
    rules: "rules/reactnative",
    config: "../src/configs/reactnative",
  },
];

(async function main() {
  let missingRules = [];

  for (const todo of todos) {
    const content = fs.readFileSync(todo.rules, { encoding: "utf8" });
    const allRules = content.split("\n").filter((line) => line !== "");

    const consideredRules = Object.keys(require(todo.config).rules);

    const allRulesSet = new Set(allRules);
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
