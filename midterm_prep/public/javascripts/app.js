angular.module('myDessertApp', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){

    $scope.getAll = function() {
      return $http.get('/desserts').success(function(data){
        angular.copy(data, $scope.desserts);
      });
    };

    $scope.test = 'Hello world!';
    $scope.desserts = [
      {contestant:'Eric',name:'Apple Crisp', upvotes:5},
      {contestant:'Ale',name:'Pumpkin Pie', upvotes:1},
      {contestant:'Amber',name:'Pizookie', upvotes:1},
      {contestant:'Alyssa',name:'Cookies and Cream Milkshake', upvotes:1},
      {contestant:'Sara',name:'Brownies', upvotes:2}
    ];
    $scope.contestantName='';
    $scope.dessertName='';

     $scope.addDessert = function() {
      $scope.desserts.push({contestant:$scope.contestantName,name:$scope.dessertName,upvotes:0});
      $scope.contestantName='';
      $scope.dessertName='';
    };
 
    $scope.incrementUpvotes = function(dessert) {
      dessert.upvotes += 1;
    };

    angular.element(document).ready($scope.getAll());

  }
]);