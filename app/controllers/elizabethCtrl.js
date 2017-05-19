angular
  .module('app')
  .controller('elizabethCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['elizabeth','work','mission','news','contact',];
    $scope.selectedValue = 'elizabeths';

  
  }]);