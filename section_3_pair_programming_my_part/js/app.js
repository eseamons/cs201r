var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    
    $scope.data = {};
    $scope.data.eventTitle = '';
    $scope.data.eventDescription = '';
    $scope.data.eventDate = undefined;
    
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = true;
    };
    
    
    
//   $scope.visible = false;
  
  $scope.events = [];
//   $scope.eventDate = $filter('date')(new Date(),'MM/dd/yyyy');
  
  $scope.createEvent = function() {
    $scope.showModal = false;
    // $scope.visible = false;
    // alert($scope.data.eventTitle);
    $scope.events.push({title:$scope.data.eventTitle, description:$scope.data.eventDescription, date:$scope.data.eventDate, show:false});
    
    $scope.data.eventTitle = '';
    $scope.data.eventDescription = '';
    $scope.data.eventDate = undefined;
  };
  
});