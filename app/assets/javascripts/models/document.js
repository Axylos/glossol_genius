GlossolApp.Models.Document = Backbone.Model.extend({
  urlRoot: "api/documents",
  collection: GlossolApp.Collections.Documents,
  
  initialize: function(options) {
    this.author_id = options.author_id;
  }
});