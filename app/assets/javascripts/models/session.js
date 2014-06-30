GlossolApp.Models.Session = Backbone.Model.extend({
	url: "/session",
	
	initialize: function(options) {
		this.user = options.user
	}
});