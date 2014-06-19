define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeTemplate){

	window.StoresCollectionView = Backbone.View.extend({
		tagName: "ul",
	
		attributes: { 
			"data-role": "listview",
			"data-inset": true
		},
		
		render: function(){
			console.log("StoresCollectionView render");
			this.collection.each(function(store){
				var storeView = new StoreView({ model: store});
				var elHelp = storeView.render().el;
				this.$el.append(elHelp);
			}, this);
			return this;
		}
	});

return StoresCollectionView;

});
