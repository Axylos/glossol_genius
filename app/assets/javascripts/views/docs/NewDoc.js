GlossolApp.Views.NewDoc = Backbone.View.extend({
  template: JST['doc/new'],

  render: function() {
    this.$el.html(this.template({doc: this.model}));
    return this;
  }
})