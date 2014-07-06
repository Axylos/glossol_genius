GlossolApp.Views.SelView = Backbone.View.extend({
  template: JST['sel/view'],
  
  initialize: function() {
    this.listenTo(GlossolApp.PubSub, "getSel", this.getSel);
  },
  
  getSel: function(options) {
    this.model = options.sel
    this.render();
  },
  
  render: function() {
    var content = this.template({sel: this.model});
    this.$el.html(content);
    return this;
  }
});