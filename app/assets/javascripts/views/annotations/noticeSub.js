GlossolApp.Views.NoticeSubView = Backbone.View.extend({
  template: JST['anno/notice'],
  
  render: function() {
    this.$el.html(this.template({
      notice: this.model
    }));
    
    return this;
  }
});