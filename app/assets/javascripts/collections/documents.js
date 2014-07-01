GlossolApp.Collections.Documents = Backbone.Collection.extend({

  url: function() {
    if (!this.user) {
      return "api/documents";
    } else {
      return "api/users/" + this.user.id + "/documents" ;
    };
  },

  model: GlossolApp.Models.Document,

  initialize: function(models, options) {
    this.user = options.user;
    this.annotation = options.annotation
  }
});
