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

    it('has 4 cities in the list', function () {
      var scope = deps.CitiesController;
      la(scope.cities.length === 4,
        'wrong number of cities', scope.cities);
    });

    it('has correct properties for each city', function () {
      var scope = deps.CitiesController;
      scope.cities.every(function (city) {
        la(city.rating, 'city does not have rating', city);
        la(city.title, 'city does not have title', city);
        la(city.text, 'city does not have text', city);
      });
    });
  }
});
