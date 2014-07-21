define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeTemplate.html',
  'collections/Stores',
  'views/store/StoresCollectionView'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeTemplate, StoresCollection, StoresCollectionView){

	window.StoresView = BaseView.extend({
		
		/*
		initialize: function() {
			this.subviews.headerView = new HeaderView("Stores", "visible", "visible");
			this.subviews.footerView = new FooterView("Stores");
		},

		template:_.template(storeTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    },
	    */
		
		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Stores", "visible", "visible");
			this.subviews.footerView = new FooterView("Stores");
			
			
			//Stores = new StoresCollection([{name: 'store 1', openingTimes: 'mo-fr'}, {name: 'store 2', openingTimes: 'sa-su'}]);
			Stores = new StoresCollection({});
			// this can be refactored to make it reusable
			var sessionUser = $.parseJSON($.session.get('userdata'));
			Stores.credentials = function(){
				return {
					username: sessionUser.username,
	    			password: sessionUser.password
				};	
	    	};
//			this.listenTo(Stores, 'change', this.updateStoresList);
//			this.listenTo(Stores, 'reset', this.updateStoresList);
			console.log("StoresView initialize");
			
		},
		
		template:_.template(storeTemplate),

		
	    updateStoresList: function(){
			console.log("updateStoresList");
			var storesCollectionView = new StoresCollectionView({collection: Stores});
			$(this.el).find('#stores-list').html(storesCollectionView.render().el).trigger('create');
		},
		
	    
	    render:function (eventName) {
    	 	var self = this;
	    	Stores.fetch().done(function(){
	    		self.updateStoresList();
	            return self;
	    	});
	    	//$(self.el).html(self.template());
	    	this.createPage(this.template());
	        return this;
	    }
	});

  return StoresView;
  
});
