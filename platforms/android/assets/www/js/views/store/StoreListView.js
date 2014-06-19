define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/store/storeTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, storeTemplate){

	window.StoreListView = BaseView.extend({

		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Store Liste", "visible", "visible");
			this.subviews.footerView = new FooterView("Store Liste");
		},
		
		template:_.template(storeTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return StoreListView;
  
});
