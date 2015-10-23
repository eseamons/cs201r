var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = "";

    $scope.todoAdd = function() {
        $scope.todoList.push(
		{
			todoText:$scope.todoName + ', ' + $scope.todoFather + ', ' + $scope.todoMother, 
			done:false
		});
        $scope.todoName = "";
		$scope.todoFather = "";
		$scope.todoMother = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
