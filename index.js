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
    // Turn on some rules that are not included in recommended
    "no-constant-condition": ["error", {
      checkLoops: false,
    }],
    "no-empty": ["error", {
      allowEmptyCatch: true,
    }],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-template-curly-in-string": "error",
    "require-atomic-updates": "error",
    "complexity": "error",
    "default-case": "error",
    "guard-for-in": "error",
    "no-caller": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    // We assume the user is using TypeScript with
    // strictest settings.
    // An async function without await is not a
    // problem.
    "require-await": "off",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "eqeqeq": ["error", "always", {
      null: "ignore"
    }],
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
    "@typescript-eslint/no-use-before-define": ["error", {
      functions: false,
      classes: true,
      variables: true,
      typedefs: false,
    }],
    "@typescript-eslint/no-unused-vars": ["error", {
      args: "all",
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
    }],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/unbound-method": ["error", {
      ignoreStatic: true,
    }],
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-floating-promises": "error",
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
  },
};
