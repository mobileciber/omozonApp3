define(['jquery'], function($){
  'use strict';
  	$(document).bind("mobileinit", function () {
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
  	    $.mobile.listview.prototype.options.icon = "";
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		// Remove page from DOM when it's being replaced
		$('div[data-role="page"]').live('pagehide', function (event, ui) {
			$(event.currentTarget).remove();
		});
	});
});