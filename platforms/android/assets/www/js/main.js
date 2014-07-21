/* Author: Andreas Chemnitz <andreas.chemnitz@ciber.com>
 Filename: main.js*/

// Require.js allows us to configure shortcut alias
require.config({

	paths: {
		'gserializer': 			'libs/core/gserializer',
		'interceptor': 			'libs/core/interceptors',
		'jquery': 				'libs/jquery/jquery-1.11.1',
		'jquery-mobile': 		'libs/jquery/jquery.mobile-1.4.2',		
		'jquery-session': 		'libs/jquery/plugin/jquery.session',	
		'text': 				'libs/require/text',
		'underscore': 			'libs/underscore/underscore_amd',
		'backbone': 			'libs/backbone/backbone_amd',	
		'backbone-basicauth': 	'libs/backbone/backbone.basicauth',
		'backbone-validation': 	'libs/backbone/backbone-validation-0.9.1.min',
		'backbone-stickit':		'libs/backbone/backbone.stickit.min',
		'config':				'libs/core/config',
		'jqm-config':			'libs/jquery/jqm-config',
		'templates': 			'../templates',
		'app':					'libs/core/app',
		'router':				'libs/core/router',
		'google-maps-loader':	'libs/core/google-maps-loader',
		'omozon-maps':			'maps/maps'
    },
 
    priority: ['config', 'jquery', 'jquery-mobile', 'backbone', 'google-maps-loader']
 
});



define(['jquery', 'underscore', 'backbone', 'jqm-config', 'interceptor', 'router', 'google-maps-loader',
      'jquery-mobile', 'jquery-session', 'backbone-basicauth', 'backbone-validation', 'backbone-stickit', 'gserializer', 'omozon-maps'], 
      function($, _, Backbone, JQMConfig, Interceptor, Router, GoogleMapsLoader) {
		  
//		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//			document.addEventListener("deviceready", onDeviceReady, false);
//		}
//		else{
//			initBackboneApp();
//		}
//		function onDeviceReady(){
//			initBackboneApp();
//		}
		initBackboneApp();
		function initBackboneApp(){
			GoogleMapsLoader.done(function(GoogleMaps){
				  
				  console.log("Google Maps API loaded successfully!");
				  $(document).ready(function() {
					  console.log("document ready");// Handler for .ready() called.
					  //    App.initialize();
					  console.log("Router creating");
					  var appRouter=new Router();
					  Backbone.history.start();
					  console.log("Router" + appRouter + " created and started");
				    
					  // Declare some global variables
					  var directionsDisplay;
					  var directionsService = new google.maps.DirectionsService();
					  var map;
					  var Stores;
				  });
			  }).fail(function(){
				  	console.error("ERROR: Could not load Google Maps API");
			  }); 
		}
	  });
