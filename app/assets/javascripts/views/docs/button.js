GlossolApp.Views.DocButtons = Backbone.View.extend({
  template: JST['doc/mainButtons'],
  
  render: function() {
    isCurrUser = GlossolApp.currUser.id == this.model.get('user_id');
    
    var content = this.template({doc: this.model, isUser: isCurrUser})
    this.$el.html(content);
    return this;
  }
});