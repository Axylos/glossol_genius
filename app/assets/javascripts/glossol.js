window.GlossolApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new GlossolApp.Routers.AppRouter({
      container: $('.backbone'),
      nav: $('enter-links'),
      announcement: $('.announce')
    });
	this.curr_user = null;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  GlossolApp.initialize();
});


// var welcome = new GlossolHellYeah.Views.Welcome();