export default {
  plugins: ["sonarjs"],
  rules: {
    "@oursky/react-vfc": "error",
    "sonarjs/cognitive-complexity": ["error", 10],
  },
};
