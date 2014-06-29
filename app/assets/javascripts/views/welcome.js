GlossolApp.Views.Welcome = Backbone.View.extend({
  template: JST['welcome/start'],
  
  initialize: function() {
    $('#new-user').bind('click', this.signUp);
    $('#returning-user').bind('click', this.signIn);
  },
  
  events: {
    "click #fb-butt": "signIn",
    "click #new-user": "clicker"
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)
  
    return this;
  },
  
  signIn: function(event) {
    event.preventDefault();
    $('input').text("Sign In");
    alert("clicked")
  },
  
  clicker: function(event) {
    event.preventDefault();
    alert("clicker");
  },
  
  signUp: function(event) {
    $('reg-butt').text("Sign Up");
  }
});