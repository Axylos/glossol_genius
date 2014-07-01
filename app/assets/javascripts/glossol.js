window.GlossolApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	this.curr_user = null;
    this.allDocs = new GlossolApp.Collections.Documents([], {user: {id: ""}});
    
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


// var welcome = new GlossolHellYeah.Views.Welcome();