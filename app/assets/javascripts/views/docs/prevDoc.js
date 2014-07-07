GlossolApp.Views.PrevDoc = Backbone.View.extend({
  template: JST['prevDoc'],
  
  initialize: function() {
    this.author = this.model.getAuthor();
    this.listenTo(this.author, "sync", this.render);
    this.author.fetch();
  },

  tagName: 'li',

  render: function() {
    var content = this.template({
      doc: this.model,
      author: this.author
    });
    this.$el.html(content);
    return this;
  }
});