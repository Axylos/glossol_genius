GlossolApp.Views.SelectionView = Backbone.View.extend({
  template: JST['sel/display'],
  
  initialize: function() {
    this.listenTo(GlossolApp.PubSub, "getSel", this.parseSel)
  },
  
  parseSel: function(sel) {
    this.model = sel;
    this.render();
  },
  
  render: function() {
    if (this.model) {
      var content = this.template({sel: this.model.sel});
      this.$el.html(content);
    }
    return this;
  }
})