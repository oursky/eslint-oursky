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
    "react-hooks/component-hook-factories": "error",
    "react-hooks/config": "error",
    "react-hooks/error-boundaries": "error",
    "react-hooks/gating": "error",
    "react-hooks/globals": "error",
    "react-hooks/immutability": "error",
    "react-hooks/incompatible-library": "warn",
    "react-hooks/preserve-manual-memoization": "error",
    "react-hooks/purity": "error",
    "react-hooks/refs": "error",
    "react-hooks/set-state-in-effect": "error",
    "react-hooks/set-state-in-render": "error",
    "react-hooks/static-components": "error",
    "react-hooks/unsupported-syntax": "warn",
    "react-hooks/use-memo": "error",
  },
};
