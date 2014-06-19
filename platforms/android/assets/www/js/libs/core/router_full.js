// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/myOmozon/MyOmozonCoinsView',
  'views/myOmozon/MyOmozonProfileView',
  'views/myOmozon/MyOmozonPurchasesView',
  'views/myOmozon/MyOmozonStoresView',
  'views/myOmozon/MyOmozonView',
  'views/myOmozon/MyOmozonVoucherView',
  'views/myOmozon/MyOmozonWalletView',
  'views/myOmozon/MyOmozonWishlistView',
  'views/navi/FooterView',
  'views/navi/HeaderView',
  'views/navi/LoginView',
  'views/navi/LogoutView',
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
  'views/user/UserView'
  ], function($, _, Backbone, HomeView,MyOmozonCoinsView,MyOmozonProfileView,MyOmozonPurchasesView,MyOmozonStoresView,MyOmozonView,MyOmozonVoucherView,MyOmozonWalletView,MyOmozonWishlistView,FooterView,HeaderView,LoginView,LogoutView,ProductDetailsQRView,ProductDetailsView,ProductSearchResultView,ProductSearchView,ProductsListView,ProductsView,OnlineshopView,StoreDetailsView,StoreListView,StoreOfferListView,StoreOffersView,StoresView,UserListView,UserView) {
  
  var AppRouter = Backbone.Router.extend({
	    routes:{
	        "":"home",
	        "login":"login",
	        "logout":"logout",
	        "stores":"stores",
	        "storeList":"storeList",
	        "storeDetails":"storeDetails",
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
	        "onlineshop":"onlineshop",
	        
	        // Default
	        '*actions': 'defaultAction'
	    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:login', function () {
        alert('login');
        var loginView = new LoginView();
        loginView.render();
    });
 
 	app_router.on('route:logout', function () {
     
 		var logoutView = new LogoutView();
 		logoutView.render();
 	});
    
    app_router.on('route:stores', function () {
        
        var storeView = new StoreView();
        storeView.render();
    });
    
    app_router.on('route:storeOffers', function () {
        
        var storeOfferView = new StoreOfferView();
        storeOfferView.render();
    });
    
    app_router.on('route:productSearch', function(){
    	   
        // Call render on the module we loaded in via the dependency array
        var productsView = new ProductsView();
        productsView.render();

    });
    
    app_router.on('route:myOmozon', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var myOmozonView = new MyOmozonView();
        myOmozonView.render();

    });

    app_router.on('route:defaultAction', function (actions) {
    	alert('default');
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView();
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
