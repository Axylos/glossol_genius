Backbone.CompositeView = Backbone.View.extend({

  addSubView: function (selector, subview) {
    this.subviews(selector).push(subview);

    this.attachSubview(selector, subview.render());
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);

    subview.delegateEvents();
  },

  attachSubviews: function() {
    var view = this;

    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) { subview.remove(); });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    subviews.splice(subviews.indexOf(subview), 1)
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector]
    }
  },

  render: function() {
    var that = this;
    var $content = $(this.template());

    this.$el.html($content);
    this.attachSubviews();

    return this;
  }

});