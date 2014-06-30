GlossolApp.Views.Home = Backbone.View.extend({
  
  template: JST['home'],
  
  render: function() {
    var that = this;
    var $content = $(this.template());
    var $leftContent = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });
    var $renderedLeft = $leftContent.render().$el;
    
    $content.find('.left-pane').append($renderedLeft);
    this.$el.html($content);
    return this;
    
  }
});