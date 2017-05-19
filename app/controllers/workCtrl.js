angular
  .module('app')
  .controller('workCtrl', ['$scope', function($scope) {
    $scope.title = "Work";
    $scope.items = ['elizabeth','work','mission','news','contact',];
    $scope.selectedValue = 'work';

  
  }]);