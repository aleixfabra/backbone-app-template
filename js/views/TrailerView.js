define([
  'fmwk/core/BaseView',
  'text!templates/trailer.html'
], function (root, trailerTemplate) {

  root.app.TrailerView = root.BaseView.extend({
    el: '#trailer-view',
    events: {
      'click .close-big-btn': 'hide'
    },
    videos: [
      'www.youtube.com/embed/u155ncSlkCk',
      'www.youtube.com/embed/t9je3P-_NmU'
    ],
    template: _.template(trailerTemplate),
    initialize: function () {
    },
    render: function (video) {
      this.$el.html(this.template({trailer: this.videos[video]}));
    },
    hide: function () {
      this.$el.empty();
      this.$el.hide(500);
    }
  });

  return root;
});