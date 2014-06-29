GlossolApp.Views.Login = Backbone.View.extend({
  template: JST['welcome/login'],
  
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)
  
    return this;
  },
  
  events: {
    "click submit": "login"
  },
  
  login: function(event) {
    alert("clicked")
  }
  
  
});