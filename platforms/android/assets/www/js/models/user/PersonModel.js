define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	
    var PersonModel = Backbone.Model.extend({
    	defaults: {
    		name: 'Fetus',
            age: 0,
            child: ''
        },
        initialize: function(){
        	 alert("Welcome to this world");
        }
   });

   return PersonModel;
});