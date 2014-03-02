define([
  'fmwk/core/BaseView',
  'text!templates/images.html'
], function (root, imagesTemplate) {

  root.app.ImagesView = root.BaseView.extend({
    el: '#content-view',
    events: {
      'click .close-big-btn': 'hide',
      'click .left-arrow-btn': 'previousImage',
      'click .right-arrow-btn': 'nextImage'
    },
    cont: 0,
    ANIMATION_DURATION: 400,
    images: [
      'img/01.jpg',
      'img/02.jpg',
      'img/03.jpg',
      'img/04.jpg',
      'img/05.jpg',
      'img/06.jpg'
    ],
    initialize: function () {
    },
    template: _.template(imagesTemplate),
    render: function () {
      this.cont = 0;
      this.$el.html(this.template);
      this.$('#images-view').css({backgroundImage: 'url(' + this.images[this.cont] + ')'});
    },
    previousImage: function () {
      this.cont--;

      if (this.cont < 0) {
        this.cont = this.images.length - 1;
      }
      this.update();
    },
    nextImage: function () {
      this.cont++;

      if (this.cont >= this.images.length) {
        this.cont = 0;
      }
      this.update();
    },
    update: function (cont) {
      var self = this;
      this.$('#images-view').fadeOut(self.ANIMATION_DURATION, function () {
        self.$('#images-view').css({backgroundImage: 'url(' + self.images[self.cont] + ')'});
        self.$('#images-view').fadeIn(self.ANIMATION_DURATION);
      });
    }
  });

  return root;
});