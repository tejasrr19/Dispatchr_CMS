/**
 * Created by Tejas on 10/24/2015.
 */

// USER MODEL

var mongoose = require('mongoose'),
    enumRoles = ['customer', 'admin'];

var UserSchema = new mongoose.Schema({
	
	name: 	{ type:String }, //, required: true},
	
	username: { type: String }, //, required: true }, 

  password: { type: String, select: false }, //, required: true ,  }, 

	address: { 
 	  	street: { type: String }, 
 	  	city: { type: String }, 
	  	state: { type: String }, 
 	  	zipcode: { type: String } 
   	},

   	role: { type: String, enum: enumRoles, default: 'customer' },

   	orders: [ 
  		{ 
  			items: [ 
  				{ 
  					id: { type: mongoose.Schema.Types.ObjectId },
  					name: { type: String, required: true },
  					price: { type: Number, required: true },
  					quantity: { type: Number, required: true } 
  				}
  			], 

  			totalPrice: { type: Number },

  			date: { type: Date, default: Date.now }
  		} 
  	],

	created_at: {type:Date, default: Date.now}
});

mongoose.model('User',UserSchema,'user');







