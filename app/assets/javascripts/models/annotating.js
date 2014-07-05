GlossolApp.Models.Annotating = Backbone.Model.extend({
  
  buildNote: function(sel, docId) {
    var range = sel.getRangeAt(0);
    var parent = range.commonAncestorContainer.parentNode;
    var pos = range.toCharacterRange(parent);
    
    return new GlossolApp.Models.Annotating({
      source_text: [pos.start - 1, pos.end - 1],
      referenced_text_ids: [docId]
    });
  }
});