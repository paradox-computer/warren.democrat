angular
  .module('app')
  .controller('missionCtrl', ['$scope', function($scope) {
  	$scope.title = "Mission";
    $scope.items = ['elizabeth','work','mission','news','contact',];
    $scope.selectedValue = 'mission';
  }]);