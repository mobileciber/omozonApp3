define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/navi/headerTemplate.html'
], function($, _, Backbone, headerTemplate){

	window.HeaderView = Backbone.View.extend({
		
		
		initialize: function(pageheader, showBack, showLogoff) {				
			console.log("opening " + pageheader + " for HeaderView");
			this.pageHeader = pageheader;	
			this.showBack = showBack === undefined ? 'hidden' : showBack;
			this.showLogoff = showLogoff === undefined ? 'hidden' : showLogoff;
			
			this.data = { pageHeader : this.pageHeader, 
	                  showBack : this.showBack,
	                  showLogOff : this.showLogoff}; 
		},
		
		 
		template:_.template(headerTemplate, this.data),		

		render:function (eventName) {
			
			console.log("rendering HeaderView for " + this.pageHeader);
	        $(this.el).html(this.template());	      
	        return this;
	    }


  });

  return HeaderView;
  
});
