GlossolApp.Models.Session = Backbone.Model.extend({
	url: "api/session",
	
	initialize: function(options) {
		this.params = options.params
	}
});