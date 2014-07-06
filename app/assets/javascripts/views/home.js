GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],
  
  events: {
    "mouseup": "triggerSel"
  },

  initialize: function(options) {

    var docNavView = new GlossolApp.Views.DocNavView();
    this.addSubView('.doc-nav', docNavView);

    this.leftPaneView = new GlossolApp.Views.LeftPane();
    this.rightPaneView = new GlossolApp.Views.RightPane();

    this.addSubView(".right-pane", this.rightPaneView);
    this.addSubView(".left-pane", this.leftPaneView);
  },
  
  triggerSel: function() {
    var sel = rangy.getSelection();
    this.$('.sel-show').html(sel.toString());
  }
});