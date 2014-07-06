GlossolApp.Views.DocPrevView = Backbone.CompositeView.extend({
   template: JST['doc/prevIndex'],
  
  initialize: function() {
    this.makePreviewList();
    this.listenTo(this.collection, "sync", this.makePreviewList);
    this.collection.fetch();
    
  },
  
  makePreviewList: function() {
    var that = this;
    this.$el.html(this.template);
    if (this.collection.length > 0) {
      this.collection.each(function(doc) {

        var author = doc.getAuthor();
        that.docView = new GlossolApp.Views.DocSubview({
          model: doc,
          author: author
        });
        that.addSubView('.doc-list', that.docView);
      });
    }
  },
  
  render: function() {
    var content = this.template;
    this.$el.html(content);
    this.makePreviewList;
    
    return this;
  }
});