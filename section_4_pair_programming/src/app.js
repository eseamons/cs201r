var app = window.angular.module('app', []);

app.factory('reportFetcher', reportFetcher);
app.controller('mainCtrl', mainCtrl);

function reportFetcher ($http) {

  var API_ROOT = 'report';
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data;
        });
    }
  };

}

function mainCtrl ($scope, reportFetcher) {

  $scope.students = [];
    
    
    $scope.view = function(){
        reportFetcher.get()
        .then(function (data) {
          alert(JSON.stringify(data));
        });
    };
    
}
