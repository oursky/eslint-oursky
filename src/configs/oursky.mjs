import sonarjs from "eslint-plugin-sonarjs";

export default function ourskyConfig(oursky) {
  return {
    name: "@oursky/oursky",
    plugins: {
      oursky,
      sonarjs,
    },
    linterOptions: {
      reportUnusedInlineConfigs: "error",
    },
    rules: {
      "sonarjs/cognitive-complexity": ["error", 10],
    },
  };
}
