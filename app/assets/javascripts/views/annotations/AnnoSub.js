GlossolApp.Views.AnnotationSubview = Backbone.View.extend({
  template: JST['anno/sub'],
  
  render: function() {
    var content = this.template({anno: this.model});
    
    this.$el.html(content);
    return this;
  },
  
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "mouseover .doc-preview": "highlightAnno"
  },
  
  highlightAnno: function(event) {
    console.log("triggered");
    debugger
    GlossolApp.PubSub.trigger("highlight", {

    });
  },
})