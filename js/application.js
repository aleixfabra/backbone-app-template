define([
  'views/ModalView', 'views/ImagesView', 'views/FooterView', 'views/TrailerView', 'views/HomeView'
], function (root) {

  root.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'sinopsis': 'sinopsis',
      'reparto': 'cast',
      'videos': 'videos',
      'imagenes': 'images'
    },
    initialize: function () {
      this.footerView = new root.app.FooterView();
      this.imagesView = new root.app.ImagesView();
      this.trailerView = new root.app.TrailerView();
      this.modalView = new root.app.ModalView();
      this.homeView = new root.app.HomeView();

      var self = this;
      this.modalView.on('showVideo', function (data) {
        self.trailer(data);
      });
    },
    home: function () {
      this.homeView.playVideo();

      this.modalView.hide();
      this.imagesView.hide();
      this.trailerView.hide();
      this.footerView.hide();
    },
    sinopsis: function () {
      this.modalView.show('sinopsis');
      this.onSectionClicked();
    },
    cast: function () {
      this.modalView.show('cast');
      this.onSectionClicked();
    },
    videos: function () {
      this.modalView.show('videos');
      this.onSectionClicked();
    },
    images: function () {
      this.imagesView.show();
      this.onSectionClicked();
    },
    trailer: function (data) {
      this.trailerView.show(data);
    },
    onSectionClicked: function () {
      this.footerView.hide();
      this.homeView.stopVideo();
    }
  });

  root.Application = {
    initialize: function () {
      this.router = new root.Router();
      Backbone.history.start();
    },
    getRouter: function () {
      return this.router;
    }
  };

  return root;
});