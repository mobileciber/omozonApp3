define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'text!templates/user/registerTemplate.html'
], function($, _, Backbone, BaseView, HeaderView, FooterView, registerTemplate){

window.RegisterView = BaseView.extend({
	
	initialize: function(){
		this.subviews.headerView = new HeaderView("Register", "visible");
		this.subviews.footerView = new FooterView("Register");
		
	    Backbone.Validation.bind(this, {
	        	valid: function(view, attr) {
	        		$('#err_' + attr).html('').hide();
	        		$("#err_registrationFailed").html('').hide(); // hide msg for serverside login failed
	     		},
	     		invalid: function(view, attr, error) {
	     			$("#err_" + attr).html(error).show();
	     			$("#err_registrationFailed").html('').hide(); // hide msg for serverside login failed
	     		}
	 		}
	    );
	},
	
	events: {
		"click #registerButton" : function(e){
			this.register(e);
		}
	},
	
	register:function (e) {
    	var self = this;
    	
    	this.model.set({
    		id: $('#user').val(), 
    		password: $('#password').val(),
    		repeatPassword: $('#repeatPassword').val(),
    		email: $('#email').val(),
    		name: $('#name').val(),
    		street: $('#street').val(),
    		zip: $('#zip').val(),
    		city: $('#city').val()
    	});
    	
    	if (this.model.isValid(true)) {
//    		alert("Validation successful... You can invoke some serverside registration!");
    		this.performRegistation(this.model);
    	} else{
    		e.preventDefault(); // stops further event propagation
    	}
    },
    
    performRegistation: function(user){
		user.credentials = function(){
			return { //@ToDo: expose registration without base auth
				username: "freddy",
				password: "krueger"
			};
		};
		console.log('trying to save user with name: ' + user.get("id"));
		console.log('urlRoot: ' + user.urlRoot);
		user.save({}, {
				success: function (usermodel, response, options) {
					$.session.set('userdata', JSON.stringify(usermodel.toJSON()));
					console.log(usermodel.get('name') + " has signed on");
					app.navigate("home", {trigger: true});
                },
                error:function (model, xhr, options) {
                	console.log('error arguments: ', options);
                	console.log('Remove user from session...');
                	$.session.remove('userdata');
                	$("#err_registrationFailed").html("User already exists. Please try another username.").show();
                },
                complete: function(xhr, textStatus) {
                	console.log('fetch status: ' + textStatus);
                	username = '';
                	password = '';
                }
		});
//		.complete(function () {
//	        alert("done");
//	    });
    },

    template:_.template(registerTemplate),

    render:function (eventName) {
    	this.createPage(this.template());
        return this;
    }
});

return RegisterView;

});