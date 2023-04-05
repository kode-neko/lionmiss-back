import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testPathIgnorePatterns: [
    "node_modules",
    "<rootDir>/dist",
    "<rootDir>/build",
    "<rootDir>/scripts",
    "<rootDir>/fixtures",
  ],
  testEnvironment: "node",
};

export default config;
