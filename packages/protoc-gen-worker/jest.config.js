module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './test/tsconfig.json',
    },
  },
  testEnvironment: './jest.env.js',
  roots: ['./test/spec', './test/out'],
};
