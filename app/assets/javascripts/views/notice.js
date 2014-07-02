GlossolApp.Views.NoticeView = Backbone.View.extend({
  template: JST['utilities/notice'],

  initialize: function(options) {
    this.msg = options.msg;
  },

  render: function() {
    var renderedContent = this.template({ msg: this.msg});
    this.$el.html(renderedContent);
    return this;
  }
});
