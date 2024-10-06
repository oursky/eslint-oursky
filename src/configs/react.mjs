import react from "eslint-plugin-react";

export default {
  name: "@oursky/react",
  plugins: {
    react,
  },
  settings: {
    react: {
      // <></> is available from 16.2
      // Hooks is available from 16.8
      version: "16.8",
    },
    linkComponents: [
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
  rules: {
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "error",
    "react/checked-requires-onchange-or-readonly": "error",
    "react/default-props-match-prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/forward-ref-uses-ref": "error",
    "react/function-component-definition": "off",
    "react/hook-use-state": "off",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-handler-names": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",

    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
      },
    ],

    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off",

    "react/jsx-no-bind": [
      "error",
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],

    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-props-no-spread-multi": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off",
    "react/no-adjacent-inline-elements": "error",
    "react/no-arrow-function-lifecycle": "off",
    "react/no-array-index-key": "off",
    "react/no-invalid-html-attribute": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "off",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "off",
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "off",
    "react/no-unused-class-component-methods": "off",
    "react/prefer-exact-props": "off",
    "react/prefer-read-only-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "off",
    "react/sort-comp": "off",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "error",

    "react/display-name": "off",
    "react/jsx-no-undef": "error",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
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
    "react/jsx-fragments": "error",
    "react/jsx-newline": "off",
    "react/jsx-no-constructed-context-values": "error",
    "react/no-unstable-nested-components": "error",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
  },
};
