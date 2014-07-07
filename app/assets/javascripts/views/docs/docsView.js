GlossolApp.Views.Docs = Backbone.View.extend({

  template: JST['docs'],

  tagName: 'ul',

  initialize: function(options) {
    this.listenTo(this.collection, 'sync create add remove delete update', this.render);
    this.notice = options.notice;
    this.title = options.title;
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    var that = this;

    if (this.collection.length > 0) {
      this.collection.each(function(doc) {

        //ugly iteration TODO: move to CompositeView
        var view = new GlossolApp.Views.PrevDoc({model: doc});
        that.$el.append(view.render().$el);
      });
    } else {

      this.addNotice();
    }

    if (this.title) this.addTitle(this.title);
    return this;
  },

  addNotice: function() {
    this.$el.html("<div>" + this.notice + "</div>");
  },

  addTitle: function(title) {
    this.$el.prepend('<div class="title">' + this.title + "</div>");
  }
})