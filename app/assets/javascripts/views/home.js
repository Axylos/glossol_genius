GlossolApp.Views.Home = Backbone.View.extend({
  
  template: JST['home'],
  
  render: function() {
    this.$el = this.template;
   
    return this;
  }
});