define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/store/storeListItemTemplate.html',
  ''
], function($, _, Backbone, storeListItemTemplate){

	window.StoreListItemView = Backbone.View.extend({
		tagName: "li",
		className: "storeListItem bgPurple", 
		attributes: {
			"style": "background-image:linear-gradient(#552C87, #552C87);"
		},
		
		template: _.template(storeListItemTemplate),
		
		render: function(){
			console.log("StoreListItemView render");
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return StoreListItemView;

});
