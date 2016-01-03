//main file that takes care of controllers
var myApp = angular.module("myApp",[
	'ngRoute',
	'artistControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl:'partials/list.html',
		controller:'ListController'
	}).
	otherwise({   //by default going here
		redirectTo:'/list'
	});
	//with these changes when you refresh the homepage it goes to 
	//http://localhost/rejuvenate/angular/angular/index.html#/list
}]);