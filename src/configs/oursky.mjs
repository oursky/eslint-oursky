import sonarjs from "eslint-plugin-sonarjs";

export default function ourskyConfig(oursky) {
  return {
    name: "@oursky/oursky",
    plugins: {
      oursky,
      sonarjs,
    },
    rules: {
      "sonarjs/cognitive-complexity": ["error", 10],
    },
  };
}
