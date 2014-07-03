GlossolApp.Models.Annotating = Backbone.Model.extend({
  
  initialize: function(model, options) {
    this.set({source_text: [options.sel.anchorOffset, options.sel.focusOffset],
      referenced_text_ids: [options.sourceDoc.id]
    })
  }
});