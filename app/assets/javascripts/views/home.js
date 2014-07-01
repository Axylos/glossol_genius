GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],

  initialize: function(options) {

    var that = this;
    $('#home').click(function() {
      that.homer();
    });

    this.$nav = $(options.nav);
    this.$home = this.$nav.find('#home');

    this.leftPaneView = new GlossolApp.Views.LeftPane();

    this.rightPaneView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });

    this.listenTo(this.leftPaneView, "showDoc", this.showDoc)

    this.addSubView(".right-pane", this.rightPaneView);
    this.addSubView(".left-pane", this.leftPaneView);
  },

  homer: function() {
    this.leftPaneView.goHome(this.leftPaneView);
  },

  events: {
    "click .doc-preview": "showDoc"

  },

  showDoc: function(event) {
    var docId = parseInt(event.target.id);
    var showDoc = GlossolApp.allDocs.get(docId);
    this.leftPaneView.renderDoc(showDoc);
  }

});