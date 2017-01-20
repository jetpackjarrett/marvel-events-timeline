/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
global.fetch = require('jest-fetch-mock');
