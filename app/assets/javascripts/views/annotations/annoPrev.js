GlossolApp.Views.AnnotationsView = Backbone.CompositeView.extend({
  template: JST['anno/index'],
  
  initialize: function(options) {
    this.notice = options.notice;
    this.title = options.title;
    this.makePreviewList();
    this.listenTo(this.collection, "sync", this.makePreviewList);
    this.showDocView = options.showDocView;
  },
  
  events: {
    "mouseover .doc-preview": "highlightAnno"
  },
  
  highlightAnno: function(event) {
  },
  
  makePreviewList: function() {
    var that = this;
    this.$el.html(this.template());
    if (this.collection.length > 0) {
      this.collection.each(function(anno) {
        var annoView = new GlossolApp.Views.AnnotationSubview({
          model: anno
        });
        
        that.addSubView('.anno-list', annoView);
      });
    } else {
      // var noticeSub = $('<h2>' + this.notice + '</h2>');
      var noticeSub = new GlossolApp.Views.NoticeSubView({
        model: this.notice
      });
      this.addSubView('.notice', noticeSub);
      
    }
  }
  
  
});