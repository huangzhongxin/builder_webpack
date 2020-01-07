/* eslint-disable no-undef */
const { expect } = require('chai');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../../lib/webpack.base.js');

describe('webpack.base.js unit test case', () => {
  it('entry', () => {
    expect(baseConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') > -1).to.equal(true);
    expect(baseConfig.entry.search.indexOf('/test/smoke/template/src/search/index.js') > -1).to.equal(true);
  });

  it('module.rules', () => {
    const { length } = baseConfig.module.rules;
    expect(length).to.equal(4);
  });

  it('plugins', () => {
    const { length } = baseConfig.plugins;
    expect(length).to.equal(5);
    expect(baseConfig.plugins[length - 1] instanceof HtmlWebpackPlugin).to.equal(true);
  });
});
