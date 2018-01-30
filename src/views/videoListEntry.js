var VideoListEntryView = Backbone.View.extend({
  
  //write initialize
  initialize: function() {
    //call render
    this.render();
  },
  
  template: templateURL('src/templates/videoListEntry.html'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  // make event handler for click on title
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    // call select on the model
    this.model.select();
    
  },


});
