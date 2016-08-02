angular
  .module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(succ) {
    vm.books = succ.data.books;
  }, function errorCallback(err) {
    console.log('error', err);
  });
}
