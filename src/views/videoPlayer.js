var VideoPlayerView = Backbone.View.extend({
  
  initialize: function () {
    
    // set selected model property to be first model in collection
    this.selectedModel = this.collection.at(0);

    // create a watch for select on a certain model to be triggered
    this.collection.on('select', function (model) {
      // clear player view
      this.$el.empty();
      // update selected model property with model argument
      this.selectedModel = model;
      // re-render on that model
      // append to the appropriate app node
      this.$el.append(this.render());
    }, this);  
    
    // re-render when collection is reset
    this.collection.on('sync', function () {
      this.collection.at(0).select();
    }, this);
  },

  template: templateURL('src/templates/videoPlayer.html'),

  render: function() {
    // debugger;
    //specifically use the selected model property and run through template
    this.$el.html(this.template(this.selectedModel.attributes));
    //return the updated $el
    return this.$el;
  }


});
