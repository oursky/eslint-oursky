const eslint = require("./configs/eslint");
const typescript = require("./configs/typescript");
const react = require("./configs/react");
const reactHooks = require("./configs/reacthooks");
const reactNative = require("./configs/reactnative");
const tsdoc = require("./configs/tsdoc");
const oursky = require("./configs/oursky");

module.exports = {
  configs: {
    eslint,
    typescript,
    react,
    tsdoc,
    oursky,
    "react-hooks": reactHooks,
    "react-native": reactNative,
  },
};
