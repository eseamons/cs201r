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

function mainCtrl ($scope,$http, reportFetcher) {

  $scope.students = [];
  $scope.show = false;
  $scope.show_full = false;
  $scope.showModal = false;
  var editing = -1;
  
    
  $scope.data = {};
  $scope.data.studName = '';
  $scope.data.studAge = '';
  $scope.data.studGender = '';
  $scope.data.studGpa = '';
  $scope.data.studMajor = '';
  $scope.data.studClassStanding = '';
  $scope.data.options =
     [
       {value: 'Freshman', name: 'Freshman'},
       {value: 'Sophomore', name: 'Sophomore'},
       {value: 'Junior', name: 'Junior'},
       {value: 'Senior', name: 'Senior'}
     ];
  
    $scope.view = function(){
        reportFetcher.get()
        .then(function (data) {
          $scope.students = data;
          $scope.show = true;
        });
    };
    
    
    
    $scope.add_student = function(){
        editing = -1;
        $('.modal-title').text('Add New Student');
	$scope.data.studName = '';
         $scope.data.studAge = '';
         $scope.data.studGender = '';
         $scope.data.studGpa = '';
         $scope.data.studMajor = '';
         $scope.data.studClassStanding = '';
        $scope.showModal = true;
        
    };
    
    $scope.delete_student = function(stud) {
                                   
    var post_data = JSON.stringify($scope.students[stud]);
	   var res = $http.post('/report-delete', post_data);
           res.success(function() {
              reportFetcher.get()
        .then(function (data) {
          $scope.students = data;
          $scope.show = true;
        });



       });



    };  


    $scope.edit_record = function(stud) {
        editing = stud;
        var student = $scope.students[stud];
	$scope.data._id = student._id;
        $scope.data.studName = student.name;
        $scope.data.studAge = student.age;
        $scope.data.studGender = student.gender;
        $scope.data.studMajor = student.major;
        $scope.data.studGpa = student.gpa;
        $scope.data.studClassStanding = student.class_standing;
        $('.modal-title').text('Edit Record for '+ student.name);
        $scope.showModal = true;
    };
    $scope.submitStudent = function() {
        $scope.showModal = false;
        
        
        
        if(editing == -1) {
	   var post_data = JSON.stringify($scope.data);
	   var res = $http.post('/report-add', post_data);
           res.success(function() {
              reportFetcher.get()
        .then(function (data) {
          $scope.students = data;
          $scope.show = true;
        });



       });



      	}
        else {


               var post_update = JSON.stringify($scope.data);
	   var res = $http.post('/report-update', post_update);
           res.success(function() {
              reportFetcher.get()
        .then(function (data) {
          $scope.students = data;
          $scope.show = true;
        });

       });
/*
           $scope.students[editing].name = $scope.data.studName;
           $scope.students[editing].age = $scope.data.studAge;
           $scope.students[editing].gender = $scope.data.studGender;
           $scope.students[editing].major = $scope.data.studMajor;
           $scope.students[editing].gpa = $scope.data.studGpa;
           $scope.students[editing].class_standing = $scope.data.studClassStanding;
 */        
        }
        
        
         $scope.data.studName = '';
         $scope.data.studAge = '';
         $scope.data.studGender = '';
         $scope.data.studGpa = '';
         $scope.data.studMajor = '';
         $scope.data.studClassStanding = '';
        
    };
    
    
    
}



