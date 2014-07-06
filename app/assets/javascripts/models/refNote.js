GlossolApp.Models.RefNote = Backbone.Model.extend({
  
  initialize: function(model, options) {
    this.noteId = options.noteId;
  },
  
  url: function() {
    return "api/documents/" + this.noteId + "/references";
  }
});