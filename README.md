## Installation

```sh
npm install --save --save-dev --save-exact \
  eslint@6.x \
  @typescript-eslint/eslint-plugin@2.x \
  @typescript-eslint/parser@2.x \
  eslint-plugin-react@7.x \
  eslint-plugin-react-hooks@2.x \
  eslint-plugin-react-native@3.x \
  eslint-plugin-tsdoc@0.2.1 \
  @oursky/eslint-plugin
```

## Upgrade

```sh
npm upgrade \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-native \
  eslint-plugin-tsdoc \
  @oursky/eslint-plugin
```

## Usage

```JSON
{
  "plugins": ["@oursky"],
  "extends": [
    "plugin:@oursky/eslint",
    "plugin:@oursky/typescript",
    "plugin:@oursky/react",
    "plugin:@oursky/react-hooks",
    "plugin:@oursky/react-native",
    "plugin:@oursky/oursky"
  ],
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  }
}
```
