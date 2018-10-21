// scripts in here

document.addEventListener("DOMContentLoaded", function() {
  // code...

  var swup = new Swupjs({
    elements: ['.menu', '.site-main'],
    animateScroll: false,
    debugMode: true,
    LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    animations: {
      '*': {
        out: function (next) {
          profileToHomeOut(next)
        },
        in: function (next) {
          profileToHomeIn(next)
        }
      },
      '*>homepage': {
        out: function (next) {
          profileToHome(next);
        },
        in: function (next) {
          homeToProfile(next);
        }
      },
      'homepage>graduate-profile': {
        out: function (next) {
          homeToProfileOut(next);
        },
        in: function (next) {
          homeToProfileIn(next);
        }
      },
      '*>next-profile': {
        out: function (next) {
          console.log('next profile out');
          nextProfileOut(next);
        },
        in: function (next) {
          nextProfileIn(next);
        }
      },
      '*>prev-profile': {
        out: function (next) {
          console.log('next profile out');
          prevProfileOut(next);
        },
        in: function (next) {
          prevProfileIn(next);
        }
      },
    }
  });



  // Check if an element is fully in the visible viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  // Check if an element is visible in viewport at all
  function isVisible(element) {
    var top = element.getBoundingClientRect().top;
    var bottom = element.getBoundingClientRect().bottom;
    var vHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }

  // THROTTLED SCROLL FUNCTION
  // Vars for the things that happen on scrolling
  var nav = document.querySelector("#masthead");
  // vars for the leaves and paths
  var leaves = document.getElementById("leaves");
  var path01 = anime.path('#leaves #path-01');
  var path02 = anime.path('#leaves #path-02');
  var path03 = anime.path('#leaves #path-03');
  var path04 = anime.path('#leaves #path-04');
  var leaf01 = document.getElementById("leaf-01");
  var leaf02 = document.getElementById('leaf-02');
  var leaf03 = document.getElementById('leaf-03');
  var leaf04 = document.getElementById('leaf-04');
  var didPlay = false;

  // function to animate the leaves
  var animLeaf = function(leaf, path, duration) {
    anime({
      targets: leaf,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'easeOutCubic',
      duration: duration
    });
  }

  // Vars for hero parallax
  var hero = document.querySelector(".hero-section");

  // requestAnimation frame throttled scroll function
  // Setup a timer
  var timeout;

  // Listen for resize events
  window.addEventListener('scroll', function ( event ) {

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

      // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
        // Run scroll functions
        
        var scrollAmount = window.pageYOffset;
        var heroHeight = hero.clientHeight;
        // get percentage scrolled past the hero section
        var percentScrolled = scrollAmount / heroHeight * 100;

        // Shrink header on scroll
        if ( percentScrolled > 90 && !nav.classList.contains('shrink') ) {
          nav.classList.add("shrink");
        } else if ( percentScrolled < 90 && (nav.classList.contains('shrink')) ) {
          nav.classList.remove("shrink");
        }

        // animate perspective origin for parallax effect on hero image
        // start from 50 instead of 0 for the perspective origin property
        var percentScrolledMiddle = (percentScrolled/2) + 50;
        hero.style.perspectiveOrigin = '50% '+ percentScrolledMiddle +'%';

        // trigger the leaves animation
        if (percentScrolled > 10 && percentScrolled < 60 && didPlay == false) {
          console.log('here');
          didPlay = true;
          animLeaf(leaf01, path01, 3500);
          animLeaf(leaf02, path02, 3200);
          animLeaf(leaf03, path03, 2800);
          animLeaf(leaf04, path04, 3100);
        }

        // reset didPlay so the animation can play again
        if (percentScrolled < 5 || percentScrolled > 80 && didPlay == true) {
          didPlay = false;
        }

    });

  }, false);

});
