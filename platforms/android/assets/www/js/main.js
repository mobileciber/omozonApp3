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
		'router':				'libs/core/router'
    },
 
    priority: ['jquery', 'jquery-mobile']
 
});



define(['jquery', 'underscore', 'backbone', 'jqm-config', 'interceptor', 'router',
      'jquery-mobile', 'jquery-session', 'backbone-basicauth', 'backbone-validation', 'backbone-stickit', 'gserializer' ], 
      function($, _, Backbone, JQMConfig, Interceptor, Router) {
  $(document).ready(function() {
    console.log("document ready");// Handler for .ready() called.
//    App.initialize();
    console.log("Router creating");
	var appRouter=new Router();
	Backbone.history.start();
	console.log("Router" + appRouter + " created and started");
    
  });   
  

});
