GlossolApp.Views.LeftPane = Backbone.CompositeView.extend({

  template: JST['leftPane'],

  initialize: function() {
    var docNavView = new GlossolApp.Views.DocNavView();
    this.addSubView('.doc-nav', docNavView);
    this.goHome();
  },

  goHome: function() {
    this.userDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs,
      notice: "You haven't made any documents yet!"
    });
    this._swapView('.user-docs', this.userDocsView);
  },

  renderDoc: function(showDoc) {
    this.showDocView = new GlossolApp.Views.ShowDoc({
      model: showDoc
    });

    this._swapView('.main-doc', this.showDocView);
  },

  showDoc: function(event) {
    this.leftPaneView.renderDoc(showDoc);
  },

  _swapView: function(newSelector, newView) {
    if (this.currentView) {
      this.removeSubview(this.currentSelector, this.currentView);
    }
    this.addSubView(newSelector, newView);
    this.render();

    this.currentView = newView;
    this.currentSelector = newSelector
  },


});