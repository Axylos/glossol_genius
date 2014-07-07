GlossolApp.Subsets.UserDocs = Backbone.Subset.extend({
  url: function() {
    return "api/users/" + this.user.id + "/documents" ;
  },

  model: GlossolApp.Models.Document,

  initialize: function(models, options) {
    this.user = options.user;
  }
});