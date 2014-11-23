(function  () {

	var input;

	angular.module('BigList', ['ngRoute'])
	.constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/cities'
 			 })
		.config (function($routeProvider){
	
		$routeProvider.when('/', {
			controller: 'BigListController',
			templateUrl: 'templates/add.html'
		});

		$routeProvider.when('/cities', {
			controller:'CityController',
			templateUrl: 'templates/sidebar.html'
		});

		$routeProvider.when('/city/:id',{
			controller: 'OneController',
			templateUrl:'templates/one.html'
		})
		
		});
	}());
