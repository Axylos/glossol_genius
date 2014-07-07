GlossolApp.Views.SearchDocSubview = Backbone.View.extend({
  template: function() {
    return this.open ? JST['doc/openSub'] : JST['doc/sub']
  },  
  
  events: {
    "click .doc-preview": "openRef",
    "click .anno-close": "closeRef",
    "mouseup .ref-text": "emitSel" 
  },
  
  initialize: function(options) {
    this.open = false;
    this.author = options.author;
    this.query = options.query
    this.listenTo(this.author, "sync", this.render);
    this.author.fetch();
  },
  
  receiveHighlight: function() {
    var str = this.$el.find('.ref-text').text();
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

  emitSel: function(event) {
    
    event.preventDefault();
    var sel = rangy.getSelection();
  
    if (sel.toString().length > 1) {
      var selection = GlossolApp.Models.Selection.prototype.buildSel(
        sel, 
        this.model
      );
      GlossolApp.PubSub.trigger("getSel", {sel: selection});
    }
  },
  
  render: function() {
    var content = this.template()({
      doc: this.model,
      author: this.author
    });
    
    this.$el.html(content);
    return this;
  }
});