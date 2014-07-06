GlossolApp.Views.DocButtons = Backbone.View.extend({
  template: JST['doc/mainButtons'],
  
  render: function() {
    var content = this.template({doc: this.model})
    this.$el.html(content);
    return this;
  }
});