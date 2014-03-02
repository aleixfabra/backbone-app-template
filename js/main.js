require(['jquery', 'underscore', 'tweenmax'], function () {
  require(['backbone'], function () {
    require(['application'], function (root) {
      var loadedCount = 0;
      var images = [
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',
        '06.jpg',
        'menu.jpg',
        'footer-background.jpg',
        'modal-background.jpg',
        'trailer.jpg',
        'assets.png',
        'animals-2.png',
        'animals-1.png',
        'videos.png',
        'video.jpg'
      ];
      var length = images.length,
        i;
      var $img;

      function load() {
        loadedCount += 1;
        if (loadedCount === length) {
          $('#loader-view').fadeOut(1000);
          root.Application.initialize();
        }
      }

      for (i = 0; i < length; i++) {
        $img = $('<img src="img/' + images[i] + '">');
        $img.bind("load", load);
      }

    });
  });
});