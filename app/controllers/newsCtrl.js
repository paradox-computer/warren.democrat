angular
  .module('app')
  .controller('newsCtrl', ['$scope', function($scope) {
    $scope.title = "NEWS";
    $scope.items = ['elizabeth','work','mission','news','contact',];
    $scope.selectedValue = 'news';

  
  }]);