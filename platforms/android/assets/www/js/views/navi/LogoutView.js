define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/navi/logoutTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, logoutTemplate){

	window.LogoutView = BaseView.extend({
		
		initialize: function(){
					
			this.subviews.headerView = new HeaderView("Logout");
			this.subviews.footerView = new FooterView("Logout");
		},

	    template:_.template(logoutTemplate),

	    render:function (eventName) {
	    	this.createPage(this.template());
	        return this;
	    }
	});

  return LogoutView;
  
});
