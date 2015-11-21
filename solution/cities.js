// solution for Cities application
angular.module('CitiesApp', [])
  .controller('CitiesController', function ($scope) {
    $scope.cities = [{
      rating: 1,
      title: 'Florence, Italy',
      text: 'Though Rome is Italy’s much beloved capital and Milan has serious cosmopolitan clout,' +
        'Florence remains unrivaled in history, art, and architecture (its beauty and cuisine don’t hurt, ' +
        'either). In addition to being the birthplace of the Renaissance, the Firenze of recent years ' +
        'has had a modern makeover: study Tuscan classics with celebrity chef Arturo Dori at Desinare, ' +
        'one of the city’s hottest cooking school/design store hybrids, or take in modern art at ' +
        'La Strozzina, Florence’s center for contemporary culture. Wherever the day takes you, ' +
        'save room for a panino al lampredotto—this stewed tripe sandwich is a Florence must.'
    }, {
      rating: 2,
      title: 'Budapest, Hungary',
      text: 'With some of the best Art Nouveau architecture in Europe, scenic Budapest has ' +
        'no bad angles. Explore the Hungarian capital’s spa culture with thermal baths built ' +
        'in the 16th and 17th century, and make sure to pay a visit to the ornate New York ' +
        'Kávéház for coffee and a pastry. Walk the Széchenyi Chain Bridge at night over the ' +
        'Danube River for magnificent views, and eat a bowl of traditional gulyás at the ' +
        'three-level Central Market before turning in for the night.'
    }, {
      rating: 3,
      title: 'Vienna, Austria',
      text: 'Artistic, exquisite, and largely shaped by its musical and intellectual foundations, ' +
        'Austria’s capital and largest city is packed with culture. Make time to get a figurative ' +
        'taste of royalty at Schönbrunn, the Habsburgs’ former summer residence, and get an actual ' +
        'taste of Sachertorte, a chocolate cake that is one of the city’s culinary specialties. ' +
        'Just be sure to ask for it mit schlaag—with cream.'
    }, {
      rating: 4,
      title: 'Sydney, Australia',
      text: 'Australia’s biggest city is an ideal getaway no matter the season. Dine al fresco and ' +
        'head to Bondi, Manly, and Redleaf beaches in the summer (remember, that’s during our winter), ' +
        'and explore the city’s vibrant arts and culture calendar through Vivid Sydney come winter. ' +
        'Whatever the season, get spectacular views of the city from Sydney Tower’s glass viewing platform.'
    }];

    $scope.getClasses = function (city) {
      return {
        'label-success': city.rating === 1,
        'label-info': city.rating !== 1
      };
    };

    $scope.continents = {
      europe: true,
      americas: true,
      asia: true,
      africa: true,
      australia: true
    };

    $scope.hidingAContinent = function () {
      var continents = $scope.continents;
      return Object.keys(continents).some(function (name) {
        return !continents[name];
      });
    };
  });
