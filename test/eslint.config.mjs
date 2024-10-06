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
  {
    files: [js, ts],
    ...oursky.configs.oursky,
  },
];
