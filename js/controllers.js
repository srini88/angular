
var artistControllers = angular.module("artistControllers",[]);
artistControllers.controller("ListController", function myController ($scope, $http){
	//using http service - handle communication between http server and a client
	$http.get("js/data.json")
	.then(function(response){
		$scope.artists = response.data;
		$scope.artistOrder = 'name';   //by default setting artistOrder by name 
		$scope.direction = '';  //by default ascending
	});
});


// in this controller we need to get the route parameters the user clicked on

artistControllers.controller("DetailsController", function myController ($scope, $http, $routeParams){
	//using http service - handle communication between http server and a client
	$http.get("js/data.json")
	.then(function(response){
		$scope.artists = response.data;
		$scope.whichItem = $routeParams.itemId;
	});
});



