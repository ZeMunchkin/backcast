var VideoListView = Backbone.View.extend({
  
  initialize: function () {
    // on change in collection invoke render, and set this
    this.collection.on('all', this.render, this);
  },


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // console.log(this.$el);
    this.collection.forEach(this.renderVideos, this);
    return this.$el;
  },
  
  renderVideos: function (video) {
    // call a new VideoListEntryView
    var newVideoView = new VideoListEntryView({model: video});
    // append to this node, the return from the render of the VLEV
    this.$el.append(newVideoView.render());    
    /*var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render());
    */
  },

  template: templateURL('src/templates/videoList.html'),
  
  

});
 