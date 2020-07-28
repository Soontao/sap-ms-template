
module.exports = {
  'testTimeout': 30 * 3000, // 30s
  'collectCoverageFrom': [
    '*service/**/*.ts',
    '!**/node_modules/**'
  ],
  'coveragePathIgnorePatterns': [
    'node_modules/',
    '*service/config'
  ],
  'testEnvironment': 'node',
  'testRegex': '/test/.*\\.test\\.js$',
  'moduleFileExtensions': [
    'ts',
    'js',
    'json'
  ]
};
