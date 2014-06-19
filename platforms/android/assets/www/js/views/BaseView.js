define([
  'jquery',
  'underscore',
  'backbone',
  'views/navi/HeaderView',
  'views/navi/FooterView'
], function($, _, Backbone, HeaderView, FooterView){
		
	window.BaseView = Backbone.View.extend({
    
		constructor: function() {
		    // Define the subviews object off of the prototype chain
		    this.subviews = {};

		    // Call the original constructor
		    Backbone.View.apply(this, arguments);
		  },
		  
		  createPage: function(template) {
			  this.$el.append(this.subviews.headerView.render().el);
			  this.$el.append(template);
			  this.$el.append(this.subviews.footerView.render().el);
		  }
		
	});

	return BaseView;
  
});

