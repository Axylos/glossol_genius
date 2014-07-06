GlossolApp.Subsets.References = Backbone.Subset.extend({
  initialize: function(models, options) {
    this.sourceDoc = options.sourceDoc;
  },

  url: function() {
    return "api/documents/" + this.sourceDoc.id + "/references"
  },

  model: GlossolApp.Models.Document,
  
  buildRefColl: function(refsArray) {
    var refObjs = refsArray.map(function(ref) { 
      return {
        doc: GlossolApp.allDocs.get(ref.source_document_id),
        source_text: ref.source_text
      }
    });
    
    return referenceColl = new GlossolApp.Subsets.References(refObjs, { 
      parentCollection: GlossolApp.allDocs
    });
  }
})