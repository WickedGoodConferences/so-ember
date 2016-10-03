/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'so-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' https://static.dockyard.com *.google-analytics.com https://platform.twitter.com https://dockyard.us9.list-manage.com https://s3-eu-west-1.amazonaws.com https://js.tito.io https://ti.to/",
      'font-src': "'self' https://asset.dockyard.com https://dockyard.com",
      'connect-src': "'self' *.google-analytics.com https://dockyard.us9.list-manage.com",
      'img-src': "'self' *.google-analytics.com https://i.imgur.com http://i.imgur.com https://s3-eu-west-1.amazonaws.com",
      'style-src': "'self' 'unsafe-inline' https://static.dockyard.com https://s3-eu-west-1.amazonaws.com https://css.tito.io http://css.tito.io",
      'media-src': "'self'",
      'frame-src': "https://heather215.typeform.com https://ti.to/"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
