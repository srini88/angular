var myApp = angular.module("myApp",[]);
myApp.controller("myController", function myController ($scope, $http){
	//using http service - handle communication between http server and a client
	$http.get("js/data.json")
	.then(function(response){
		$scope.artists = response.data;
	});
});