import { fixupPluginRules } from "@eslint/compat";
import reactnative from "eslint-plugin-react-native";

export default {
  name: "@oursky/react-native",
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    "react-native": fixupPluginRules(reactnative),
  },
  rules: {
    "react-native/no-color-literals": "off",
    "react-native/no-inline-styles": "error",
    "react-native/no-unused-styles": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
    "react-native/sort-styles": "off",
    "react-native/split-platform-components": "off",
  },
};
