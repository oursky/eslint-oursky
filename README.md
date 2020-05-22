## Installation

```sh
npm install --save --save-dev --save-exact eslint@7.x @oursky/eslint-plugin
```

## Usage

In your `.eslintrc`

```javascript
{
  "plugins": ["@oursky"],
  // If you are using TypeScript, you need to configure parserOptions.
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "extends": [
    // You should always include these two.
    "plugin:@oursky/eslint",
    "plugin:@oursky/oursky",
    // Include this if you are using TypeScript.
    "plugin:@oursky/typescript",
    // Include these two if your project is React.
    "plugin:@oursky/react",
    "plugin:@oursky/react-hooks",
    // Include this if your project is React Native.
    "plugin:@oursky/react-native"
  ]
}
```
