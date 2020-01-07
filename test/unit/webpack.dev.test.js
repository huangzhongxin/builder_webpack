/* eslint-disable no-undef */
const { expect } = require('chai');

const devConfig = require('../../lib/webpack.dev.js');

describe('webpack.dev.js unit test case', () => {
  it('merge success', () => {
    expect(devConfig.devtool).to.equal('cheap-source-map');
    expect(devConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') > -1).to.equal(true);
    expect(devConfig.entry.search.indexOf('/test/smoke/template/src/search/index.js') > -1).to.equal(true);
  });
});
