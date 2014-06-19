define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/myOmozon/myOmozonTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, myOmozonTemplate){

	window.MyOmozonView = BaseView.extend({
		
		initialize: function(){
			
			this.subviews.headerView = new HeaderView("My Omozon", "visible", "visible");
			this.subviews.footerView = new FooterView("My Omozon");
		},

	    template:_.template(myOmozonTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return MyOmozonView;
  
});
