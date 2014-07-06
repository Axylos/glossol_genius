GlossolApp.Views.DocRefButtons = Backbone.View.extend({
  template: JST['ref/buttons'],
  
  initialize: function() {
    this.isCurrUser = this.model.id == GlossolApp.currUser.id;
  },
  
  render: function() {
    this.$el.html(this.template({isUser: isCurrUser}))
    return this;
  }
});