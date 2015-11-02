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
        $scope.showModal = true;
        
    };
    
    
    $scope.edit_record = function(stud) {
        editing = stud;
        var student = $scope.students[stud];
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
            $scope.students.push({name:$scope.data.studName, age:$scope.data.studAge, gender:$scope.data.studGender, gpa:$scope.data.studGpa, major:$scope.data.studMajor,class_standing:$scope.data.studClassStanding});
        }
        else {
           $scope.students[editing].name = $scope.data.studName;
           $scope.students[editing].age = $scope.data.studAge;
           
           $scope.students[editing].gender = $scope.data.studGender;
           $scope.students[editing].major = $scope.data.studMajor;
           $scope.students[editing].gpa = $scope.data.studGpa;
           $scope.students[editing].class_standing = $scope.data.studClassStanding;
           
        }
        
        
         $scope.data.studName = '';
         $scope.data.studAge = '';
         $scope.data.studGender = '';
         $scope.data.studGpa = '';
         $scope.data.studMajor = '';
         $scope.data.studClassStanding = '';
        
    };
    
    
    
}



