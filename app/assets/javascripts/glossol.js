window.GlossolApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	this.curr_user = null;
    this.allDocs = new GlossolApp.Collections.Documents();
    // this.userDocs = new GlossolApp.Collections.Documents({
//       user: GlossolApp.curr_user
//     });
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