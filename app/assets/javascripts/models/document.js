GlossolApp.Models.Document = Backbone.Model.extend({
  urlRoot: "api/documents",
  collection: GlossolApp.Collections.Documents,

  initialize: function(model, options) {
    this.user_id = options.user_id;
    this.author = options.author
  },

  annotations: function() {
    var that = this;
    this._annotations = this._annotations ||
    new GlossolApp.Subsets.Annotations([], {
      sourceDoc: that,
      parentCollection: GlossolApp.allDocs
     });
    return this._annotations;
  },
  
  sourceId: function() {
    return this.get('annotatings')[0].get('referenced_text_ids')[0];
  }
});