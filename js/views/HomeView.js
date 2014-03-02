define([
  'fmwk/core/BaseView',
  'text!templates/home.html'
], function (root, homeTemplate) {

  root.app.HomeView = root.BaseView.extend({
    el: '#home-view',
    template: _.template(homeTemplate),
    initialize: function () {
      this.$el.html(this.template());
      this.video = document.getElementById("home-video");
    },
    playVideo: function () {
      this.video.play();
    },
    stopVideo: function () {
      this.video.pause();
    }
  });

  return root;
});