angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var _id = $routeParams._id;
  console.log(_id);
  console.log($location);

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+_id
  }).then(function successCallback(succ) {
    vm.book = succ.data;
  }, function errorCallback(err) {
    console.log('error', err);
  });

  vm.editBook = function (book) {
    console.log(book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + _id,
      data: book
    }).then(function successCallback(json) {
      $location.path('/');
      console.log('successfully edited');
    }, function errorCallback(err) {
      console.log('There was an error deleting the data', err);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + _id,
      data: book
    }).then(function successCallback(json) {
      $location.path('/');
      console.log('successfully deleted');
    }, function errorCallback(err) {
      console.log('There was an error deleting the data', err);
    });
  };
}
