requirejs.config({
  'paths': {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
    'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
    'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min',
    'tweenmax' : '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min'
  }
});

// Load the main module to start the app
requirejs(['main']);