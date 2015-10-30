/**
 * Created by Tejas on 10/30/2015.
 */
customersApp.controller('registerController',['$scope', '$http', '$location', function($scope, $http, $location){
    console.log("Im here");
    $scope.register= function(){
        console.log($scope.user);
    }
}]);