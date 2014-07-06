GlossolApp.Views.DocRefButtons = Backbone.View.extend({
  template: JST['ref/buttons'],
  
  render: function() {
    this.$el.html(this.template)
    return this;
  }
});