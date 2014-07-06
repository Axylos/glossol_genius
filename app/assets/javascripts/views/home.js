GlossolApp.Views.Home = Backbone.CompositeView.extend({

  template: JST['home'],
  
  initialize: function(options) {

    var docNavView = new GlossolApp.Views.DocNavView();
    this.addSubView('.doc-nav', docNavView);
    
    var selectionView = new GlossolApp.Views.SelectionView();
    this.addSubView('.sel-box', selectionView);

    this.leftPaneView = new GlossolApp.Views.LeftPane();
    this.rightPaneView = new GlossolApp.Views.RightPane();

    this.addSubView(".right-pane", this.rightPaneView);
    this.addSubView(".left-pane", this.leftPaneView);
    
  }  
});