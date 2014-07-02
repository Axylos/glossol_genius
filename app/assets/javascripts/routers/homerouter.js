GlossolApp.Routers.HomeRouter = Backbone.Router.extend({

  routes: {
    "doc/newdoc": "newDoc",
    "doc/show/:id(/)": "showDoc"
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

  showDoc: function(id) {
    var docId = parseInt(event.target.id);
    var showDoc = GlossolApp.allDocs.get(docId);

    showDocView = new GlossolApp.Views.ShowDoc({
      model: showDoc
    });

    this._leftSwapView(this.showDocView);
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