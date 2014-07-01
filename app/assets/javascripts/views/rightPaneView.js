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

    this.userdocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs
    });

    if (this.showDocView) this.removeSubview('.main-doc', this.showDocView);
    this.addSubView('.user-docs', this.userdocsView);
  },


});