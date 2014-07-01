GlossolApp.Collections.Documents = Backbone.Collection.extend({
  
  
  model: GlossolApp.Models.Document,
  
  initialize: function(models, options) {
    this.user = options.user;
  },
  
  url: function() {
    return "api/documents/" + this.user["id"];
  }
});
