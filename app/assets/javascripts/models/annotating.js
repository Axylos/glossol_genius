GlossolApp.Models.Annotating = Backbone.Model.extend({
  
  parseSel: function(sel) {
    return [sel.anchorOffset, sel.focusOffset];
  }
});