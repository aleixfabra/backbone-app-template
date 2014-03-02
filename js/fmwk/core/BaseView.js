define([
  'fmwk/core/obr'
], function (root) {

  root.BaseView = Backbone.View.extend({
    attributes: {
      ANIMATION_DURATION: 600
    },
    show: function (data) {
      data = data || '';
      this.render(data);
      this.$el.fadeIn(this.attributes.ANIMATION_DURATION);
    },
    hide: function () {
      this.$el.fadeOut(this.attributes.ANIMATION_DURATION);
      root.Application.router.navigate('', {trigger: true});
    }
  });

  return root;
});