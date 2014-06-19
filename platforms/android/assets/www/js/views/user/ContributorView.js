define([
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  'models/user/ContributorModel'
], function(_, Backbone, BaseView, HeaderView, FooterView, ContributorModel){    
    
	window.UserView = BaseView.extend({
        tagName : "li",
        render : function() {
            
           var user = { avatar_url : this.model.get("avatar_url"), 
                               login : this.model.get("login"), 
                               url : this.model.get("url"),
                               contributions: this.model.get("contributions")};
            
          //console.log("view created");
            
          /*
            var userTemplate = '<div class="user">' +
                            '<ul>' +
                                '<li>' +
                                '<img class="pic" width="100" src="<%= avatar_url %>">' +
                                '</li>' +
                                '<li>' +
                                    '<p class="blog"><a class="blogurl" href="<%= url %>"><%= login %></a></p>' +
                                '</li>' +
                                '<li>' +
                                    '<p class="contributions"><%= contributions %></p>' +
                                '</li>' +
                            '</ul>' + 
                        '</div>';
           
            //var userTemplate = $('#user-underscore-template').html(); hmmmmm???? 
                  
            var rendered_template = _.template(userTemplate, user);
            //console.log(rendered_template,user);
            
            $(this.el).append(rendered_template);
            */

            
            
           return this;
        }
        
    });

    return ContributorModel;

}); 