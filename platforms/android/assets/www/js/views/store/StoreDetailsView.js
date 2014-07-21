define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeDetailsTemplate.html',
  'text!templates/store/storeMapsInfoWindowTemplate.html',
  'omozon-maps'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeDetailsTemplate, storeMapsInfoWindowTemplate, OmozonMaps){

	window.StoreDetailsView = BaseView.extend({
		
		initialize: function(options){
			
			this.subviews.headerView = new HeaderView("Store Details", "visible", "visible");
			this.subviews.footerView = new FooterView("Store Details");
			this.options = options || {};
			this.storeData = Stores.get(this.options.storeId).toJSON();
		},
		
		events: {
			"click #get-directions": "showDirectionsToCurrentStore",
			"click #hide-directions": "showCurrentStorePosition"
		}, 

		showDirectionsToCurrentStore: function(){
	  		var destination = new google.maps.LatLng(this.storeData.latitude, this.storeData.longitude);
			getDirectionsFromCurrentLocation(destination);
			$('#get-directions').parent().hide();
			$('#hide-directions').parent().fadeIn(500);
			return this;
		},
		
		showCurrentStorePosition: function(){
	        var markerText = _.template(storeMapsInfoWindowTemplate, this.storeData); 	
			showMap($(this.el).find('#map-canvas'), this.storeData.latitude, this.storeData.longitude, markerText);
			$('#hide-directions').parent().hide();
			$('#get-directions').parent().fadeIn(500);
			return this;
		},
		
	    render:function (eventName) {
	    	console.log('Rendering StoreDetailsView for storeId: ' + this.options.storeId);
	        var storeTemplate = _.template(storeDetailsTemplate, this.storeData);
			this.createPage(storeTemplate);

			this.showCurrentStorePosition();
			
	        return this;
	    }
	});

  return StoreDetailsView;
  
});
