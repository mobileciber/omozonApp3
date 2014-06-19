define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeDetailsTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeDetailsTemplate){

	window.StoreDetailsView = BaseView.extend({

		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Store Details", "visible", "visible");
			this.subviews.footerView = new FooterView("Store Details");
		},
		
		template:_.template(storeDetailsTemplate),    

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return StoreDetailsView;
  
});
