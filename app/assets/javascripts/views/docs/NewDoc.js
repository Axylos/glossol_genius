GlossolApp.Views.NewDoc = Backbone.CompositeView.extend({
  template: JST['doc/new'],

  events: {
    "keyup textarea": "newlines", 
    "submit": "makeDoc"
  },

  initialize: function() {
    this.listenTo(this.model, "save sync", this.handleSave)
  },


  newlines: function(event) {
    var value = $(event.target).val().replace(/\n/g, '&#13');
    $("textarea").html(value);
  },

  render: function() {
    this.$el.html(this.template({ doc: this.model }));
    return this;
  },

  makeDoc: function(event) {
    event.preventDefault();
    var docParams = $(event.target).serializeJSON();
    this.model.set(docParams);
    this.model.save({}, {
      success: function(model, res) {
        console.log("doc added")
      },
      error: function(model, res) {
        console.log("req failed!")
      }
    });
  },

  handleSave: function() {
    //handle save and get rid of current model
    var that = this;
    GlossolApp.userDocs.add(this.model);
    this.model.off();

    //set up new model and render page
    this.model = new GlossolApp.Models.Document({}, {
      user_id: GlossolApp.currUser.id
    });
    this.listenTo(this.model, "sync save", this.handleSave);

    this.render();
  }
})
