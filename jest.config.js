module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/singleton.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./.tsconfig",
      // set global config for ts-jest
    },
  },
};
