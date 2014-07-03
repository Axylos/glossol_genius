GlossolApp.Views.AnnotationsView = Backbone.CompositeView.extend({
  template: JST['anno/index'],
  
  initialize: function(options) {
    this.notice = options.notice;
    this.title = options.title;
    this.makePreviewList();
  },
  
  makePreviewList: function() {
    if (this.collection.length > 0) {
      this.collection.each(function(anno) {

        var annoView = new GlossolApp.Views.PrevAnno({model: anno});
        this.addSubView('.anno-list', annoView);
      });
    } else {
      var noticeSub = $('<h2>' + this.notice + '</h2>');
      this.addSubView('.notice', noticeSub);
    }
  }
  
  
});