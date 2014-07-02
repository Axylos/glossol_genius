GlossolApp.Views.SettingsView = Backbone.View.extend({

  template: JST['utilities/settings'],

  initialize: function() {
    this.listenTo(this.model, "sync save update remove", function() {
      $('h1').html('<div>User successfully updated!</div>');
    });
  },

  render: function() {
    this.$el.html(this.template({user: this.model }));
    return this;
  },

  events: {
    "submit": "updateUser"
  },

  updateUser: function(event) {
    event.preventDefault();
    params = $(event.target).serializeJSON()["user"];
    this.model.save(params, {
      error: function(model, res) { $('h1').html("<div>Error Saving!</div>") }
    });
  }
});