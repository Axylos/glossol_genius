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
    this.open = false;
    var that = this;
    this.model.get('doc').author = new GlossolApp.Models.User({
      id: that.model.get('doc').get('user_id')
    });
    this.listenTo(this.model.get('doc').author, "sync", this.render);
    this.model.get('doc').author.fetch();
  },
  
  receiveHighlight: function() {
    var str = this.$el.find('.ref-text').text();
    var text = this.model.get('source_text');
    
    var newString = str.substring(0, text[0] + 1) + 
      ('<span class="hilite">') + 
      (str.substring(text[0] + 1, text[1] + 1)) + 
      ('</span>').concat(str.substring(text[1] + 1));
    this.$el.find('.ref-text').html(newString);
    console.log(text, str.length);
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
    var content = this.template()({ref: this.model.get('doc')});

    this.$el.html(content);
    this.receiveHighlight()
    return this;
  }
});