module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",

    // Coverage for Coveralls
    coverageReporters: ["lcov"],
    coverageDirectory: "./coverage"
};
