(function () {

  angular.module('BigList')
  .controller('BigListController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {


    $scope.addList = function () {
      console.log('edit.');
      $http.post(appUrl, $scope.post).success( function (data) {
        $location.path('/cities');
      });

    };

    

  }]);


}());

