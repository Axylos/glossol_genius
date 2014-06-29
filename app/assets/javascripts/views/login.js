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
    var that = this;
  	event.preventDefault();
  
    var params = $(event.currentTarget).find('form').serializeJSON();
  
    if(params.isUserNew == "true") {
      var user = new GlossolApp.Models.User({user: params.user});
      user.save({}, { 
        success: this.success,
        error: this.invalid
      });
    }

  },
  
  success: function(model, res, options) {
    GlossolApp.curr_user = model;
    GlossolApp.RootRouter.home();
  },
  
  invalid: function(model, res, options) {
   GlossolApp.RootRouter.displayErrors(res.responseJSON)
  }
  
  
  
  
  
  
  
});