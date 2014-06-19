// Filename: views/products/list
define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  // Pull in the Collection module from above,
  'models/products/ProductModel',
  'collections/products/ProductsCollection',
  'text!templates/products/productsListTemplate.html'

], function($, _, Backbone, BaseView, HeaderView, FooterView, ProductModel, ProductsCollection, productsListTemplate){
  
	window.ProductListView = BaseView.extend({
	  
	  	
	    el: $("#products-list"),
	
	    render: function(){
	      
	      var data = {
	        products: this.collection.models,
	        _: _
	      };
	
	      var compiledTemplate = _.template( productsListTemplate, data );
	      $("#products-list").html( compiledTemplate );
	    
	      return this;
	    }
  
  
  });
  return ProductListView;
});