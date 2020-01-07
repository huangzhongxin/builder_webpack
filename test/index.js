/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('builder-webpack unit test case', () => {
  require('./unit/webpack.base.test');
  require('./unit/webpack.dev.test');
  require('./unit/webpack.prod.test');
});
describe('builder-webpack smoke test case', () => {
  require('./smoke');
});
