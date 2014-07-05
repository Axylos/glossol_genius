GlossolApp.Subsets.References = Backbone.Subset.extend({
  initialize: function(models, options) {
    this.sourceDoc = options.sourceDoc;
  },

  url: function() {
    return "api/documents/" + this.sourceDoc.id + "/references"
  },

  model: GlossolApp.Models.Document
})