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
  
  refNotes: function() {
    var that = this;
    this._refNotes = this._refNotes ||
    new GlossolApp.Collections.RefNotes([], {
      noteDoc: that,
    });
    return this._refNotes;
  },
  
  sourceId: function() {
    return this.get('references')[0].source_document_id
  },
  
  parse: function(jsonResp) {
    var that = this;
    if (jsonResp.references) {
      var refColl = new GlossolApp.Collections.RefNotes(jsonResp.references, {
        noteDoc: that
      });
      
      this.set({refNotes: refColl});
    }
    return jsonResp;
  }
});