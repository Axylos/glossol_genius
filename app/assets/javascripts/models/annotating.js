GlossolApp.Models.Annotating = Backbone.Model.extend({
  
  initialize: function(model, options) {
    this.set({selection: [options.sel.anchorOffset, options.sel.focusOffset],
      refDoc: options.sourceDoc.id
    })
  }
});