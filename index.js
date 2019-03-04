module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react-hooks",
    "react-native",
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      // <></> is available from 16.2
      version: "16.2",
    },
    linkComponents: [
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
  rules: {
    // typescript
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    // react
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-no-bind": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-fragments": "error",
    // react-native
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
  },
};
