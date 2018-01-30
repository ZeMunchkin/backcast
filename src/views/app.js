var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    //append the rendered content to the body
    this.render();
  },
  
  //create template function using given template
  template: templateURL('src/templates/app.html'),


  render: function() {
    this.$el.html(this.template());
    //return the node itself
    return this.$el;
  }

});
