GlossolApp.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function(options){
    this.$navLinks = options.nav
    this.$container = options.container;
    this.$announcement = options.announcement;
  },
  
  routes: {
    "": "glossolWelcome",
    "welcome/start": "glossolSignUp",
    "welcome/return": "glossolLogin",
    "fbLogin": "fbCallback"
  },
  
  fbCallback: function() {
    alert("fb completed");
  },

  glossolWelcome: function() {
    if(this.isSignedIn) {
      this.home();
    } else {
      GlossolApp.allDocs = new GlossolApp.Collections.Documents();
      GlossolApp.allDocs.fetch();
      var welcomeView = new GlossolApp.Views.Login();
      this._swapView(welcomeView);
    }
  },

  glossolSignUp: function() {
    $('#nick').show();
		$('input[name="isUserNew"]').val(true);
    this.$announcement.text("Welcome!");
    $('#fb-butt').text("Sign up with Facebook!");
  },
  
  glossolLogin: function() {
		$('input[name="isUserNew"]').val(false);
    $('#nick').hide();
    $('#fb-butt').text("Sign in with Facebook!");
    this.$announcement.text("Welcome Back!");
  },
  
  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$container.html(newView.render().$el);
    this.currentView = newView;
  },
  
  displayErrors: function(errors) {
    var content = $('<div></div>');
    Object.keys(errors).forEach(function(error) {      
      content.append("<p>" + error + " " + errors[error].join() + "</p>");
    });
    this.$announcement.html(content);
  },
  
  home: function() {
    var content = new GlossolApp.Views.Home();
    this.$announcement.text("You Made It!");
    var navContent = JST['navContent'];
    this.$navLinks.html(navContent);
    this._swapView(content);
  },
  
  signed_in: function(callback) {
    var curr_session = new GlossolApp.Models.Session({user: null});
    curr_session.fetch({
      success: function(model, res, options) {
        
        if (res["ret"] == true) {
          GlossolApp.signed_in = true;
          GlossolApp.curr_user = res["user"]
          
        } else {
          GlossolApp.signed_in = false;
          GlossolApp.curr_user = null;
        }
        callback.call();
         
      },
      error: function(model, res, options) { GlossolApp.signed_in = false }
    });
    
  },
  
  isSignedIn: function() {
    GlossolApp.RootRouter.signed_in(function() 
      { console.log(GlossolApp.signed_in) 
    });
  }
  
  
  
  
});