define([
    'jquery',
    'underscore',
    'backbone',
    'models/store/StoreModel'
  ], function($, _, Backbone, StoreModel){
		var StoresCollection = Backbone.Collection.extend({
			url: omozonAppConfig.backendApiUrl + '/stores',
			model: StoreModel,
  	    
			initialize: function(){
				console.log("Stores collection initialize");
			}
  	  	});
  	 
	 return StoresCollection;
});
