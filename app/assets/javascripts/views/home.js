GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],

  initialize: function(options) {

    var docNavView = new GlossolApp.Views.DocNavView();
    this.addSubView('.doc-nav', docNavView);

    this.leftPaneView = new GlossolApp.Views.LeftPane();
    this.rightPaneView = new GlossolApp.Views.RightPane();

    this.listenTo(
      GlossolApp.allDocs,
      "sync add update remove",
      this.rightPaneView.goHome());

    this.listenTo(this.leftPaneView, "showDoc", this.showDoc)

    this.addSubView(".right-pane", this.rightPaneView);
    this.addSubView(".left-pane", this.leftPaneView);

  },

  events: {
    // "click .doc-preview": "showDoc",
  },

  homer: function() {
    this.leftPaneView.goHome();
    this.rightPaneView.goHome()
  },

  showDoc: function(event) {
    //
    //
    // var annos = showDoc.annotations;
    // annos.fetch()
    // this.rightPaneView.renderAnnos(annos);
    // this.leftPaneView.renderDoc(showDoc);
  },

  newDoc: function(event) {
    this.leftPaneView.newDoc();
  },



});