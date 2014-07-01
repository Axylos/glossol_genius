GlossolApp.Models.User = Backbone.Model.extend({

  urlRoot: "api/users",

  documents: function() {

    var user = this;
    this._documents = this._documents ||
      new GlossolApp.Collections.Documents([], { user: user });
    return this._documents
  }
});