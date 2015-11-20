module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-mocks.js',
      '../node_modules/lazy-ass/index.js',
      '../node_modules/ng-describe/dist/ng-describe.js',
      '../cities.js',
      'cities-spec.js'
    ],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['spec']
  });
};
