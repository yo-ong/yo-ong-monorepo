const baseConfig = require('../../eslint.config.js');

module.exports = [
  {
    ignores: ['.next/**', '**/.next/**'],
  },
  ...baseConfig,
];
