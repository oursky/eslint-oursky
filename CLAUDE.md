# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@oursky/eslint-plugin`, a comprehensive ESLint plugin that provides opinionated configurations for TypeScript, React, and React Native projects. The plugin bundles multiple ESLint configurations including TypeScript, React, SonarJS, and TSDoc rules.

## Common Development Commands

### Building and Testing
- `npm run build` - Build the plugin using Rollup (compiles `src/index.mjs` to `dist/index.cjs`)
- `npm test` - Run the full test suite via `./scripts/test.sh`
- `npm run format` - Format code using Prettier
- `./scripts/test.sh` - Full test script that builds, installs dependencies, and runs tests
- `./scripts/test.sh --update` - Update test snapshots
- `./scripts/test.sh --ignore-changes` - Skip git status checks during testing

### Development Workflow
- The project uses Rollup to bundle the ESM source code into a CommonJS distribution
- Tests are located in the `test/` directory with snapshot testing
- The test script ensures git cleanliness before running tests

## Architecture Overview

### Core Structure
- **Entry Point**: `src/index.mjs` - Exports the main plugin object with all configurations
- **Configurations**: `src/configs/` - Contains individual ESLint config modules:
  - `eslint.mjs` - Base ESLint rules
  - `typescript.mjs` - TypeScript-specific rules (extensive rule definitions)
  - `react.mjs` - React-specific rules
  - `reacthooks.mjs` - React Hooks rules
  - `reactnative.mjs` - React Native rules
  - `tsdoc.mjs` - TSDoc documentation rules
  - `oursky.mjs` - Custom Oursky rules including SonarJS cognitive complexity

### Plugin Architecture
The plugin follows a modular configuration approach where:
1. Each configuration is a separate module that can be imported independently
2. The main plugin object aggregates all configurations under a `configs` property
3. The `oursky` configuration is special - it's generated dynamically and includes the plugin itself
4. External dependencies are marked as external in the Rollup config

### Key Dependencies
- `typescript-eslint` - TypeScript ESLint integration
- `eslint-plugin-react` - React-specific linting
- `eslint-plugin-react-hooks` - React Hooks linting
- `eslint-plugin-react-native` - React Native linting
- `eslint-plugin-sonarjs` - Code quality rules
- `eslint-plugin-tsdoc` - TypeScript documentation

### Testing Strategy
- Uses snapshot testing to ensure configuration stability
- Test files are in `test/src/` with both TypeScript and React examples
- The test environment has its own package.json and ESLint configuration
- Tests verify that all rules are properly configured and don't conflict

## Usage Patterns

The plugin is designed to be used with ESLint flat config format (eslint.config.mjs). Users typically:
1. Import the plugin: `import oursky from "@oursky/eslint-plugin"`
2. Apply configurations selectively based on their project type
3. Override specific rules using object spread syntax

The plugin supports three main project types:
- TypeScript projects (Node.js backends, Turbo & Stimulus frontends)
- React projects in TypeScript
- React Native projects in TypeScript
