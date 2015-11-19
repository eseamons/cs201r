angular.module('comment', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){

  $scope.getAll = function() {
    return $http.get('/comments').success(function(data){
      angular.copy(data, $scope.comments);
    });
    $scope.formContent === '';
  };
    $scope.comments = [];
    $scope.test = 'Hello world!';

    $scope.addComment = function() {
        if($scope.formContent === '') { return; }
        console.log("In addComment with "+$scope.formContent);
        $scope.create({
          title: $scope.formContent,
          upvotes: 0,
        });
        $scope.formContent = '';    
    };

    $scope.create = function(comment) {
      return $http.post('/comments', comment).success(function(data){
        $scope.comments.push(data);
      });
    };
    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes += 1;
        });
    };


	angular.element(document).ready($scope.getAll());
  }
]);