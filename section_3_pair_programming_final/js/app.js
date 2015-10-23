var myApp = angular.module('myApp', []);
myApp.controller('FirstController', function($scope, $compile, $filter) {
	$scope.todaysDate = $filter('date')(new Date(), 'MM/dd/yyyy');

	var rows = "<tr><th scope='row'>12am</th><td id='12am' class='timeSlot' ng-click='toggleModal($event)'></td></tr>";
	for(i = 1; i < 12; i++) {
		rows += "<tr><th scope='row'>" + i.toString() + "am</th><td id='" + i + "am' class='timeSlot' ng-click='toggleModal($event)'></td></tr>";
	}
	rows += "<tr><th scope='row'>12pm</th><td id='12pm' class='timeSlot' ng-click='toggleModal($event)'></td></tr>";
	for(i = 1; i < 12; i++) {
		rows += "<tr><th scope='row'>" + i.toString() + "pm</th><td id='" + i + "pm' class='timeSlot' ng-click='toggleModal($event)'></td></tr>";
	}
	var $rows = $(rows).appendTo('.formData');
	$compile($rows)($scope);
	
    $scope.data = {};
    $scope.data.eventTitle = '';
    $scope.data.eventDescription = '';
    $scope.data.eventDate = undefined;
	$scope.data.eventTime = undefined;
    
    $scope.showModal = false;
    $scope.toggleModal = function(event){
        $scope.showModal = true;
		$scope.data.eventTime = event.target.id;
		$scope.data.eventDate = $filter('date')(new Date(),'MM/dd/yyyy');
    };
    
    
    
//   $scope.visible = false;
  
  $scope.events = [];

  
  $scope.createEvent = function() {
    $scope.showModal = false;
    // $scope.visible = false;
    // alert($scope.data.eventTitle);
	var eventText = '<b>Title: </b>' + $scope.data.eventTitle + "<br>" + '<b>Description: </b>' + $scope.data.eventDescription;
	$("#" + $scope.data.eventTime).append("<div class='event'>" + eventText + "</div>");
    
    $scope.data.eventTitle = '';
    $scope.data.eventDescription = '';
    $scope.data.eventDate = undefined;
  };
  
});