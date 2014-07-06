GlossolApp.Routers.HomeRouter = Backbone.Router.extend({

  routes: {
    "doc/newdoc": "newDoc",
    "doc/show/:id(/)": "showDoc",
    "doc/:id(/)/newAnno": "newAnnotation",
    "doc/:id(/)/showRefs": "showRefs",
    "documents/:id(/)/addRefs": "addRefsIndex"
  },

  initialize: function(options) {
    this.$leftContainer = options.pane.find('.user-docs');
    this.$rightContainer = options.pane.find('.sub-docs');
  },
  
  showRefs: function(id) {
    var docStuff = this.buildDoc(id);
    var refs = docStuff.doc.get('references');
    
    var refColl = GlossolApp.Subsets.References.prototype.buildRefColl(refs)
    
    var refsView = new GlossolApp.Views.ReferencesIndexView({
      model: docStuff.doc,
      collection: refColl,
      notice: "No references yet!",
      title: "References"
    });
    
    this._rightSwapView(refsView);
    this._leftSwapView(docStuff.view);
  },
  
  addRefsIndex: function(id) {
	var docId = parseInt(id);
	var noteDoc = GlossolApp.allDocs.get(docId);
	
	var newRefIndex = new GlossolApp.Views.NewRefIndex({
		model: noteDoc,
    collection: GlossolApp.allDocs
	});
  
	this._rightSwapView(newRefIndex);
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
  
  buildDoc: function(id) {
    var docId = parseInt(id);
    var showDoc = GlossolApp.allDocs.get(docId);
    var author = new GlossolApp.Models.User({id: showDoc.get('user_id') });
    
    showDocView = new GlossolApp.Views.ShowDoc({
      model: showDoc,
      author: author
    });
    
    return { view: showDocView, doc: showDoc }
  },

  showDoc: function(id) {
    console.log("called");
    //build left view
    
    var docStuff = this.buildDoc(id);
    
    //build right pane
    var annos = docStuff.doc.annotations()
    annos.fetch();
    // var annosView = new GlossolApp.Views.AnnotationsView({
    var annosView = new GlossolApp.Views.AnnotationsView({
      collection: annos,
      notice: "No annotations yet!",
      title: "Annotations"
    });
    //swap views
    this._rightSwapView(annosView);
    this._leftSwapView(docStuff.view);
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
      
      var annotating = GlossolApp.Models.Annotating.prototype.buildNote(
        sel,
        docId
      );
      
      GlossolApp.PubSub.trigger("highlighted", {
        text: annotating.get('source_text')
      });
      
      var newDoc = new GlossolApp.Models.Document({}, {
        user_id: GlossolApp.currUser.id
      });
      
      newDoc.set({references: [annotating]});
      
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