GlossolApp.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function(options){
    this.$navLinks = options.nav
    this.$container = options.container;
    this.$announcement = options.announcement;
  },
  
  routes: {
    "": "glossolWelcome",
    "welcome/start": "glossolWelcome",
    "welcome/return": "glossolLogin"
  },
  
  
  glossolWelcome: function() {
    $('#nick').show();
    // var welcomeView = new GlossolApp.Views.Welcome();
    this.$announcement.text("Welcome!");
    $('#fb-butt').text("Sign up with Facebook!");
    
//     this._swapView(welcomeView);
  },
  
  glossolLogin: function() {
    $('#nick').hide();
    $('#fb-butt').text("Sign in with Facebook!");
    // var loginView = new GlossolApp.Views.Login();
    this.$announcement.text("Welcome Back!");
//     this._swapView(loginView);
  },
  
  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$container.html(newView.render().$el);
    
    this.currentView = newView;
  }
  
  
});