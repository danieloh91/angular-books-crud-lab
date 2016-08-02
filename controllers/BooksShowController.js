angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var _id = $routeParams._id;
  console.log(_id);

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+_id
  }).then(function successCallback(succ) {
    vm.book = succ.data;
    console.log(vm.book);
  }, function errorCallback(err) {
    console.log('error', err);
  });
}
