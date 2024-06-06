export default {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": false,
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/block-spacing": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/class-literal-property-style": "off",

    "class-methods-use-this": "off",
    "@typescript-eslint/class-methods-use-this": [
      "error",
      {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: true,
      },
    ],

    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],

    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/init-declarations": "off",

    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "off",

    "@typescript-eslint/keyword-spacing": "off",

    "lines-around-comment": "off",
    "@typescript-eslint/lines-around-comment": "off",

    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",

    "no-invalid-this": "off",
    // For unknown reason, this rule causes crashes.
    // TypeError: Cannot read properties of undefined (reading 'getScope')
    // Occurred while linting /Users/louischan/eslint-oursky/test/src/react.tsx:1
    // Rule: "@typescript-eslint/no-invalid-this"
    "@typescript-eslint/no-invalid-this": "off",

    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "off",

    // https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    "no-undef": "off",

    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",

    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false,
        allowNullish: true,
      },
    ],

    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",

    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowNullableEnum: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/typedef": "off",

    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-exports": "off",
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
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        enums: false,
        typedefs: false,
        ignoreTypeReferences: true,

        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: true,
      },
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: true,
      },
    ],
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/parameter-properties": "error",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        allowConstantLoopConditions: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/unified-signatures": [
      "error",
      {
        ignoreDifferentlyNamedParameters: true,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // It reports `import React from "react";` as type-only, which is not.
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    // default-case and consistent-return could undermine the usefulness of
    // @typescript-eslint/switch-exhaustiveness-check.
    // https://github.com/oursky/eslint-oursky/issues/43
    "default-case": "off",
    "consistent-return": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      },
    ],
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/sort-type-constituents": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
  },
};
