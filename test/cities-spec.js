// uses https://github.com/kensho/ng-describe
// and lazy assertion library
// https://github.com/bahmutov/lazy-ass
ngDescribe({
  name: 'CitiesApp controller - ng-repeat',
  module: 'CitiesApp',
  controller: 'CitiesController',
  only: false,
  tests: function (deps) {
    it('has list of cities on the scope', function () {
      var scope = deps.CitiesController;
      la(scope, 'missing scope');
      la(Array.isArray(scope.cities),
        'missing cities', scope.cities);
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

ngDescribe({
  name: 'CitiesApp controller - ng-class',
  module: 'CitiesApp',
  controller: 'CitiesController',
  only: false,
  tests: function (deps) {
    it('has getClasses()', function () {
      var scope = deps.CitiesController;
      la(typeof scope.getClasses === 'function',
        'missing getClasses() method on scope');
    });

    it('expects 1 argument to getClasses()', function () {
      var scope = deps.CitiesController;
      la(scope.getClasses.length === 1,
        'getClasses() should only expect a city object');
    });

    it('returns correct class object for city rated #1', function () {
      var scope = deps.CitiesController;
      var classes = scope.getClasses({ rating: 1 });
      la(classes['label-success'], 'expected label success');
      la(!classes['label-info'], 'not expected label info');
    });

    it('returns correct class object for city NOT rated #1', function () {
      var scope = deps.CitiesController;
      var classes = scope.getClasses({ rating: 10 });
      la(!classes['label-success'], 'not expected label success');
      la(classes['label-info'], 'expected label info');
    });
  }
});

ngDescribe({
  name: 'CitiesApp controller - continents',
  module: 'CitiesApp',
  controller: 'CitiesController',
  only: false,
  tests: function (deps) {
    it('has continents', function () {
      var scope = deps.CitiesController;
      la(typeof scope.continents === 'object',
        'missing continents');
    });

    it('has europe continent', function () {
      var scope = deps.CitiesController;
      la(typeof scope.continents.europe === 'boolean',
        'missing europe', scope.continents);
      la(scope.continents.europe ===  true,
        'show europe by default', scope.continents);
    });

    it('has australia continent', function () {
      var scope = deps.CitiesController;
      la(typeof scope.continents.australia === 'boolean',
        'missing australia', scope.continents);
      la(scope.continents.australia ===  true,
        'show australia by default', scope.continents);
    });
  }
});

ngDescribe({
  name: 'CitiesApp controller - filtering',
  module: 'CitiesApp',
  controller: 'CitiesController',
  only: false,
  tests: function (deps) {
    it('has hidingAContinent()', function () {
      var scope = deps.CitiesController;
      la(typeof scope.hidingAContinent === 'function',
        'missing hidingAContinent method');
    });

    it('does not hide any continent by default', function () {
      var scope = deps.CitiesController;
      la(scope.hidingAContinent() === false,
        'not hiding any continent by default');
    });

    it('returns true is europe is hidden', function () {
      var scope = deps.CitiesController;
      scope.continents.europe = false;
      la(scope.hidingAContinent());
    });

    it('has resetContinents()', function () {
      var scope = deps.CitiesController;
      la(typeof scope.resetContinents === 'function',
        'missing hidingAContinent method');
    });

    it('sets all continents to visible when clicked', function () {
      var scope = deps.CitiesController;
      scope.continents.europe = false;
      la(scope.hidingAContinent());
      scope.resetContinents();
      la(!scope.hidingAContinent(), 'europe is visible again');
    });
  }
});

ngDescribe({
  name: 'CitiesApp controller - ng-repeat filter',
  module: 'CitiesApp',
  controller: 'CitiesController',
  only: false,
  tests: function (deps) {
    it('has continent property for each city', function () {
      var cities = deps.CitiesController.cities;
      la(Array.isArray(cities), 'expected cities list');
      cities.forEach(function (city) {
        la(typeof city.continent === 'string',
          'cannot find continent property in the city', city);
      });
    });

    it('has onVisibleContinent()', function () {
      var scope = deps.CitiesController;
      la(typeof scope.onVisibleContinent === 'function',
        'missing onVisibleContinent method');
    });

    it('expects single argument - just the city object', function () {
      var scope = deps.CitiesController;
      la(scope.onVisibleContinent.length === 1);
    });

    it('returns the current city visible flag based on the continent', function () {
      var scope = deps.CitiesController;
      var continents = scope.continents;
      la(continents.europe,
        'cannot find europe in the list of continents', continents);

      var fakeCity = { continent: 'europe' };
      la(scope.onVisibleContinent(fakeCity),
        'city in europe should be visible initially');

      continents.europe = false;
      la(!scope.onVisibleContinent(fakeCity),
        'europe is hidden, the city should be filtered out');
    });
  }
});
