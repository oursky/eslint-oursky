module.exports = {
  // jest does not support ESM out of the box.
  // https://github.com/typescript-eslint/typescript-eslint/issues/4210#issuecomment-981203332
  resolver: "<rootDir>/jest-resolver.js",
};
