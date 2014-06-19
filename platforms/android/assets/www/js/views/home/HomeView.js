define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, homeTemplate){

window.HomeView = BaseView.extend({
  // 'this' means 'window', which is the default global object
  // 'bindAll' uses 'bind' internally and 'bind' uses 'apply', which sets an object as the value for 'this'
	initialize: function() {
		this.subviews.headerView = new HeaderView("Omozon Home", "hidden", "visible");
		this.subviews.footerView = new FooterView("Omozon Home");
  },
  
  //initialize template
  template:_.template(homeTemplate),
  
  render:function () {
//  	this.options keeps all parameters with which the view was instanciated
  	var sessionUser = $.parseJSON($.session.get('userdata'));
  	var greeting = 'Hello ' + sessionUser.name;
      //Pass variables in using Underscore.js Template
      var variables = { myGreeting: greeting };      
      // Compile the template using underscore
      var template = _.template( homeTemplate, variables );
      // Load the compiled HTML into the Backbone "el"
      this.createPage(template);
//    fire the JQM create trigger to refresh the page
//      return $(this.el).trigger('create');
      return this;
  }
	    
//	    var headerView = new HeaderView();
//	      headerView.render();
	});
	return HomeView;
  
});
