GlossolApp.Views.Docs = Backbone.View.extend({
  
  template: JST['docs'],
  
  tagName: 'ul',
  
  initialize: function() {
    this.listenTo(this.collection, 'sync add remove delete update', this.render);
    this.x = 1;
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    var that = this;
    this.collection.each(function(doc) {
      
      var view = new GlossolApp.Views.Doc({model: doc});
      that.$el.append(view.render().$el); 
    })
    
    
    return this;
  }
})