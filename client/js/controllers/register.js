/**
 * Created by Tejas on 10/30/2015.
 */
customersApp.controller('registerController',function($scope, $http, $location){
    console.log("Im here");
    $scope.register= function(){
        console.log($scope.user);
    }
});