import eslint from "./configs/eslint";
import typescript from "./configs/typescript";
import react from "./configs/react";
import reactHooks from "./configs/reacthooks";
import reactNative from "./configs/reactnative";
import tsdoc from "./configs/tsdoc";
import oursky from "./configs/oursky";

const plugin = {
  configs: {
    eslint,
    typescript,
    react,
    tsdoc,
    "react-hooks": reactHooks,
    "react-native": reactNative,
  },
};

plugin.configs["oursky"] = oursky(plugin);

export default plugin;
