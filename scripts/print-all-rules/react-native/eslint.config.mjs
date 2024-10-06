import reactnative from "eslint-plugin-react-native";

export default [
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-native": reactnative,
    },
    rules: reactnative.configs.all.rules,
  },
];
