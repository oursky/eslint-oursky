export default {
  preset: "ts-jest",
  testMatch: ["<rootDir>/test.mjs"],
  transform: {
    "^.+\\.m?tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
