import nextJs from 'next/jest.js';

const createJestConfig = nextJs({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.js'],
};

export default createJestConfig(config);
