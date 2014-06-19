define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeTemplate){

	window.StoresView = BaseView.extend({
		
		initialize: function() {
			this.subviews.headerView = new HeaderView("Stores", "visible", "visible");
			this.subviews.footerView = new FooterView("Stores");
		},

		template:_.template(storeTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return StoresView;
  
});
