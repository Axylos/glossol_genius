GlossolApp.Views.AnnotationSubview = Backbone.View.extend({
  template: function() {
    return this.open ? JST['anno/openSub'] : JST['anno/sub']
  },
  
  events: {
    "mouseover .doc-preview, .anno-preview": "triggerHighlight",
    "mouseleave .doc-preview, .anno-preview": "removeHighlight",
    "click .doc-preview": "openAnno",
    "click .anno-close": "closeAnno"
  },
  
  initialize: function(options) {
    
    this.open = false;
    var that = this;
    this.model.author = new GlossolApp.Models.User({id: that.model.get('user_id')})
    this.listenTo(this.model.author, "sync", this.render);
    this.model.author.fetch();
  },
  
  openAnno: function() {
    event.preventDefault();    
    this.open = true;
    this.render();
  },
  
  closeAnno:function() {
    this.open = false;
    this.render();
  },
  
  triggerHighlight: function() {
    //super hacky but it gets the newly created reference over to show pane
    var mod = GlossolApp.allDocs.get(this.model.id).attributes
    GlossolApp.PubSub.trigger("highlighted", {
      text: mod.references[0].source_text,
    })
  },
  
  removeHighlight: function() {
    GlossolApp.PubSub.trigger("unhighlight");
  },
  
  render: function() {
    var content = this.template()({anno: this.model});
    this.$el.html(content);
    this.removeHighlight();
    return this;
  }
})