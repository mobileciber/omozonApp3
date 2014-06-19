// Filename: app.js
define(['jquery','underscore', 'backbone', 'router'],function($, _, Backbone, Router) {
	'use strict';
	
	var App = {
			
		appRouter: {},
	
		init : function(){
			//create backbone router
			console.log("Router creating");
			this.appRouter=new Router();
			Backbone.history.start();
			console.log("Router" + this.appRouter + " created and started");
		}
	};
	
    return{
	    initialize: App.init()
    }
});