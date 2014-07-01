GlossolApp.Views.Doc = Backbone.View.extend({
  template: JST['doc'],
  
  tagName: 'li',
  
  render: function() {
    var content = this.template({doc: this.model});
    this.$el.html(content);
    return this;    
  }
  
  
});