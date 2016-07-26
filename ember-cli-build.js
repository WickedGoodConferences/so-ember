/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var envTarget = process.env.DEPLOY_TARGET || EmberApp.env();
var ENV = require('./config/environment.js')(envTarget);
var isProductionLikeBuild = ['production', 'staging'].indexOf(envTarget) > -1;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: isProductionLikeBuild,
      generateAssetMap: true,
      replaceExtensions: ['html', 'js', 'css'],
      prepend: `${ENV.assetHost}/`
    },
    sourcemaps: { enabled: isProductionLikeBuild },
    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS: { enabled: isProductionLikeBuild },
    tests: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
    hinting: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('narwin-pack')
          }
        ]
      }
    }
  });

  return app.toTree();
};
