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

console.log('testing');


});

console.log('testing 02');