window.GlossolHellYeah = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new GlossolHellYeah.Routers.GlossolHellYeahRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  GlossolHellYeah.initialize();
});


// var welcome = new GlossolHellYeah.Views.Welcome();