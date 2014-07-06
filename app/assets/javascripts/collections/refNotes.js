GlossolApp.Collections.RefNotes = Backbone.Collection.extend({
  
  initialize: function(options) {
    this.noteDoc = options.noteDoc;
  },
  
  url: function() {
    return "api/documents/" + this.noteDoc.id + "/references";
  },
  
  model: GlossolApp.Models.RefNote
});