GlossolApp.Subsets.CurrUserDocs = Backbone.Subset.extend({
  url: function() {
    return "api/users/" + GlossolApp.currUser.id + "/documents" ;
  },

  model: GlossolApp.Models.Document,

  initialize: function(models, options) {
    this.user = options.user;
  }
});