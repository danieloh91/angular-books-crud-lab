angular
  .module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  vm.newBook = {};

  vm.createBook = function () {
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books',
      data: vm.newBook
    }).then(function successCallback(succ) {
      console.log(succ);
      vm.books.push(succ.data);
      console.log(vm.bookForm);
      // vm.bookForm.$setPristine();
      // vm.bookForm.$setUntouched();
      // console.log(response.data);
    }, function errorCallback(err) {
      console.log('There was an error posting the data', err);
    });
  };

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(succ) {
    vm.books = succ.data.books;
  }, function errorCallback(err) {
    console.log('error', err);
  });
}
