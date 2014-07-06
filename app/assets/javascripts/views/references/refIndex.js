GlossolApp.Views.ReferencesIndexView = Backbone.CompositeView.extend({
  template: JST['ref/index'],
  
  initialize: function(options) {
    this.notice = options.notice    
    this.makePreviewList();
    this.listenTo(this.collection, "sync", this.makePreviewList);
  },
  
  makePreviewList: function() {
    var that = this;
    this.$el.html(this.template());
    if (this.collection.length > 0) {
      this.collection.each(function(ref) {
        var refView = new GlossolApp.Views.RefSubview({
          model: ref
        });
        that.addSubView('.ref-list', refView);
      });
      
    } else {
      var noticeSub = new GlossolApp.Views.NoticeSubView({
        model: this.notice
      });
      this.addSubView('.notice', noticeSub);
    }
  }
});