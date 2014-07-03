GlossolApp.Views.NewAnnotationView = Backbone.CompositeView.extend({
  template: JST['doc/newAnnotation'],
  
  initialize: function(options) {
    
    this.sel = options.sel
    this.sourceText = this.sel.toString();
    
    this.makeDoc();
  },
  
  events: {
    "submit": "handleSave"
  },
  
  handleSave: function() {
    alert("Annotation Successfully Created!");
    var docId= this.model.get('annotatings')[0].get('refDoc')
    GlossolApp.RootRouter.navigate("/doc/show/" + docId);
    // GlossolApp.
    
  },
  
  makeDoc: function() {
    var annoView = new GlossolApp.Views.AnnotationSubview({
      model: this.sourceText
    });
    this.addSubView('.annote', annoView);
    var newDocView = new GlossolApp.Views.NewDoc({model: this.model});
    this.addSubView('.new-doc', newDocView);
  },
  
   //  utility function
  _swapView: function(newSelector, newView) {
    if (this.currentView) {
      this.removeSubview(this.currentSelector, this.currentView);
    }
    this.addSubView(newSelector, newView);
    this.render();

    this.currentView = newView;
    this.currentSelector = newSelector
  }
});