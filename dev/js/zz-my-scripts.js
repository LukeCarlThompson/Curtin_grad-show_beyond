// scripts in here

document.addEventListener("DOMContentLoaded", function() {
  // code...

  const swup = new Swup({
    elements: ['.menu'],
    // debugMode: true,
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
  var throttle = 20;
  // Vars for the things that happen on scrolling
  var nav = document.querySelector("#masthead");
  var taglineWrap = document.querySelector('.tagline-wrap');
  var taglineVan = document.querySelector('.tagline-wrap .van-svg');
  var taglineText = taglineWrap.querySelector('h2');
  var animPlayed;

  // Vars for hero parallax
  // var hero = document.getElementById("parallaxWrap");

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

            // animate van on scroll
            // var slideInAt = (scrollAmount + window.innerHeight) - taglineWrap.clientHeight;
            // var resetTrigger = taglineWrap.offsetTop - taglineWrap.clientHeight;
            // var taglineVanTrigger = taglineWrap.offsetTop;

            if( isInViewport(taglineWrap) && (animPlayed == null || animPlayed == false) ) {
              var taglineVanAnim = anime({
                targets: taglineVan,
                translateX: ['-80vw', '0vw'],
                easing: 'easeOutSine',
                duration: 1000,
                begin: function() {
                  animPlayed = true;
                  taglineText.classList.add('unclip');
                }
              })
            }

            if( isVisible(taglineWrap) === false ) {
              animPlayed = false;
              taglineVan.style.cssText = '';
              taglineText.classList.remove('unclip');
            }

            // checking to see if the testimonials are on screen to start and stop the timer
              if( isVisible(testimonialsWrap) ) {
                startTheTimer();
              } else if( ! isVisible(testimonialsWrap) ) {
                stopTheTimer();
              }

            // Parallax the hero image/video
            // var offset = document.getElementById("about-section").offsetTop;
            // if (scrollAmount < offset) {
            //   var moveNum = (scrollAmount / 7500) + 1;
            //   var eased = moveNum * moveNum * moveNum * moveNum;
            //   if (eased < 1) {
            //     var eased = 1;
            //   };
            //   hero.style.transform = 'scale(' + eased + ') translateY(' + eased * eased * eased + 'px)';
            //   var opacityVal = 2 - (eased * eased * eased);
            //   hero.style.opacity = opacityVal;
            // }

              scrollTimeout = null;
          }, throttle);
      }
      // console.log('native scroll');
  };

  // Tiny slider init for the homepage slider
  var slider = tns({
    container: '.my-slider',
    items: 1,
    mode: 'gallery',
    controls: false,
    nav: false,
    arrowKeys: true,
    speed: 800,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    // autoWidth: true,
    // autoHeight: true,
    lazyload: true,
    mouseDrag: true
  });

  // Script for the testimonials scroller
  var testimonialsWrap = document.querySelector('.testimonials-wrap');
  var testimonials = [].slice.call(document.querySelectorAll('.testimonial-card'));
  var classes = ['first', 'second', 'active', 'fourth', 'fifth'];
  var testimonialTimer;
  var timerStarted;

  testimonialsLoop(testimonials, classes);

  function testimonialsLoop(testimonials, classes) {
    for(var i = 0; testimonials.length > i; i++) {
      if(i < 5) {
        testimonials[i].classList.remove('first', 'second', 'active', 'fourth', 'fifth', 'hidden');
        testimonials[i].classList.add(classes[i]);
      } else {
        testimonials[i].classList.remove('first', 'second', 'active', 'fourth', 'fifth', 'hidden');
        testimonials[i].classList.add('hidden');
      }
    }
  }

  function startTheTimer(){
    if(timerStarted == false || timerStarted == null) {
      timerStarted = true;
      testimonialTimer = setInterval( function() {
        testimonialsLoop(testimonials, classes);
        testimonials.unshift(testimonials.pop());
        }, 3000);
    }
  }

  function stopTheTimer(){
    if(timerStarted == true) {
      clearInterval(testimonialTimer);
      timerStarted = false;
    }
  }

  testimonialsWrap.addEventListener("mouseover", function() {
    stopTheTimer();
  });

  testimonialsWrap.addEventListener("mouseout", function() {
    startTheTimer();
  });




});