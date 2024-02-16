module.exports = {
  // The root directory that Jest should scan for tests and modules
  roots: ['./utils'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An array of file extensions Jest should look for
  moduleFileExtensions: ['js', 'ts'],
};
