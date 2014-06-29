GlossolApp.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function(options){
    this.$container = options.container;
    this.$announcement = options.announcement;
  },
  
  routes: {
    "": "glossolWelcome"
  },
  
  
  glossolWelcome: function() {
    var welcomeView = new GlossolApp.Views.Welcome();
    this.$announcement.text("Welcome!");
    this._swapView(welcomeView);
  },
  
  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$container.html(newView.render().$el);
    
    this.currentView = newView;
  }
});