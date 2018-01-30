var VideoPlayerView = Backbone.View.extend({
  
  initialize: function () {
    // call render on the first model in the collection
    // this.render(this.collection.at(0));
    // create a watch for select on a certain model to be triggered
    this.collection.on('select', function (model) {
      // clear player view
      this.render();
      // hold to the model that was selected
      // re-render on that model
      // append to the appropriate app node
    }, this);  
  },


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
