/**
 * Created by Tejas on 10/24/2015.
 */
// SERVER CONTROLLER

// require mongoose
var mongoose = require('mongoose');

// require customer model
var User = mongoose.model('User');

// set database functions (runs as immediate function)
module.exports = (function(){
	return {
		show: function(request,response){
			console.log(request.body);
			// run find all query, then execute anonymous call back function
			// (callback let's server controller know that its job is done, so it can callback its caller)
			User.find({}, function(error,results){
				if(error) {
					console.log('database error occurred',error);
				}
				else {
					// log db results
					console.log('show all in server controller',results);
					// send back database data as json
					response.json(results);
				}
			})
		},
		add: function(request,response){
			console.log('user server controller',request.body);
			var newUser = new User(request.body);
			// run save query then execute anonymous call back function
			newUser.save(function(error){
				if(error){
					console.log('database error occurred during insert',error);
					response.json('error');
				}
				else{
					console.log('added  in server controller',newUser);
					response.json(newUser);
				}
			})
		},
		delete: function(request,response){ 
			User.findByIdAndRemove(request.body._id, function(error,results){
				if(error){
					console.log('database error occurred during delete',error);
					response.json('error');
				}
				else {
					console.log('deleted in server controller:',results);
					response.json(results);
				}
			})
		},

		register: function(request,response) {
			console.log('register:', request.body);

			var user = new User(request.body)
			user.save(function(err, newUser) {
				if(err) {
					console.log('Error:', err);
					return response.json({ bSuccess: false });
				}

				response.json({ bSuccess: true, user: newUser});

			});
		},

		edit: function(request,response){
			console.log("Hello I am:"+request.body._id);
			User.findByIdAndUpdate(request.body._id, {$set:{
					name:request.body.name,
					address:request.body.address}},
				function(error,results){
					if(error){
						console.log('customer.edit() error (in server controller)',error);
						response.json(error);
					}
					else
					{
						console.log('customer.edit() results (in server controller)',results);
						response.json('results');
					}
				})
		}
	}
})();