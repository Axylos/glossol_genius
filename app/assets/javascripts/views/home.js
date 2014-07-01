GlossolApp.Views.Home = Backbone.View.extend({
  
  template: JST['home'],
  
  render: function() {
    var that = this;
    var $content = $(this.template());
    
    
    
    //build ul on left for user docs
    var $leftContent = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs
    });
    
    //populate left ul
    var $renderedLeft = $leftContent.render().$el;
    $content.find('.left-pane').append($renderedLeft);
        
    //build right ul
    var$rightContent = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });
    
    //populate right ul for all docs
    var $renderedRight = $rightContent.render().$el;
    $content.find('.right-pane').append($renderedRight);
    
    
    this$el.html($content);
    return this;
  }
});