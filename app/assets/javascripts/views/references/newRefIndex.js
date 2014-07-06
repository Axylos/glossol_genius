GlossolApp.Views.NewRefIndex = Backbone.CompositeView.extend({
	template: JST['ref/newRefIndex'],
	
	initialize: function() {
		this.addViews();
	},
	
	events: {
		"click a": "expandRef",
	},
	
	expandRef: function(event) {
		event.preventDefault();
	},
	
	addViews: function() {
		var that = this;
	  this.$el.html(this.template);
    
    this.docsView = new GlossolApp.Views.DocPrevView({
      collection: this.collection,
      notice: "No references yet!",
      title: "References"
    });
		this.addSubView('.docIndex', this.docsView);
	},
  
  
});