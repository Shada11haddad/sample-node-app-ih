// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "html"],
  coverageDirectory: "coverage",
  projects: [
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/tests/server.test.js",
        "<rootDir>/tests/integration.test.js"
      ]
    },
    {
      displayName: "client",
      testEnvironment: "jsdom",
      setupFiles: ["<rootDir>/tests/setup.js"],
      testMatch: [
        "<rootDir>/tests/client.test.js"
      ]
    }
  ]
};
