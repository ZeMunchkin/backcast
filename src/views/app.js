var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    
    this.videos.search('dog');
    
    //append the rendered content to the body
    this.render();
    //instantiate new video player view
    this.playerView = new VideoPlayerView({
      //define the el for the player
      el: this.$('.player'),
      //pass in the collection
      collection: this.videos,
    }).render();
    
    this.searchView = new SearchView({
      //define the el
      el: this.$('.search'),
      //pass in the collection
      collection: this.videos,
    }).render();
    
    //create video list view
    this.videoList = new VideoListView({
      //define the el
      el: this.$('.list'),
      //pass in collection
      collection: this.videos,
    }).render();
      
    
  },
  
  //create template function using given template
  template: templateURL('src/templates/app.html'),


  render: function() {
    this.$el.html(this.template());
    //return the node itself
    return this.$el;
  }

});
