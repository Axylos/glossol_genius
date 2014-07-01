GlossolApp.Views.LeftPane = Backbone.CompositeView.extend({

  template: JST['leftPane'],

  initialize: function() {
    var userdocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs
    });

    this.addSubView('.user-docs', userdocsView);
  }


});