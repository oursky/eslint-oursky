import { fixupPluginRules } from "@eslint/compat";
import reacthooks from "eslint-plugin-react-hooks";

export default {
  name: "@oursky/react-hooks",
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    "react-hooks": fixupPluginRules(reacthooks),
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
