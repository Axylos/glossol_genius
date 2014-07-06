GlossolApp.Views.SelectionView = Backbone.View.extend({
  template: JST['sel/display'],
  
  initialize: function() {
    this.listenTo(GlossolApp.PubSub, "getSel", this.parseSel)
    this.listenTo(GlossolApp.PubSub, "addRef", this.createRef)
  },
  
  parseSel: function(sel) {
    this.model = sel;
    this.render();
  },
  
  render: function() {
    if (this.model) {
      var content = this.template({sel: this.model.sel});
      this.$el.html(content);
    }
    return this;
  },
  
  createRef: function(options) {
    var doc = options.model;
    var sel = this.model.sel;
    var refColl = options.collection;

    var newRef = new GlossolApp.Models.RefNote({
      source_document_id: sel.get('doc').id,
      source_text: sel.get('source_text')
      }, {
        noteId: doc.id
    });
    
    var addRefToColl = function(model, res) {
      refColl.add({
        doc: sel.get('doc'),
        source_text: sel.get('source_text')
      })
    };
   
    newRef.save({}, {
      success: addRefToColl,
      error: function(model, res) { console.log(res); }
    });
  }
})