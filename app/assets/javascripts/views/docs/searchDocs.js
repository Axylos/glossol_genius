GlossolApp.Views.SearchDocs = Backbone.CompositeView.extend({
   template: JST['doc/prevIndex'],
  
  initialize: function(options) {
    this.query = options.query
  },
  
  makePreviewList: function() {
    var that = this;
    this.$el.html(this.template);
    if (this.collection.length > 0) {
      this.collection.each(function(doc) {

        var author = doc.getAuthor();
        that.docView = new GlossolApp.Views.SearchDocSubview({
          query: that.query,
          model: doc,
          author: author
        });
        that.addSubView('.doc-list', that.docView);
      });
    }
  },
  
  render: function() {
    this.$el.html(this.template);
    this.makePreviewList();
    return this;
  }
});