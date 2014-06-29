GlossolApp.Views.Welcome = Backbone.View.extend({
  template: JST['welcome/start'],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)
    return this;
  }
});