module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/lazy-ass/index.js',
      '../node_modules/ng-describe/dist/ng-describe.js',
      'cities.js',
      '../test/cities-spec.js'
    ],
    port: 9876,
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['spec']
  });
};
