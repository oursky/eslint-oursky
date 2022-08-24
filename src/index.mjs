import eslint from "./configs/eslint";
import typescript from "./configs/typescript";
import react from "./configs/react";
import reactHooks from "./configs/reacthooks";
import reactNative from "./configs/reactnative";
import tsdoc from "./configs/tsdoc";
import oursky from "./configs/oursky";
import { rules } from "./rules";

export const configs = {
  eslint,
  typescript,
  react,
  tsdoc,
  oursky,
  "react-hooks": reactHooks,
  "react-native": reactNative,
};
export { rules };
