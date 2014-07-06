GlossolApp.Models.Selection = Backbone.Model.extend({
  
  
  buildSel: function(sel, doc) {
    var range = sel.getRangeAt(0);
    var parent = range.commonAncestorContainer.parentNode;
    var pos = range.toCharacterRange(parent);
    var text = doc.escape('body').substr(pos[0], pos[1]);
    var docId = doc.id;
    
    return new GlossolApp.Models.Selection({
      range: range,
      source_text: [pos.start - 1, pos.end - 1],
      text: text,
      doc: doc
    });
  }
  
});