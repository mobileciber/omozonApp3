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
 
	window.ProductsView = BaseView.extend({
	    el: $("#page"),
	    render: function(){
	      $('.menu li').removeClass('active'); 
	      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
	      this.$el.html(productsTemplate);

	      var product0 = new ProductModel({title: 'Cross Domain', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/cross-domain'});
	      var product1 = new ProductModel({title:'Infinite Scroll', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/infinite-scroll'});
	      var product2 = new ProductModel({title:'Modular Backbone', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone'});
	      var product3 = new ProductModel({title:'Node MongoDB Mongoose Restify', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/nodejs-mongodb-mongoose-restify'});
	      var product4 = new ProductModel({title:'Todo App', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/todo-app'});

	      var aProducts = [product0,
	                      product1,
	                      product2,
	                      product3,
	                      product4];

	      var productsCollection = new ProductsCollection(aProducts);
	      window.ProductsListView = new ProductsListView({ collection: productsCollection});
	      
	      productsListView.render();

	      // add the navibar
	      var HeaderView = new HeaderView();
	      HeaderView.render();

	    }
	  });

	  return ProductsView;
	});