GlossolApp.Views.Login = Backbone.View.extend({
  template: JST['welcome/login'],
  
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)
  
    return this;
  },
  
  events: {
    "submit": "login"
  },
  
  login: function(event) {
	event.preventDefault();
  
  var params = $(event.currentTarget).find('form').serializeJSON();
  
  if(params.isUserNew == "true") {
    var user = new GlossolApp.Models.User({user: params.user});
    user.save({}, { 
      success: this.success,
      error: this.success
    });
  }
	// var session = new GlossolApp.Models.Session({params: params});
//   session.save({}, { success: this.success });
  },
  
  success: function(model, res, options) {
    debugger
    alert("whoo!");
  }
  
  
});