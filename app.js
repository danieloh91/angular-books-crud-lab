angular.module('libraryApp', ['ngRoute'])
       .config(config);
      //  .controller('BooksIndexController', BooksIndexController)
      //  .controller('BooksShowController', BooksShowController);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books/index.html'/* Include the path to the index template */,
      controller: 'BooksIndexController'/* Which controller do you want the main page to use */,
      controllerAs: 'allBooksCtrl'/* What will you call the controller in the html? */
    })
    /* Include the additional route here! */
    .when('/books/:_id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowController',
      controllerAs: 'bookCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
