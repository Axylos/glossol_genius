GlossolApp.Collections.Documents = Backbone.Collection.extend({

  model: GlossolApp.Models.Document,

  initialize: function(models, options) {
    this.user = options.user;
  },

  url: function() {
    if (!this.user.id) {
      return "api/documents";
    } else {
      return "api/users/" + this.user.id + "/documents" ;
    };
  }
});
