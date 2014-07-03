GlossolApp.Routers.HomeRouter = Backbone.Router.extend({

  routes: {
    "doc/newdoc": "newDoc",
    "doc/show/:id(/)": "showDoc",
    "doc/:id(/)/newAnno": "newAnnotation"
  },

  initialize: function(options) {
    this.$leftContainer = options.pane.find('.user-docs');
    this.$rightContainer = options.pane.find('.sub-docs');
  },

  newDoc: function() {
    var newDoc = new GlossolApp.Models.Document({}, {
      user_id: GlossolApp.currUser.id
    });
    this.newDocView = new GlossolApp.Views.NewDoc({
      model: newDoc
    });
    this._leftSwapView(this.newDocView);
    this.showDocIndex();
  },

  showDoc: function(id) {
    console.log("called");
    //build left view
    var docId = parseInt(id);
    var showDoc = GlossolApp.allDocs.get(docId);
    var author = new GlossolApp.Models.User({id: showDoc.get('user_id') });
    
    showDocView = new GlossolApp.Views.ShowDoc({
      model: showDoc,
      author: author
    });

    //build right pane
    var annos = showDoc.annotations()
    annos.fetch();
    // var annosView = new GlossolApp.Views.AnnotationsView({
    var annosView = new GlossolApp.Views.Docs({
      collection: annos,
      notice: "No annotations yet!",
      title: "Annotations"
    });

    //swap views
    this._rightSwapView(annosView);
    this._leftSwapView(showDocView);
  },

  goHome: function() {

    //build left pane
    var userDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.userDocs,
      notice: "You haven't made any documents yet!",
      title: "User Docs"
    });
    this._leftSwapView(userDocsView);


    //build right pane
    this.showDocIndex();
  },

  newAnnotation: function(id) {
    var sel = rangy.getSelection();
    var docId = parseInt(id);
    
    if (sel.toString().length < 1) {
      alert("No selection to annotate!");
      GlossolApp.RootRouter.navigate("/doc/show/" + id);
    } else {
      var annotating = new GlossolApp.Models.Annotating({}, {
        sel: sel,
        sourceDoc: GlossolApp.allDocs.get(docId)
      });
      var newDoc = new GlossolApp.Models.Document({}, {
        annotatings: [annotating]
      });
      var annotationView = new GlossolApp.Views.NewAnnotationView({ 
        model: newDoc,
        sel: sel
      });
      this._rightSwapView(annotationView); 
    }
    
  },

  //utility function
  _leftSwapView: function(newView) {
    if (this.leftCurrentView) {
      this.leftCurrentView.remove();
    }

    this.$leftContainer.html(newView.render().$el);
    this.leftCurrentView = newView;
  },

  _rightSwapView: function(newView) {
    if (this.rightCurrentView) {
      this.rightCurrentView.remove();
    }

    this.$rightContainer.html(newView.render().$el);
    this.rightCurrentView = newView;
  },

  showDocIndex: function() {
    var allDocsView = new GlossolApp.Views.Docs({
      collection: GlossolApp.allDocs,
      title: "All Documents"
    });
    this._rightSwapView(allDocsView);
  }


});