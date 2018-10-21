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
  // Vars for the shrinking header on scroll
  var scrollTimeout;
  var throttle = 16;
  // Vars for the things that happen on scrolling
  var nav = document.querySelector("#masthead");

  // Vars for hero parallax
  var hero = document.querySelector(".hero-section");

  // var to control the number of pixels scrolled before applying shrink class to the header
  var shrinkLimit = 70;

  window.onscroll = function () {
      if (!scrollTimeout) {
          scrollTimeout = setTimeout(function () {
            var scrollAmount = window.pageYOffset;

            // console.log('scroll amount', scrollAmount);

            // Shrink header on scroll
            if ( scrollAmount > shrinkLimit && !nav.classList.contains('shrink') ) {
              nav.classList.add("shrink");
            } else if ( scrollAmount < shrinkLimit && (nav.classList.contains('shrink')) ) {
              nav.classList.remove("shrink");
            }

            // animate perspective origin for parallax effect on hero image
            var heroHeight = hero.clientHeight;
              // get percentage scrolled past the hero section
            var percentScrolled = scrollAmount / heroHeight * 100;
            // console.log(percentScrolled, 'percentScrolled');
            var percentScrolledMiddle = (percentScrolled/2) + 50;
            // console.log(percentScrolledMiddle, 'percentScrolledMiddle');
            hero.style.perspectiveOrigin = '50% '+ percentScrolledMiddle +'%';

            // Parallax the hero image/video
            // var offset = document.querySelector(".about-section").offsetTop;
            // if (scrollAmount < offset) {
            //   var moveNum = (scrollAmount / 7500) + 1;
            //   var eased = moveNum * moveNum * moveNum * moveNum;
            //   if (eased < 1) {
            //     var eased = 1;
            //   };
            //   hero.style.transform = 'scale(' + eased + ') translateY(' + (eased -1) * 100 + 'px)';

            //   var opacityVal = 2 - (eased * eased * eased);
            //   hero.style.opacity = opacityVal;
            // }

              scrollTimeout = null;
          }, throttle);
      }
      // console.log('native scroll');
  };

console.log('testing');


});

console.log('testing 02');