var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  
  
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
  };
  
  $scope.toUpper = function() {
    $scope.message = 'Hello ' + angular.uppercase($scope.first) +' '+ angular.uppercase($scope.last) + '!';
  };
  
  $scope.toLower = function() {
    $scope.message = 'Hello ' + angular.lowercase($scope.first) +' '+ angular.lowercase($scope.last) + '!';
  };
  
});