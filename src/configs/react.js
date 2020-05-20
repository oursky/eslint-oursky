module.exports = {
  extends: ["plugin:react/recommended"],
  plugins: ["react"],
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
    // react
    // customize some recommended rules
    "react/display-name": "off",
    "react/jsx-no-undef": "off",
    "react/prop-types": "off",
    // not from recommended
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
  },
};
