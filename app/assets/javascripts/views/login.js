GlossolApp.Views.Login = Backbone.View.extend({
  template: JST['welcome/login'],

  initialize: function(options) {
    $('.enter-links #demo-user').click(this.demoItUp);
  },


  //All of this is insane.  TODO: Move static page stuff into Rails
  //justify it by adding public index of recent docs

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)

    return this;
  },

  demoItUp: function() {
    var userParams = {
        email: "demo@demo.com",
        password: "drowssap"
      };

    var session = new GlossolApp.Models.Session({
      user: userParams
    });

    session.save({}, {
      success: GlossolApp.Views.Login.prototype.sessionSuccess,
      error: GlossolApp.Views.Login.prototype.credentialsInvalid
    });
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
        success: this.userSuccess,
        error: this.userInvalid
      });

    } else {
      delete params.user.nick;
      var session = new GlossolApp.Models.Session({user: params.user});
      session.save({}, {
        success: this.sessionSuccess,
        error: this.credentialsInvalid
      });
    }

  },

  userSuccess: function(model, res, options) {
    GlossolApp.currUser = new GlossolApp.Models.User(model);
    GlossolApp.RootRouter.home();
  },

  userInvalid: function(model, res, options) {
   GlossolApp.RootRouter.displayErrors(res.responseJSON)
  },

  sessionSuccess: function(model, res, options) {
    GlossolApp.currUser = new GlossolApp.Models.User(res);
    GlossolApp.RootRouter.home();
  },

  credentialsInvalid: function(model, res, options) {
    GlossolApp.RootRouter.displayErrors({error: ["Invalid Credentials!"]});
  }

});