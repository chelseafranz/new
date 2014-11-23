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

(function () {

  angular.module('BigList')
  .controller('BigListController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {


    $scope.addList = function () {
      console.log('edit');
      $http.post(appUrl, $scope.post).success( function (data) {
        $location.path('/cities');
      });

    };

    

  }]);


}());


(function () {

  angular.module('BigList')
  .controller('CityController', ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

      $http.get(appUrl).success(function(data){
        $scope.post= data;
        console.log(data)
      }).error(function(data){
        alert('error');
      })

 }]);
}());
(function () {
  angular.module('BigList').
  controller('OneController', ['$scope', '$http', 'appUrl', function($scope, $http, appUrl){

  	$scope.update= function(){
  		$http.post(appUrl, $scope.post).success( function (data) {
        $location.path('/cities');
      });
  	}
  }])
}());