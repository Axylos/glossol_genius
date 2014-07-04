GlossolApp.Models.Document = Backbone.Model.extend({
  urlRoot: "api/documents",
  collection: GlossolApp.Collections.Documents,

  initialize: function(model, options) {
    this.user_id = options.user_id;
    var annos = options.annotatings || [];
    this.set({
      annotatings: annos
    });
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
  
  // annotatings: function() {
//     if (!this._annotatings) {
//       this._annotatings = [];
//     }
//
//     return this._annotatings
//   },
//
//   references: function() {
//     if (!this._references) {
//       this._references = [];
//     }
//
//     return this._references;
//   },
//
//   parse: function(jsonResponse) {
//     if(jsonResponse.annotatings.length > 0) {
//     this.annotatings().set(jsonResponse.annotatings);
//       delete jsonResponse.annotatings;
//     }
//
//     if (jsonResponse.references.length > 0) {
//       debugger
//       this.references().set(jsonResponse.references);
//       delete jsonResponse.references;
//     }
//
//     return jsonResponse
//   }
});