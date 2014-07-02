GlossolApp.Views.DocNavView = Backbone.View.extend({
  template: JST['docNav'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});