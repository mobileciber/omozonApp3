define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/ContributorModel',
  'text!templates/navi/footerTemplate.html'
], function($, _, Backbone, ContributorModel, footerTemplate){

	window.FooterView = Backbone.View.extend({
//    el: $("#footer"),
//
    initialize: function(pageheader) {

      
      console.log("opening " + pageheader + " for FooterView");
	  this.pageHeader= pageheader;
    },

    render: function(){

      
      console.log("rendering FooterView for " + this.pageHeader);
      var compiledTemplate = _.template( footerTemplate);
      this.$el.html(compiledTemplate);
      return this;
    }

  });

  return FooterView;
  
});
