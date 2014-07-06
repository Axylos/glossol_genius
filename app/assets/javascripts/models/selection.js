GlossolApp.Models.Selection = Backbone.Model.extend({
  
  
  buildSel: function(sel, doc) {
    var range = sel.getRangeAt(0);
    var parent = range.commonAncestorContainer.parentNode;
    var pos = range.toCharacterRange(parent);
    var src_text = [pos.start - 1, pos.end - 1]
    var text = doc.escape('body').substr(src_text[0], src_text[1]);
    var docId = doc.id;
    
    return new GlossolApp.Models.Selection({
      range: range,
      source_text: src_text,
      text: text,
      doc: doc
    });
  }
  
});