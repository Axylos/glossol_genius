GlossolApp.Routers.HomeRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.home = options.home;
  },

  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.$container.html(newView.render().$el);
    this.currentView = newView;
  },

  routes: {
    "click .doc-preview": "showDoc"
  },

  events: {
    "click .home": function() { alert("clicked"); },
    "click .doc-preview": "showDoc"
  },

  showDoc: function(event) {
    var docId = parseInt(event.currentTarget.id);
    var showDoc = GlossolApp.allDocs.get(docId);
    debugger
    this.leftPaneView.renderDoc(showDoc);
  }


})