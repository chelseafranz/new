(function  () {

	var input;

	angular.module('BigList', ['ngRoute'])
	.constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/cities'
 			 })
		.config (function($routeProvider){
	
		$routeProvider.when('/', {
			controller: 'BigListController',
			templateUrl: 'add.html'
		});

		$routeProvider.when('/cities', {
			controller:'CityController',
			templateUrl: 'sidebar.html'
		});

		$routeProvider.when('/city/:id',{
			controller: 'OneController',
			templateUrl:'one.html'
		})
		
		});
	}());
