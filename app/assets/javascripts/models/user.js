GlossolApp.Models.User = Backbone.Model.extend({

  urlRoot: "api/users",

  documents: function() {

    var user = this;
    this._documents = this._documents ||
      new GlossolApp.Subsets.UserDocuments([], {
        user: user,
        parentCollection: GlossolApp.allDocs
      });
    return this._documents
  }
});