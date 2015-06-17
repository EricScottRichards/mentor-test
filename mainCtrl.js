var app = angular.module('testApp');
app.controller('mainCtrl', function($scope, mainService){

	$scope.people = mainService.getData();

	$scope.ageSum = mainService.ageSum();

})