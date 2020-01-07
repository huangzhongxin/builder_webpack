/* eslint-disable no-console */
const path = require('path');
const Mocha = require('mocha');
const rimraf = require('rimraf');
const webpack = require('webpack');

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.prod.js');

  webpack(prodConfig, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Webpack build success, begin to run smoke test.');

    const mocha = new Mocha({
      timeout: 100000,
    });
    mocha.addFile(path.join(__dirname, 'html.test.js'));
    mocha.addFile(path.join(__dirname, 'js.test.js'));
    mocha.addFile(path.join(__dirname, 'css.test.js'));
    mocha.run();
  });
});
