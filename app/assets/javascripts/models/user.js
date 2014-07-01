GlossolApp.Models.User = Backbone.Model.extend({
	
  urlRoot: "api/users",
  collection: GlossolApp.Collections.Users,
  
  initialize: function() {
    this.documents = new GlossolApp.Collections.Documents({},
      {author_id: this.id});
  }
});