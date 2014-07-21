define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var StoreModel = Backbone.Model.extend({
	  	// use collection.url instead!
		defaults: {
			name: '',
			openingTimes: ''
		},
		initialize: function(){
			console.log("Store model initialize");
		}
  });

  return StoreModel;

});
