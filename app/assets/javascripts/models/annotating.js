GlossolApp.Models.Annotating = Backbone.Model.extend({
  
  initialize: function(model, options) {
    var range = options.sel.getRangeAt(0);
    var parent = range.commonAncestorContainer.parentNode;
    var pos = range.toCharacterRange(parent);
    this.set({source_text: [pos.start - 1, pos.end - 1],
      referenced_text_ids: [options.sourceDoc.id]
    })
  }
});