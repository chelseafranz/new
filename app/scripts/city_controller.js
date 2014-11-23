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