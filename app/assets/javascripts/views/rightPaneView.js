GlossolApp.Views.RightPane = Backbone.CompositeView.extend({

  template: JST['rightPane'],

  initialize: function() {
    this.goHome();
    var that = this;
    $('#home').click(function() {
      that.goHome();
    });
  },

  goHome: function() {
    this.allDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });

    this._swapView('.sub-docs', this.allDocsView);
  },

  renderAnnos: function(annos) {
    this.annosView = new GlossolApp.Views.Docs({
      collection: annos
    });

    this._swapView('.sub-docs', this.annosView);
  },

  _swapView: function(newSelector, newView) {
    if (this.currentView) {
      this.removeSubview(this.currentSelector, this.currentView);
    }
    this.addSubView(newSelector, newView);
    this.render();

    this.currentView = newView;
    this.currentSelector = newSelector
  }
});