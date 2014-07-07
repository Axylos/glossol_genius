GlossolApp.Views.UserShowView = Backbone.CompositeView.extend({
  template: JST['user/show'],
  
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.collection.fetch();
  },
  
  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    
    this.addDocs();
    return this;
  },
  
  addDocs: function() {
    var userDocsView = new GlossolApp.Views.Docs({
      collection: this.collection,
      notice: "This user hasn't made any documents yet!",
      title: "User Docs"
    });

    this.addSubView('.user-show-docs', userDocsView);
  }
});