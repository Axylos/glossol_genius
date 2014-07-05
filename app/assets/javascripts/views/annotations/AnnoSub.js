GlossolApp.Views.AnnotationSubview = Backbone.View.extend({
  template: JST['anno/sub'],
  
  events: {
    "mouseover .doc-preview": "triggerHighlight",
    "mouseleave .doc-preview": "removeHighlight"
  },
  
  triggerHighlight: function() {
    //super hacky but it gets the newly created reference over to show pane
    var mod = GlossolApp.allDocs.get(this.model.id).attributes
    GlossolApp.PubSub.trigger("highlighted", {
      text: mod.references[0].source_text,
      event: mod
    })
  },
  
  removeHighlight: function() {
    GlossolApp.PubSub.trigger("unhighlight");
  },
  
  render: function() {
    var content = this.template({anno: this.model});
    
    this.$el.html(content);
    return this;
  }
})