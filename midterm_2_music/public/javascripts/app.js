angular.module('comment', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){

    $scope.songs = [];

    /*
    $scope.songs.push(
           {title:'Sunshine',album:'Greatest Hits',artist:'Simon and Garfunkle',genre:'Pop',url:'http://ecx.images-amazon.com/images/I/51CrP3qyEGL._SY355_.jpg',upvotes:0}
    );
    */


    $scope.getAll = function() {
       return $http.get('/songs').success(function(data){
         angular.copy(data, $scope.songs);
       });
    };

    $scope.addSong = function() {
        $scope.create({
          title: $scope.songTitle,
          album: $scope.songAlbum,
          artist: $scope.songArtist,
          genre: $scope.songGenre,
          url: $scope.songCover,
          upvotes: 0,
        });
        $scope.songTitle = '';
        $scope.songAlbum = '';
        $scope.songArtist = '';
        $scope.songGenre = '';
        $scope.songCover = ''; 
    };
   
    $scope.create = function(song) {
        return $http.post('/songs', song).success(function(data){
          $scope.songs.push(data);
        });
    };


    $scope.upvote = function(song) {

      return $http.put('/songs/' + song._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          song.upvotes += 1;
      });
    };

    angular.element(document).ready($scope.getAll());






/*
    $scope.getAll = function() {
      return $http.get('/comments').success(function(data){
        angular.copy(data, $scope.comments);
      });
      $scope.formContent === '';
    };
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

*/


  }
]);