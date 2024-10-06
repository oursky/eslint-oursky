import reacthooks from "eslint-plugin-react-hooks";

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
      "react-hooks": reacthooks,
    },
    rules: reacthooks.configs.recommended.rules,
  },
];
