/**
 * Created by Tejas on 10/30/2015.
 */

customersApp.factory('registerFactory', function($http){


	
	var factory = {};

    factory.register = function(newUser,callback){
        // add created_date to newCustomer object


        $http.post('/customers/register',newUser).success(function(output){
            console.log('factory data added:');
            console.log(output);
            callback(output);
        });
    };
    return factory;
});