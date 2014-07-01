GlossolApp.Views.PrevDoc = Backbone.View.extend({
  template: JST['prevDoc'],

  tagName: 'li',

  render: function() {
    var content = this.template({doc: this.model});
    this.$el.html(content);
    return this;
  }
});