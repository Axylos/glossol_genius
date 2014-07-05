GlossolApp.Models.Reference = Backbone.Model.extend({
  
  buildRef: function(sel, docId) {
    var range = sel.getRangeAt(0);
    var parent = range.commonAncestorContainer.parentNode;
    var pos = range.toCharacterRange(parent);
    
    return new GlossolApp.Models.Reference({
      source_text: [pos.start - 1, pos.end - 1],
      annotated_text_ids: [docId]
    });
  }
});