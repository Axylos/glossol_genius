GlossolApp.Views.RefSubview = Backbone.View.extend({
  template: function() {
    return this.open ? JST['ref/openSub'] : JST['ref/sub']
  },  
  
  tagName: "li",
  
  events: {
    "click .doc-preview": "openRef",
    "click .anno-close": "closeRef"
  },
  
  initialize: function(options) {
    debugger
    this.open = false;
    var that = this;
    this.model.author = new GlossolApp.Models.User({
      id: that.model.get('user_id')
    });
    this.listenTo(this.model.author, "sync", this.render);
    this.model.author.fetch();
  },
  
  openRef: function() {
    event.preventDefault();    
    this.open = true;
    this.render();
  },
  
  closeRef:function() {
    this.open = false;
    this.render();
  },
  
  removeHighlight: function() {
    
  },
  
  render: function() {
    var content = this.template()({ref: this.model});

    this.$el.html(content);
    this.removeHighlight();
    return this;
  }
});