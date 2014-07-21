// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/navi/FooterView',
  'views/navi/HeaderView',
  'views/navi/LoginView',
  'views/navi/LogoutView',
  'views/user/RegisterView',
  'views/user/PasswdForgottenView',
  'views/myOmozon/MyOmozonCoinsView',
  'views/myOmozon/MyOmozonProfileView',
  'views/myOmozon/MyOmozonPurchasesView',
  'views/myOmozon/MyOmozonStoresView',
  'views/myOmozon/MyOmozonView',
  'views/myOmozon/MyOmozonVoucherView',
  'views/myOmozon/MyOmozonWalletView',
  'views/myOmozon/MyOmozonWishlistView',
  'views/products/ProductDetailsQRView',
  'views/products/ProductDetailsView',
  'views/products/ProductSearchResultView',
  'views/products/ProductSearchView',
  'views/products/ProductsListView',
  'views/products/ProductsView',
  'views/store/OnlineshopView',
  'views/store/StoreDetailsView',
  'views/store/StoreListView',
  'views/store/StoreOfferListView',
  'views/store/StoreOffersView',
  'views/store/StoresView',
  'views/user/UserListView',
  'views/user/UserView',
  'models/user/UserModel',
  'models/navi/LoginFormModel'
  
  ], function($, _, Backbone, HomeView, FooterView, HeaderView, LoginView, LogoutView, RegisterView, PasswdForgottenView, 
		  MyOmozonCoinsView,MyOmozonProfileView,MyOmozonPurchasesView,MyOmozonStoresView,MyOmozonView,MyOmozonVoucherView,
		  MyOmozonWalletView,MyOmozonWishlistView,ProductDetailsQRView,ProductDetailsView,ProductSearchResultView,ProductSearchView,
		  ProductsListView,ProductsView,OnlineshopView,StoreDetailsView,StoreListView,StoreOfferListView,
		  StoreOffersView,StoresView,UserListView,UserView,UserModel,LoginFormModel) {
	'use strict';
  
	var appRouter = Backbone.Router.extend({
	  
		routes:{
	        	'':    'home',           //home view
	        	'home': 'home',         //home view as well
	        	'login':'login',
	    	    'logout':'logout',
	    	    'register':'register',
	    	    'passwdForgotten':'passwdForgotten',
	    	    'reset':'passwdForgotten',
	    	    "stores":"stores",
		        "storeList":"storeList",
		        "storeDetails:storeId":"storeDetails",
		        "storeOffers":"storeOffers",
		        "storeOfferList":"storeOfferList",
		        "productDetails":"productDetails",
		        "productDetailsQR":"productDetailsQR",
		        "productSearch":"productSearch",
		        "productSearchResult":"productSearchResult",
		        "myOmozon":"myOmozon",
		        "myOmozon/stores":"myOmozonStores",
		        "myOmozon/profile":"myOmozonProfile",
		        "myOmozon/purchases":"myOmozonPurchases",
		        "myOmozon/wishlist":"myOmozonWishlist",
		        "myOmozon/wallet":"myOmozonWallet",
		        "myOmozon/wallet/voucher":"myOmozonVoucher",
		        "myOmozon/wallet/coins":"myOmozonCoins",
		        "onlineshop":"onlineshop"
	            
	        },

	  initialize:function () {
	        // Handle back button throughout the application
		    $(document).on('click', '.back', function(e) {
			    e.preventDefault();
			    window.history.back();
			});
	        this.firstPage = true;
	  },
	
	  home:function (actions) {
	      console.log('#home');
	      this.changePage(new HomeView());
	      
	  },
	  
	  init:true,
	  
	  login: function() {
		  console.log('#login');
		  this.changePage(new LoginView({model: new LoginFormModel()}));
	      
	  },
	  
	  logout: function() {
		  console.log('#logout');
		  $.session.remove('userdata');
	      this.changePage(new LogoutView());
	      
	  },
	  
	  register: function() {
		  console.log('#register');
		  $.session.remove('userdata');
	      this.changePage(new RegisterView({model: new UserModel()}));
	      
	  },
	  
	  passwdForgotten: function() {
	  	console.log('#passwdForgotten');
	  	$.session.remove('userdata');
	      this.changePage(new PasswdForgottenView());
	      
	  },
	
	  stores:function () {
	      console.log('#stores');
	      this.changePage(new StoresView());
	  },
	  
	  storeList:function () {
	      console.log('#storeList');
	      this.changePage(new StoreListView());
	      
	  },
	  
	  storeDetails:
		  function (storeId) {
	        console.log('#storeDetails/' + storeId);
	        this.changePage(new StoreDetailsView({storeId: storeId}));
	  },
	
	  storeOffers:function () {
	      console.log('#storeOffers');
	      this.changePage(new StoreOffersView());
	      
	  },
	  
	  storeOfferList:function () {
	      console.log('#storeOfferList');
	      this.changePage(new StoreOfferListView());
	      
	  },
	  
	  productDetails:function () {
	      console.log('#productDetails');
	      this.changePage(new ProductDetailsView());
	      
	  },
	  
	  productDetailsQR:function () {
	      console.log('#productDetailsQR');
	      this.changePage(new ProductDetailsQRView());
	      
	  },
	  
	  productSearch:function () {
	      console.log('#productSearch');
	      this.changePage(new ProductSearchView());
	      
	  },
	  
	  productSearchResult:function () {
	      console.log('#productSearchResult');
	      this.changePage(new ProductSearchResultView());
	      
	  },
	
	  myOmozon:function () {
	      console.log('#myOmozon');
	      this.changePage(new MyOmozonView());
	      
	  },
	  
	  myOmozonStores:function () {
	      console.log('#myOmozonStores');
	      this.changePage(new MyOmozonStoresView());
	      
	  },
	  
	  myOmozonProfile:function () {
	      console.log('#myOmozonProfile');
	      this.changePage(new MyOmozonProfileView());
	      
	  },
	  
	  myOmozonPurchases:function () {
	      console.log('#myOmozonPurchases');
	      this.changePage(new MyOmozonPurchasesView());
	      
	  },
	  
	  myOmozonWishlist:function () {
	      console.log('#myOmozonWishlist');
	      this.changePage(new MyOmozonWishlistView());
	      
	  },
	  
	  myOmozonWallet:function () {
	      console.log('#myOmozonWallet');
	      this.changePage(new MyOmozonWalletView());
	      
	  },
	  
	  myOmozonVoucher:function () {
	      console.log('#myOmozonVoucher');
	      this.changePage(new MyOmozonVoucherView());
	      
	  },
	  
	  myOmozonCoins:function () {
	      console.log('#myOmozonCoins');
	      this.changePage(new MyOmozonCoinsView());
	      
	  },
	  
	  onlineshop:function () {
	      console.log('#onlineshop');
	      this.changePage(new OnlineshopView());
	      
	  },

	  
	  changePage:function (page) {
	        $(page.el).attr('data-role', 'page');
	        page.render();
	        $('body').append($(page.el));
	        var transition = $.mobile.defaultPageTransition;
	        // We don't want to slide the first page
	        if (this.firstPage) {
	            transition = 'none';
	            this.firstPage = false;
	        }
	        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
	    }
	  
	  
	});
	
  return appRouter;
		  
});
