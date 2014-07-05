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
  
  annotatings: function() {
    if (!this._annotatings) {
      this._annotatings = new GlossolApp.Collections.Annotatings();
    }

    return this._annotatings
  },

  references: function() {
    if (!this._references) {
      this._references = new GlossolApp.Collections.References();
    }

    return this._references;
  },

  parse: function(jsonResponse) {
    jsonResponse.annotatings = jsonResponse.annotatings || []
    if(jsonResponse.annotatings.length > 0) {
    this.annotatings().set(jsonResponse.annotatings);
      delete jsonResponse.annotatings;
    }
    jsonResponse.references = jsonResponse.references || []
    if (jsonResponse.references.length > 0) {
      this.references().set(jsonResponse.references);
      delete jsonResponse.references;
    }

    return jsonResponse
  },
  
  sourceId: function() {
    return this.annotatings().models[0].get('source_document_id');
  }
});