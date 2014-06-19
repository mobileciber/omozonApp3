define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/user/userTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, userTemplate){

	window.UserView = BaseView.extend({
		initialize: function() {
			
			this.subviews.headerView = new HeaderView("User");
			this.subviews.footerView = new FooterView("User");
		},
		
	    el: $("#page"),
	    
	    template:_.template(userTemplate),
	
	    render: function(){
	      
	      $('.menu li').removeClass('active');
	      $('.menu li a[href="#"]').parent().addClass('active');
	      
	      
	      this.$el.append(this.subviews.headerView.render().el);
	    	this.$el.append(this.template());
	        this.$el.append(this.subviews.footerView.render().el);
			
	      return this;
	    }
		
  });

  return UserView;
  
});
