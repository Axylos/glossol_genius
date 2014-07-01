GlossolApp.Collections.Users = Backbone.Collection.extend({
  url: "api/users",

  model: GlossolApp.Models.User
})