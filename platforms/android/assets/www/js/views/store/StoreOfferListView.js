define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeOfferTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeOfferTemplate){
 
	window.StoreOfferListView = BaseView.extend({
		
		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Store Offer Liste", "visible", "visible");
			this.subviews.footerView = new FooterView("Store Offer Liste");
		},

	    template:_.template(storeOfferTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return StoreOfferListView;
  
});
