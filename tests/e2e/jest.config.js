const merge = require('deepmerge');
const tsPreset = require('ts-jest/jest-preset');
const playwrightPreset = require('jest-playwright-preset/jest-preset');
const mongoDbPreset = require('@shelf/jest-mongodb/jest-preset');

module.exports = merge.all([
  tsPreset,
  mongoDbPreset,
  playwrightPreset,
  {
    // testEnvironment: 'node',
    testPathIgnorePatterns: ['node_modules', 'util', 'jest.setup.ts'],
    testRegex: './*.ts$',
    setupFilesAfterEnv: ['./jest.setup.ts']
  }
]);
