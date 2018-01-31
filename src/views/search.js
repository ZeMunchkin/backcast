var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html'),

  events: {
    'click button': 'searchHandler',
    'keyup input': 'searchHandler'
  },
  
  // updateOnEnter: function (e) {
  //   if (e.keyCode === 13) {
  //     this.searchHandler();
  //   }
  // },
  
  //search handler function
  searchHandler: function(e) {
    console.log(e);
    // set variable to hold input (escape this)
    var query = _.escape($('.form-control').val());
    // call the videos api request passing in the string
    this.collection.search(query);
    //empty the form
    //if event is enter or mouseclick
    if (e.keyCode === 13 || e.type === 'click') {
      //clear the input
      $('.form-control').val('');
      
    }
  }
});
