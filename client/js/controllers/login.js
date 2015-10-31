/**
 * Created by Tejas on 10/30/2015.
 */
customersApp.controller('loginController', ['$http','$scope', '$location',
    function ($http,$scope, $location) {

        console.log('loginController')
        $scope.login = function(username, password){
            console.log(username, password);
            $http.post('/customers/login', { username: username, password: password }).then(function(data) {
                console.log('logged in:', data);
                $location.path('/dashboard');
            });
        }
}]);