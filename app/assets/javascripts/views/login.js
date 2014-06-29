GlossolApp.Views.Login = Backbone.View.extend({
  template: JST['welcome/login'],
  
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent)
  
    return this;
  },
  
  events: {
    "submit": "login"
  },
  
  login: function(event) {
	event.preventDefault();
    var params = $(event.currentTarget).find('form').serializeJSON();
	var session = new GlossolApp.Models.Session({params: params});
	
	session.save({
		success: function(res) { alert("success!");}
	});
	
	
  }
  
  
});