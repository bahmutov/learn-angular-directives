// uses https://github.com/kensho/ng-describe
// and lazy assertion library
// https://github.com/bahmutov/lazy-ass
ngDescribe({
  name: 'CitiesApp controller',
  module: 'CitiesApp',
  controller: 'CitiesController',
  tests: function (deps) {
    it('has list of cities on the scope', function () {
      var scope = deps.CitiesController;
      la(scope, 'missing scope');
      la(Array.isArray(scope.cities),
        'mising cities', scope.cities);
    });
  }
});
