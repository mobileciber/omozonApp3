define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/onlineshopTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, onlineshopTemplate){

	window.OnlineshopView = BaseView.extend({

		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Onlineshop", "visible", "visible");
			this.subviews.footerView = new FooterView("Onlineshop");
		},
		
	    template:_.template(onlineshopTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return OnlineshopView;
  
});
