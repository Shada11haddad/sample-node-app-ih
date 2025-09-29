// jest.config.js (كونفيق واحد بسيط)
module.exports = {
  testEnvironment: "node",                 // الافتراضي لكل التستات
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "html"],
  coverageDirectory: "coverage",
  testMatch: ["**/?(*.)+(spec|test).js"], // يلتقط كل ملفات *.test.js أينما كانت
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"] // لتحميل jest-dom إلخ (لن يؤثر على node)
};
