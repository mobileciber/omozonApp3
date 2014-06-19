define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeOfferTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeOfferTemplate){
 
	window.StoreOffersView = BaseView.extend({
		
		initialize: function() {
			this.subviews.headerView = new HeaderView("Filial Angebote", "visible", "visible");
			this.subviews.footerView = new FooterView("Filial Angebote");
		},
	    
		template:_.template(storeOfferTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return StoreOffersView;
  
});
