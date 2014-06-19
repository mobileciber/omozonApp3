define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/ContributorModel'
], function($, _, Backbone, ContributorModel){
	var ContributorsCollection = Backbone.Collection.extend({
	    model: ContributorModel,
	    
	    initialize: function(){

	      //this.add([user0, user1, user2, user3, user4]);

	    }

	  });
	 
	  return ContributorsCollection;
	});
