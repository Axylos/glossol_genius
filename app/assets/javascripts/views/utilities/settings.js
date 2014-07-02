GlossolApp.Views.SettingsView = Backbone.View.extend({
  template: JST['utilities/settings'],

  render: function() {

    this.$el.html(this.template());
    return this;
  },


  events: {
    "submit": "updateUser"
  },

  updateUser: function(event) {
    event.preventDefault();
    debugger
  }
});