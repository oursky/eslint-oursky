const { ESLint } = require("eslint");
const fs = require("fs");

const todos = [
  {
    config: {
      extends: "eslint:all",
    },
    writeTo: "rules/eslint",
  },
  {
    config: {
      extends: ["plugin:react/all"],
      plugins: ["react"],
    },
    writeTo: "rules/react",
  },
  {
    config: {
      extends: ["plugin:react-native/all"],
      plugins: ["react-native"],
    },
    writeTo: "rules/reactnative",
  },
  {
    config: {
      extends: ["plugin:@typescript-eslint/all"],
      plugins: ["@typescript-eslint"],
    },
    writeTo: "rules/typescript",
    prefix: "@typescript-eslint/",
  },
  // tsdoc and react-hooks do not provide a config for all rules.
  // So they must be updated manually.
];

(async function main() {
  for (const todo of todos) {
    const eslint = new ESLint({
      useEslintrc: false,
      baseConfig: todo.config,
    });

    const resolvedConfig = await eslint.calculateConfigForFile("main.js");

    let rules = Object.keys(resolvedConfig.rules);

    if (todo.prefix) {
      rules = rules.filter((rule) => rule.startsWith(todo.prefix));
    }

    rules.sort();

    const content = rules.join("\n") + "\n";
    fs.writeFileSync(todo.writeTo, content, { encoding: "utf8" });
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
