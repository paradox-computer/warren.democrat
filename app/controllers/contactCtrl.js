angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
    $scope.items = ['elizabeth','work','mission','news','contact',];
    $scope.selectedValue = 'contact';

  
  }]);