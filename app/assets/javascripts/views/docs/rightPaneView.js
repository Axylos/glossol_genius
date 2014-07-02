GlossolApp.Views.RightPane = Backbone.CompositeView.extend({

  template: JST['rightPane'],

  initialize: function() {
    // this.goHome();
  },

  goHome: function() {
    this.allDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });

    this._swapView('.sub-docs', this.allDocsView);
  },



  setNotice: function(msg) {
    var noticeView = new GlossolApp.Views.NoticeView({
      msg: msg
    });

    this._swapView('.sub-docs', noticeView);
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