GlossolApp.Views.AnnotationSubview = Backbone.View.extend({
  template: JST['anno/sub'],
  
  events: {
    "mouseover .doc-preview": "triggerHighlight"
  },
  
  triggerHighlight: function() {
    GlossolApp.PubSub.trigger("highlighted", {
      event: this.model
    })
  },
  
  render: function() {
    var content = this.template({anno: this.model});
    
    this.$el.html(content);
    return this;
  }
})