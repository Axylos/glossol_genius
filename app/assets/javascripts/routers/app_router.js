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
    "fbLogin": "glossolWelcome",
    "settings": "settings"
  },

  fbCallback: function() {
    this.glossolWelcome();
  },

  settings: function() {
    var settingsView = new GlossolApp.Views.SettingsView();
    this._swapView(settingsView);
  },

  glossolWelcome: function() {
    GlossolApp.RootRouter.signed_in(function() {
      if (GlossolApp.signed_in == true) {
        GlossolApp.allDocs.fetch();
        GlossolApp.RootRouter.home();
      } else {
        var welcomeView = new GlossolApp.Views.Login();
        GlossolApp.RootRouter._swapView(welcomeView);
      }
    });
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
    this.fetchDocs();

    this.$announcement.text("You Made It!");
    var navContent = JST['navContent'];
    this.$navLinks.html(navContent);

    var content = new GlossolApp.Views.Home({ nav: this.$navLinks });
    this._swapView(content);
  },

  fetchDocs: function() {
    GlossolApp.userDocs = new GlossolApp.Subsets.CurrUserDocs([], {
      parentCollection: GlossolApp.allDocs
    });
    GlossolApp.allDocs.fetch();
    GlossolApp.userDocs.fetch();

  },

  signed_in: function(callback) {
    var curr_session = new GlossolApp.Models.Session({user: null});
    curr_session.fetch({
      success: function(model, res, options) {

        if (res["ret"] == true) {
          GlossolApp.signed_in = true;
          GlossolApp.currUser = new GlossolApp.Models.User(res["user"]);

        } else {
          GlossolApp.signed_in = false;
          GlossolApp.currUser = null;
        }
        callback.call();

      },
      error: function(model, res, options) { GlossolApp.signed_in = false }
    });

  },

  isSignedIn: function() {
    var ret = false;
    GlossolApp.RootRouter.signed_in(function() {
      if (GlossolApp.signed_in == true) {
        return ret = true;
      }
    });
    return ret;
  }
});