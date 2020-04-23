export default {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // typescript
    // picked from recommended
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-this-alias": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: false,
      },
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: true,
      },
    ],
    // not from recommended
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        ignoreRhs: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-floating-promises": "error",
    // This rule violates javascript idiom.
    // "@typescript-eslint/strict-boolean-expressions": ["error", {
    //   allowNullable: true,
    //   ignoreRhs: true,
    // }],
    "@typescript-eslint/prefer-as-const": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "default-case": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
  },
};
