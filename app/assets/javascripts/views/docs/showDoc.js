GlossolApp.Views.ShowDoc = Backbone.View.extend({
  template: JST['showDoc'],

  initialize: function(options) {
    this.title = options.title;
    this.author = options.author;
    this.author.fetch({ parse: true });
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(GlossolApp.PubSub, "highlighted", this.receiveHighlight);
    this.listenTo(GlossolApp.PubSub, "unhighlight", this.removeHighlight);
    this.listenTo(this.author, "sync", this.render);
  },

  events: {
    "mouseup .doc-text": "getText"
  },
  
  receiveHighlight: function(event) {
    var text = this.$el.find('.doc-text');
    var str = text.text();
    var newString = str.substring(0, event.text[0] + 1) + 
      ('<span class="hilite">') + 
      (str.substring(event.text[0] + 1, event.text[1] + 1)) + 
      ('</span>').concat(str.substring(event.text[1] + 1));
    this.$el.find('.doc-text').html(newString);
    console.log(event.text, str.length);
  },
  
  removeHighlight: function() {
    $('span').contents().unwrap();
  },

  render: function() {
    console.log("called");
    
    var that = this;

    this.$el.html(this.template({
      doc: that.model,
      author: that.author
    }));
    return this;
  },
  
  getText: function(event) {
  },
  
  

});