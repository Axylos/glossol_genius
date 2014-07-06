GlossolApp.Views.NewRefIndex = Backbone.CompositeView.extend({
	template: JST['ref/newRefIndex'],
	
	initialize: function() {
		this.addViews();
	},
	
	events: {
		"click a": "expandRef"
	},
	
	expandRef: function(event) {
		event.preventDefault();
		debugger
	},
	
	addViews: function() {
		var that = this;
	  this.$el.html(this.template);
	
		var allDocsView = new GlossolApp.Views.Docs({
		collection: GlossolApp.allDocs,
		title: "All Documents"
		});
		this.addSubView('.docIndex', allDocsView);
	}
});