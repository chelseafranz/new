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