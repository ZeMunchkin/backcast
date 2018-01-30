var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    Backbone.ajax({
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
        console.log(data);
      },
      error: function(data) {
        console.log('FAILED', data);
      }
    });
  }
});


