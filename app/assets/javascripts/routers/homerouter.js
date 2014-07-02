GlossolApp.Routers.HomeRouter = Backbone.Router.extend({

  routes: {
    "doc/newdoc": "newDoc"
  },



  initialize: function(options) {
    this.$leftContainer = options.pane.find('.user-docs');
    this.$rightContainer = options.pane.find('.sub-docs');
  },

  newDoc: function() {
    var newDoc = new GlossolApp.Models.Document({}, {
      user_id: GlossolApp.currUser.id
    });
    this.newDocView = new GlossolApp.Views.NewDoc({
      model: newDoc
    });

    this._leftSwapView(this.newDocView);
  },

  home: function() {
    alert("called");
    //left pane
    userDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs,
      notice: "You haven't made any documents yet!"
    });
    this._leftSwapView(userDocsView);

    //right pane
    allDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });
    this._rightSwapView(allDocsView);
    this.$leftContainer = $('.user-docs');
    this.$rightContainer = $('.sub-docs');
  },


  //utility function
  _leftSwapView: function(newView) {
    if (this.leftCurrentView) {
      this.leftCurrentView.remove();
    }

    this.$leftContainer.html(newView.render().$el);
    this.leftCurrentView = newView;
  },

  _rightSwapView: function(newView) {
    if (this.rightCurrentView) {
      this.rightCurrentView.remove();
    }

    this.$rightContainer.html(newView.render().$el);
    this.rightCurrentView = newView;
  }


});