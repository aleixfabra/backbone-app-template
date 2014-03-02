define([
  'fmwk/core/BaseView',
  'text!templates/animals-1.html', 'text!templates/animals-2.html', 'text!templates/videos.html'
], function (root, animals1Template, animals2Template, videosTemplate) {

  root.app.ModalView = root.BaseView.extend({
    el: '#content-view',
    events: {
      'click .close-btn': 'hide',
      'click .obr-modal': 'onOutSideClick',
      'click #videos-view li img': 'showTrailer'
    },
    animals1Template: _.template(animals1Template),
    animals2Template: _.template(animals2Template),
    videosTemplate: _.template(videosTemplate),
    attributes: {
      ANIMATION_DURATION: 600
    },
    initialize: function () {
    },
    render: function (view) {
      switch (view) {
      case 'sinopsis':
        this.$el.html(this.animals1Template());
        break;
      case 'cast':
        this.$el.html(this.animals2Template());
        break;
      case 'videos':
        this.$el.html(this.videosTemplate());
        break;
      default:
        return false;
      }
    },
    showTrailer: function (e) {
      var video = $(e.currentTarget).attr('id');
      this.trigger('showVideo', video);
    },
    onOutSideClick: function (e) {
      if (!$(e.target).closest('.obr-middle').length) {
        this.hide();
      }
    }
  });

  return root;
});