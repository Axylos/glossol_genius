GlossolApp.Views.RightPane = Backbone.CompositeView.extend({

  template: JST['rightPane'],

  setNotice: function(msg) {
    var noticeView = new GlossolApp.Views.NoticeView({
      msg: msg
    });
  },
});