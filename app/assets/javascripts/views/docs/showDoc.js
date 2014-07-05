GlossolApp.Views.ShowDoc = Backbone.View.extend({
  template: JST['showDoc'],

  initialize: function(options) {
    this.title = options.title;
    this.author = options.author;
    this.author.fetch({ parse: true });
    this.listenTo(GlossolApp.PubSub, "highlighted", this.receiveHighlight);
    this.listenTo(this.author, "sync", this.render);
  },

  events: {
    "mouseup .doc-text": "getText"
  },
  
  receiveHighlight: function(event) {
  },

  render: function() {
    var that = this;

    this.$el.html(this.template({
      doc: that.model,
      author: that.author
     }));
    return this;
  },
  
  getText: function(event) {
  }

});