GlossolApp.Views.NewDoc = Backbone.View.extend({
  template: JST['doc/new'],

  events: {
    "submit": "makeDoc"
  },

  initialize: function() {
    this.listenTo(this.model, "save sync", this.handleSave)
  },

  render: function() {
    this.$el.html(this.template({ doc: this.model }));
    return this;
  },

  makeDoc: function(event) {
    event.preventDefault();
    var docParams = $(event.target).serializeJSON();
    this.model.save(docParams["document"], {
      success: function(model, res) {
        console.log("doc added")
      },
      error: function(model, res) {
        console.log("req failed!")
      }
    });
  },

  handleSave: function() {
    var that = this;
    GlossolApp.userDocs.add(this.model);

    var res = confirm("Add Another Document?");
    if (res == true) {
      that.Home();
    } else {
      that.anotherNew();
    }
  }
})