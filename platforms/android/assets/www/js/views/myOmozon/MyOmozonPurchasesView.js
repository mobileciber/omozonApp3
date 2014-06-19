define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/myOmozon/myOmozonTemplate.html'
], function($, _, Backbone, BaseView,  HeaderView, FooterView, myOmozonTemplate){

	window.MyOmozonPurchasesView = BaseView.extend({

	    template:_.template(myOmozonTemplate),

	    render:function (eventName) {
	        this.createPage(this.template());
	        return this;
	    }
	});

  return MyOmozonPurchasesView;
  
});
