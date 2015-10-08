var myApp = angular.module('myApp', []);
myApp.controller('FirstController', function($scope, $compile) {

	var rows = "<tr><th scope='row'>12am</th><td class='timeSlot' ng-click='toggleModal()'></td></tr>";
	for(i = 1; i < 12; i++) {
		rows += "<tr><th scope='row'>" + i.toString() + "am</th><td class='timeSlot' ng-click='toggleModal()'></td></tr>";
	}
	rows += "<tr><th scope='row'>12pm</th><td class='timeSlot' ng-click='toggleModal()'></td></tr>";
	for(i = 1; i < 12; i++) {
		rows += "<tr><th scope='row'>" + i.toString() + "pm</th><td class='timeSlot' ng-click='toggleModal()'></td></tr>";
	}
	var $rows = $(rows).appendTo('.formData');
	$compile($rows)($scope);
	
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
    //$scope.events.push({title:$scope.data.eventTitle, description:$scope.data.eventDescription, date:$scope.data.eventDate, show:false});
    
    //$scope.data.eventTitle = '';
    //$scope.data.eventDescription = '';
    //$scope.data.eventDate = undefined;
  };
  
});