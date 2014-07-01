GlossolApp.Models.Document = Backbone.Model.extend({
  urlRoot: "api/documents",
  collection: GlossolApp.Collections.Documents,

  initialize: function(options) {
    this.author_id = options.author_id;
    this.notes = options.annotatings;
    this.refs = options.references;
  },

  references: function() {
    var that = this;
    this._references = this._references ||
    new GlossolApp.Collections.Documents([], {
      annotatings: new GlossolApp.Collections.Documents([], {annotation: that})
    });
    return this._references
  }
});