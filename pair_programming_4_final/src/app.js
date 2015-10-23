var app = window.angular.module('app', [])

app.factory('recipeBook', recipeBook)
app.controller('mainCtrl', mainCtrl)

function recipeBook ($http) {

  var API_ROOT = 'pokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, recipeBook) {

  $scope.recipe = []

  recipeBook.get()
    .then(function (data) {
      $scope.recipe = data
    })
}
