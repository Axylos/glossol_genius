GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],

  events: {
    "click .doc-preview": function() { alert("you clicked a li!"); }
  },

  initialize: function() {

    var leftPaneView = new GlossolApp.Views.LeftPane();

    // var leftPaneView = new GlossolApp.Views.Docs({
//       collection: GlossolApp.userDocs
//     });

    var rightPaneView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs
    });

    this.addSubView(".right-pane", rightPaneView);
    this.addSubView(".left-pane", leftPaneView);
  }


});