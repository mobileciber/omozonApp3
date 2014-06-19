// Filename: views/users/list
define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/navi/HeaderView',
  'views/navi/FooterView',
  // Pull in the Collection module from above,
  'models/user/ContributorModel',
  'collections/users/ContributorsCollection',
  'text!templates/user/userListTemplate.html'

], function($, _, Backbone, BaseView, HeaderView, FooterView, ContributorModel, ContributorsCollection, userListTemplate){
	window.UserListView = BaseView.extend({
//    el: $("#users-list"),
//
//    render: function(){
      
//      var data = {
//        users: this.collection.models,
//        _: _
//      };
//
//      var compiledTemplate = _.template( userListTemplate, data );
//      $("#users-list").html( compiledTemplate );
      
   // add the navibar
//      var HeaderView = new HeaderView();
//      HeaderView.render();
//    }
  
//		return this;
  });
  return UserListView;
});