GlossolApp.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function(options){
    this.$navLinks = options.nav
    this.$container = options.container;
    this.$announcement = options.announcement;
  },
  
  routes: {
    "": "glossolWelcome"
  },
  
  
  glossolWelcome: function() {
    var welcomeView = new GlossolApp.Views.Welcome({
      links: this.$nav
    });
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