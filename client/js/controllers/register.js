/**
 * Created by Tejas on 10/30/2015.
 */

customersApp.controller('registerController', function($scope, $http, $location, registerFactory) {

    $scope.register = function () {
        console.log($scope.user);

        if($scope.user.name===null|| $scope.user.password ===null|| $scope.user.username===null)
        {
            alert("Enter the First Name");
        }
        else {
            $scope.register = function () {
                console.log($scope.user);
                registerFactory.register($scope.user, function (data) {
                    console.log('new data in view controller', data);
                    if(data.bSuccess){
                        $location.path('/dashboard');
                    }
                })
            }
    	}
    }

});

