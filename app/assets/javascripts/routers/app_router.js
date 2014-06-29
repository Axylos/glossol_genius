GlossolApp.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function(options){
    this.$navLinks = options.nav
    this.$container = options.container;
    this.$announcement = options.announcement;
  },
  
  routes: {
    "": "glossolWelcome",
    "welcome/start": "glossolSignUp",
    "welcome/return": "glossolLogin"
  },
  
  glossolWelcome: function() {
    var welcomeView = new GlossolApp.Views.Login();
    this._swapView(welcomeView);
  	
  },
  
  
  glossolSignUp: function() {
    $('#nick').show();
		$('input[name="userIsNew"]').val(true);
    this.$announcement.text("Welcome!");
    $('#fb-butt').text("Sign up with Facebook!");
    
//     this._swapView(welcomeView);
  },
  
  glossolLogin: function() {
		$('input[name="userIsNew"]').val(false);
    $('#nick').hide();
    $('#fb-butt').text("Sign in with Facebook!");
    // var loginView = new GlossolApp.Views.Login();
    this.$announcement.text("Welcome Back!");
  },
  
  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$container.html(newView.render().$el);
    
    this.currentView = newView;
  }
  
  
});