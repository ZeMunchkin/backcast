var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: JSON.stringify({
        'q': query,
        'maxResults': '5',
        'videoEmbeddable': true,
        'key': window.YOUTUBE_API_KEY,
        
      }),
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


