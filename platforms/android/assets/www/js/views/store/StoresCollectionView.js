define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'views/store/StoreListItemView'
], function($, _, Backbone, BaseView, HeaderView, FooterView, StoreListItemView){

	window.StoresCollectionView = Backbone.View.extend({
		tagName: "ul",
	
		attributes: { 
			"data-role": "listview",
			"data-inset": true
		},
		
		render: function(){
			console.log("StoresCollectionView render");
			this.collection.each(function(store){
				var storeView = new StoreListItemView({ model: store});
				var elHelp = storeView.render().el;
				this.$el.append(elHelp);
			}, this);
			return this;
		}
	});

return StoresCollectionView;

});
