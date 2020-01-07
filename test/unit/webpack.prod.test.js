/* eslint-disable no-undef */
const { expect } = require('chai');

const prodConfig = require('../../lib/webpack.prod.js');

describe('webpack.prod.js unit test case', () => {
  it('merge success', () => {
    expect(prodConfig.plugins.length).to.equal(6);
    expect(prodConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') > -1).to.equal(true);
    expect(prodConfig.entry.search.indexOf('/test/smoke/template/src/search/index.js') > -1).to.equal(true);
  });
});
