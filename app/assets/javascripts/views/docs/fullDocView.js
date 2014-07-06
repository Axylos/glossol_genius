GlossolApp.Views.FullDocView = Backbone.View.extend({
  template: JST['doc/fullView'],
  
  initialize: function(options) {
    this.author = options.author
  },
  
  render: function() {
    var that = this;
    var content = this.template({
      doc: that.model,
      author: that.author
    });
    this.$el.html(content);
    return this;
  }
});