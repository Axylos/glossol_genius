GlossolApp.Collections.Documents = Backbone.Collection.extend({
  model: GlossolApp.Models.Document,
  
  url: "api/documents"
});
