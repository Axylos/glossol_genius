GlossolApp.Views.ShowDoc = Backbone.View.extend({
  template: JST['showDoc'],

  render: function() {
    var that = this;
    this.$el.html(this.template({ doc: that.model }));

    return this;
  }

});