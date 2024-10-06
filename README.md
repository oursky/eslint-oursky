- [Installation](#installation)
- [How to use?](#how-to-use)
  * [TypeScript project (e.g. Node.js backend, Turbo & Stimulus frontend)](#typescript-project-eg-nodejs-backend-turbo--stimulus-frontend)
  * [React project in TypeScript](#react-project-in-typescript)
  * [React Native Project in TypeScript](#react-native-project-in-typescript)
  * [What about other use cases?](#what-about-other-use-cases)
- [I want to disable / enable a rule in my project. How can I do that?](#i-want-to-disable--enable-a-rule-in-my-project-how-can-i-do-that)

## Installation

This plugin supports eslint 9 only.

```sh
npm install --save --save-dev eslint@9.x @oursky/eslint-plugin
```

## How to use?

The following examples are the contents of your `eslint.config.mjs`.

### TypeScript project (e.g. Node.js backend, Turbo & Stimulus frontend)

```javascript
import oursky from "@oursky/eslint-plugin";

const js = "src/**/*.{js,jsx,mjs,mjsx}";
const ts = "src/**/*.{ts,tsx,mts,mtsx}";

export default [
  {
    files: [ts],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [js, ts],
    ...oursky.configs.eslint,
  },
  {
    files: [ts],
    ...oursky.configs.typescript,
  },
  {
    files: [ts],
    ...oursky.configs.tsdoc,
  },
  {
    files: [js, ts],
    ...oursky.configs.oursky,
  },
];
```

### React project in TypeScript

```javascript
import oursky from "@oursky/eslint-plugin";

const js = "src/**/*.{js,jsx,mjs,mjsx}";
const ts = "src/**/*.{ts,tsx,mts,mtsx}";

export default [
  {
    files: [ts],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [js, ts],
    ...oursky.configs.eslint,
  },
  {
    files: [ts],
    ...oursky.configs.typescript,
  },
  {
    files: [ts],
    ...oursky.configs.tsdoc,
  },
  {
    files: [js, ts],
    ...oursky.configs.oursky,
  },
  {
    files: [js, ts],
    ...oursky.configs.react,
  },
  {
    files: [js, ts],
    ...oursky.configs["react-hooks"],
  },
];
```

### React Native Project in TypeScript

```javascript
import oursky from "@oursky/eslint-plugin";

const js = "src/**/*.{js,jsx,mjs,mjsx}";
const ts = "src/**/*.{ts,tsx,mts,mtsx}";

export default [
  {
    files: [ts],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [js, ts],
    ...oursky.configs.eslint,
  },
  {
    files: [ts],
    ...oursky.configs.typescript,
  },
  {
    files: [ts],
    ...oursky.configs.tsdoc,
  },
  {
    files: [js, ts],
    ...oursky.configs.oursky,
  },
  {
    files: [js, ts],
    ...oursky.configs.react,
  },
  {
    files: [js, ts],
    ...oursky.configs["react-hooks"],
  },
  {
    files: [js, ts],
    ...oursky.configs["react-native"],
  },
];
```

### What about other use cases?

You are not supposed to have other use cases at Oursky.
Open an issue if you want to discuss.

## I want to disable / enable a rule in my project. How can I do that?

You use ordinary object rest spread to override.

```javascript
import oursky from "@oursky/eslint-plugin";

const js = "src/**/*.{js,jsx,mjs,mjsx}";
const ts = "src/**/*.{ts,tsx,mts,mtsx}";

export default [
  {
    files: [ts],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [js, ts],
    ...oursky.configs.eslint,
  },
  {
    files: [ts],
    ...oursky.configs.typescript,
    rules: {
      ...oursky.configs.typescript.rules,
      "@typescript-eslint/parameter-properties": "off",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          "types": {
            "BrokenType": "BrokenType is broken. Use NonBrokenType instead",
          },
        },
      ]
    },
  },
  {
    files: [ts],
    ...oursky.configs.tsdoc,
  },
  {
    files: [js, ts],
    ...oursky.configs.oursky,
  },
  {
    files: [js, ts],
    ...oursky.configs.react,
  },
  {
    files: [js, ts],
    ...oursky.configs["react-hooks"],
  },
  {
    files: [js, ts],
    ...oursky.configs["react-native"],
  },
];
```
