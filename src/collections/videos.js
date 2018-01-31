var Videos = Backbone.Collection.extend({

  model: Video,
  
  parse: function(data, context) {
    // return data.items
    return data.items;
  },

  search: function(query) {
    var context = this;
    
    this.fetch({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'q': query,
        'maxResults': 5,
        'part': 'snippet',
        'videoEmbeddable': true,
        'type': 'video',
        'key': window.YOUTUBE_API_KEY,
        
      },
      // contentType: ,
      success: function(data) {
        // run data through parse and reset the collection
        console.log('success', data);
        // context.reset(context.parse(data));
      },
      error: function(data) {
        console.log('FAILED', data);
      }
    });
  }
});


