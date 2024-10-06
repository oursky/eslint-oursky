import { ESLint } from "eslint";
import { writeFileSync } from "fs";
import { cwd } from "node:process";
import { join } from "path";

const todos = [
  {
    cwd: "./scripts/print-all-rules/eslintjs",
    file: "main.js",
    writeTo: "./rules/eslint",
  },
  {
    cwd: "./scripts/print-all-rules/react",
    file: "main.jsx",
    writeTo: "./rules/react",
  },
  {
    cwd: "./scripts/print-all-rules/react-native",
    file: "main.jsx",
    writeTo: "./rules/reactnative",
  },
  {
    cwd: "./scripts/print-all-rules/typescript",
    file: "main.ts",
    writeTo: "./rules/typescript",
    prefix: "@typescript-eslint/",
  },
  {
    cwd: "./scripts/print-all-rules/tsdoc",
    file: "main.ts",
    writeTo: "./rules/tsdoc",
  },
  {
    cwd: "./scripts/print-all-rules/react-hooks",
    file: "main.jsx",
    writeTo: "./rules/reacthooks",
  },
];

(async function main() {
  for (const todo of todos) {
    const eslint = new ESLint({
      cwd: join(cwd(), todo.cwd),
    });

    const resolvedConfig = await eslint.calculateConfigForFile(todo.file);

    let rules = Object.keys(resolvedConfig.rules);

    if (todo.prefix) {
      rules = rules.filter((rule) => rule.startsWith(todo.prefix));
    }

    rules.sort();

    const content = rules.join("\n") + "\n";
    writeFileSync(todo.writeTo, content, { encoding: "utf8" });
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
