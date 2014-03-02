define([
  'fmwk/core/BaseView'
], function (root) {

  root.app.FooterView = root.BaseView.extend({
    el: 'footer',
    events: {
      'click .credits-btn': 'show',
      'click .close-btn': 'hide'
    },
    attributes: {
      ANIMATION: 1
    },
    initialize: function () {
      this.$('#credits-view').css({bottom: -this.getHeight()});
      this.$('#credits-view').show();
    },
    render: function () {
    },
    show: function () {
      TweenLite.to(this.$('#credits-view'), this.attributes.ANIMATION, {bottom: 0});
    },
    hide: function () {
      var height = this.getHeight();
      TweenLite.to(this.$('#credits-view'), this.attributes.ANIMATION, {bottom: -height});
    },
    getHeight: function () {
      return this.$('#credits-view').height();
    }
  });

  return root;
});