window.GlossolApp = {
  Models: {},
  Collections: {},
  Subsets: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	this.currUser = null;
    this.allDocs = new GlossolApp.Collections.Documents([], {user: ""});
    this.RootRouter = new GlossolApp.Routers.AppRouter({
      container: $('.backbone'),
      nav: $('.enter-links'),
      announcement: $('.announce')
    })
    Backbone.history.start();
  }
};



$(document).ready(function(){
  GlossolApp.initialize();
});