GlossolApp.Collections.Documents = Backbone.Collection.extend({
  model: GlossolApp.Models.Document,
  
  initialize: function(options) {
    debugger
    if(options.user) {
      this.user = options.user
    }
  },
  
  url: "api/documents"
});
