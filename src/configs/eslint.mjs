export default {
  name: "@oursky/eslint",
  rules: {
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "arrow-body-style": "off",
    "block-scoped-var": "error",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    complexity: ["error", { max: 10 }],
    "consistent-this": "off",
    "consistent-return": "error",
    "constructor-super": "error",
    curly: "off",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "off",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "for-direction": "error",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "getter-return": "error",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": "off",
    "logical-assignment-operators": "off",
    "max-classes-per-file": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "new-cap": "off",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-constructor-return": "error",
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "off",
    "no-delete-var": "off",
    "no-div-regex": "off",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "off",
    "no-empty-character-class": "error",
    "no-empty-function": "off",
    "no-empty-pattern": "off",
    "no-empty-static-block": "off",
    "no-eq-null": "off",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "off",
    "no-fallthrough": [
      "error",
      {
        commentPattern: "fallthrough",
      },
    ],
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-implicit-globals": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": "off",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "off",
    "no-labels": "off",
    "no-lonely-if": "off",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    "no-multi-assign": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new-native-nonconstructor": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-object-constructor": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-self-assign": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "off",
    "no-unneeded-ternary": "off",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "no-useless-assignment": "error",
    "no-useless-backreference": "error",
    "no-useless-catch": "off",
    "no-useless-computed-key": "off",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "object-shorthand": "off",
    "one-var": "off",
    "operator-assignment": "off",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "off",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-object-has-own": "off",
    "prefer-template": "off",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    strict: "off",
    "symbol-description": "off",
    "unicode-bom": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "off",
    yoda: "off",
    "no-dupe-else-if": "error",
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-mixed-requires": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "prefer-const": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    radix: "error",
    "require-atomic-updates": "error",
  },
};
