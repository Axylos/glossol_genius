GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],

  events: {
    "click .doc-preview": function(event) { debugger; }
  },

  initialize: function() {

    var leftPaneView = new GlossolApp.Views.LeftPane();

    var rightPaneView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });

    this.listenTo(leftPaneView, "showDoc", this.showDoc)

    this.addSubView(".right-pane", rightPaneView);
    this.addSubView(".left-pane", leftPaneView);
  },

  showDoc: function() {

  }
});