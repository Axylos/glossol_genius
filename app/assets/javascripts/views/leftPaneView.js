GlossolApp.Views.LeftPane = Backbone.CompositeView.extend({

  template: JST['leftPane'],

  initialize: function() {
    this.goHome();
    var that = this;
    $('#home').click(function() {
      that.goHome();
    });
  },

  goHome: function() {

    this.userdocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs
    });

    if (this.showDocView) this.removeSubview('.main-doc', this.showDocView);
    this.addSubView('.user-docs', this.userdocsView);
  },

  events: {
    "click .doc-preview": "renderDoc"
  },

  renderDoc: function(showDoc) {
    var docId = parseInt(event.target.id);
    var showDoc = GlossolApp.allDocs.get(docId);
    this.showDocView = new GlossolApp.Views.ShowDoc({
      model: showDoc
    });

    this.removeSubview('.user-docs', this.userdocsView);
    this.addSubView('.main-doc', this.showDocView);
    this.render();
  },

  showDoc: function(event) {
    this.leftPaneView.renderDoc(showDoc);
  }


});