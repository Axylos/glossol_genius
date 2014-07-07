GlossolApp.Views.ReferencesIndexView = Backbone.CompositeView.extend({
  template: JST['ref/index'],
  
  initialize: function(options) {
    this.notice = options.notice    
    this.makePreviewList();
    this.listenTo(this.collection, "sync add", this.makePreviewList);
  },
  
  events: {
    "click #make-ref": "addNewReference"
  },
  
  makePreviewList: function() {
    var that = this;
    this.$el.html(this.template());
    if (this.collection.length > 0) {
      this.collection.each(function(ref) {
        that.refView = new GlossolApp.Views.RefSubview({
          model: ref
        });
        that.addSubView('.ref-list', that.refView);
      });
      
    } else {
      var noticeSub = new GlossolApp.Views.NoticeSubView({
        model: this.notice
      });
      this.addSubView('.notice', noticeSub);
    }
    
    this.refButtonsView = new GlossolApp.Views.DocRefButtons({
      model: that.model
    });
    
    this.addSubView('.buttons', that.refButtonsView);
  },
  
  addNewReference: function(event) {
    event.preventDefault();
    
    GlossolApp.PubSub.trigger("addRef", {
      model: this.model,
      collection: this.collection
    });
  }
});