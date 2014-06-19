define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'models/products/ProductModel',
  'collections/products/ProductsCollection',
  'views/products/ProductsListView',
  'text!templates/products/productsTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, ProductModel, ProductsCollection, ProductsListView, productsTemplate){
 
	window.ProductDetailsQRView = BaseView.extend({
		
		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Login");
			this.subviews.footerView = new FooterView("Login");
		},


		template:_.template(productsTemplate),

	    render:function (eventName) {
	    	this.createPage(this.template());
	        return this;
	    }
	});

	  return ProductDetailsQRView;
	});