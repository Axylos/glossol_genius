GlossolApp.Views.ShowDoc = Backbone.View.extend({
  template: JST['showDoc'],

  initialize: function(options) {
    this.title = options.title;
    this.author = options.author;
    this.author.fetch({ parse: true });

    this.listenTo(this.author, "sync", this.render);
  },

  events: {
    "select": function() { alert("selected"); }
  },

  render: function() {
    var that = this;

    this.$el.html(this.template({
      doc: that.model,
      author: that.author
     }));
    return this;
  }

});