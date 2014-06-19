define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/user/passwdForgottenTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, passwdForgottenTemplate){

	window.PasswdForgottenView = BaseView.extend({
		
		initialize: function (){
			this.subviews.headerView = new HeaderView("Passwd Reset", "visible");
			this.subviews.footerView = new FooterView("Passwd Reset");
		},

	    template:_.template(passwdForgottenTemplate),
 
	    render:function (eventName) {
	    	this.createPage(this.template());
	        return this;
	    }
	});

return PasswdForgottenView;

});