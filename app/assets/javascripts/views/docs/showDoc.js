GlossolApp.Views.ShowDoc = Backbone.CompositeView.extend({
  template: JST['showDoc'],

  initialize: function(options) {
    this.title = options.title;
    this.author = options.author;

    this.author.fetch({ parse: true });

    this.listenTo(this.author, "sync", this.show);    
    this.listenTo(this.model, "sync", this.show);
    
    this.listenTo(GlossolApp.PubSub, "highlighted", this.receiveHighlight);
    this.listenTo(GlossolApp.PubSub, "unhighlight", this.removeHighlight);
    this.listenTo(GlossolApp.PubSub, "addRefs", this.addRefMode);
  },

  events: {
    "mouseup .doc-text": "getText",
    "click #new-ref": "addRefMode"
  },
  
  receiveHighlight: function(event) {
    var text = this.$el.find('.doc-text');
    var str = text.text();
    
    var newString = str.substring(0, event.text[0] + 1) + 
      ('<span class="hilite">') + 
      (str.substring(event.text[0] + 1, event.text[1] + 1)) + 
      ('</span>').concat(str.substring(event.text[1] + 1));
    this.$el.find('.doc-text').html(newString);
    console.log(event.text, str.length);
  },
  
  removeHighlight: function() {
    $('span').contents().unwrap();
  },

  show: function() {
    console.log("called");
    var that = this;
    this.$el.html(this.template({
      model: that.model,
      author: that.author
    }));
    
    this.fullDocView = new GlossolApp.Views.FullDocView({
      model: this.model,
      author: this.author
    });
    
    
    this.buttonsView = new GlossolApp.Views.DocButtons({model: this.model});
    
    this.addSubView('.full-doc', this.fullDocView);
    this.addSubView('.buttons', this.buttonsView);
  },
  
  addRefMode: function(event) {
    event.preventDefault();
    
    this.buttonsView.remove();
    var refs = this.model.get('references');
    
    refColl = GlossolApp.Subsets.References.prototype.buildRefColl(refs);
    
    this.refsView = new GlossolApp.Views.ReferencesIndexView({
      collection: refColl,
      notice: "No references yet!",
      title: "References"
    });
    
    this.refButtonsView = new GlossolApp.Views.DocRefButtons({
      model: this.model
    });
    
    this.addSubView('.buttons', this.refButtonsView);
    this.addSubView('.existing-refs', this.refsView);
    
    GlossolApp.HomeRouter.navigate("documents/" + this.model.id + "/addRefs", { 
      trigger: true 
    });
   }
});