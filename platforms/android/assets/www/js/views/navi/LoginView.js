define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'models/navi/LoginFormModel',
  'models/user/UserModel',
  'text!templates/navi/loginTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, LoginFormModel, UserModel, loginTemplate){
	
	
	window.LoginView = BaseView.extend({

		initialize: function(){
			
			this.subviews.headerView = new HeaderView("Login");
			this.subviews.footerView = new FooterView("Login");

		    Backbone.Validation.bind(this, {
		    		valid: function(view, attr) {
		        		$('#err_' + attr).html('').hide();
		        		$("#err_loginFailed").html('').hide(); // hide msg for serverside login failed
		     		},
		     		invalid: function(view, attr, error) {
		     			$("#err_" + attr).html(error).show();
		     			$("#err_loginFailed").html('').hide(); // hide msg for serverside login failed
		     		},
		 		}
		    );
		},		

	    template:_.template(loginTemplate),

	    render:function (eventName) {
	    	this.createPage(this.template());
	        return this;
	    },

	    login:function (e) {
	    	var self = this;
	    	
	    	this.model.set({inputUser: $('#inputUser').val(), inputPassword: $('#inputPassword').val()});
	    	
	    	if (this.model.isValid()) {
	    		//alert("Validation successful... You can invoke some serverside login!");
	    		this.performLogin(this.model.get("inputUser"), this.model.get("inputPassword"), self);
	    	} else{
	    		e.preventDefault(); // stops further event propagation
	    	}
	    },
	    
	    performLogin: function(username, password){
	    	var user = new UserModel({id: username});
			user.credentials = function(){
				return {
					username: username,
					password: password
				};
			};
			console.log('trying to fetch user with name: ' + username);
			console.log('urlRoot: ' + user.urlRoot);
			user.fetch({
					success: function (usermodel, response, options) {
						usermodel.set({ username: username, password: password});
						$.session.set('userdata', JSON.stringify(usermodel.toJSON()));
						console.log(usermodel.get('name') + " has signed on");
						Backbone.history.navigate("home", {trigger: true});
	                },
	                error:function (model, xhr, options) {
	                	console.log('error arguments: ', options);
	                	console.log('Remove user from session...');
	                	$.session.remove('userdata');
	                	$("#err_loginFailed").html("User / password combination unknown. Please try again.").show();
	                },
	                complete: function(xhr, textStatus) {
	                	console.log('fetch status: ' + textStatus);
	                	username = '';
	                	password = '';
	                }
			});
//			.complete(function () {
//		        alert("done");
//		    });
	    },
	    
	    events: {
			"click #loginButton" : function(e){
				this.login(e);
			}
		},
	    
	    redirect: function(){
//	    	app.changePage(new HomeView());
//	    	app.navigate('login', {trigger: true});
	    },
	    
	    cancel: function(e){
	    	e.preventDefault();
	        return false;
	    }
	});
  
  return LoginView;
  
});
