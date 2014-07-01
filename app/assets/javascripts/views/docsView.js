GlossolApp.Views.Docs = Backbone.View.extend({

  template: JST['docs'],

  tagName: 'ul',

  initialize: function(options) {
    this.listenTo(this.collection, 'sync create add remove delete update', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    var that = this;
    this.collection.each(function(doc) {


      //ugly iteration
      var view = new GlossolApp.Views.PrevDoc({model: doc});
      that.$el.append(view.render().$el);
    })


    return this;
  }
})