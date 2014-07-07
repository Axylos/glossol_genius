GlossolApp.Models.Search = Backbone.Model.extend({
  
  url: function() {
    return "api/search/" + this.query
  },
  
  initialize: function(options) {
    this.query = options.query;
  }
});