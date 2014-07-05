GlossolApp.Models.Document = Backbone.Model.extend({
  urlRoot: "api/documents",
  collection: GlossolApp.Collections.Documents,

  initialize: function(model, options) {
    this.user_id = options.user_id;
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
  
  referencedTexts: function() {
    var that = this;
    this._references = this._references ||
    new GlossolApp.Subsets.References([], {
      sourceDoc: that,
      parentCollection: GlossolApp.allDocs
     });
    return this._references;
  },
  
  sourceId: function() {
    return this.get('references')[0].source_document_id
  }
});