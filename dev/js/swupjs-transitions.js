
// // Get the link that was clicked
// document.addEventListener('swup:clickLink', event => {
//     console.log('clickedLink event', event);
// });

// // Get all the graduate profile links
// // assign the clicked link to a global variable
// var graduateGridLinks = document.querySelectorAll('.graduate-grid-link');
// var clickedGridLink;

// for(var i = 0; graduateGridLinks.length > i; i++) {
//   graduateGridLinks[i].addEventListener('swup:clickLink', function(e) {
//     clickedGridlink = this;
//     // console.log('this', this);
//     // console.log('event', clickedGridlink);
//   } )
// }





// page transition functions

var homeToProfileOut = function(next) {
  anime({
    targets: '.graduate-block-wrap',
    // translateY: 100,
    translateZ: 400,
    scale: 0.3,
    opacity: 0,
    duration: 400,
    delay: function(el, i, l) {
      return i * 50;
    },
    easing: 'easeInSine',
    begin: console.log('hello'),
    complete: next
  })
}

var homeToProfileIn = function(next) {
  anime.timeline()
    .add({
      targets: '.profile-img-wrap',
      opacity: [0, 1],
      scale: [0.5, 1],
      easing: 'easeOutCubic',
      duration: 400,
      // offset: '-=200'
    })
    .add({
      targets: '.graduate-profile-top-section',
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: 'easeOutCubic',
      duration: 400,
      offset: '-=200'
    })
    .add({
      targets: '.graduate-profile-bio-wrap',
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: 'easeOutCubic',
      duration: 400,
      offset: '-=200'
    })
    .add({
      targets: '.project-preview-wrap',
      opacity: [0, 1],
      translateY: [100, 0],
      easing: 'easeOutCubic',
      duration: 200,
      offset: '-=200',
      delay: function(el, i, l) {
        return i * 100;
      },
      complete: next
    })
  // anime({
  //   targets: '.site-main',
  //   opacity: [0, 1],
  //   translateX: [100, 0],
  //   duration: 400,
  //   easing: 'easeOutCubic',
  //   begin: console.log('hello'),
  //   complete: next
  // })
}




var profileToHomeOut = function(next) {
  anime({
    targets: '.site-main',
    opacity: 0,
    // translateX: '-100vw',
    duration: 200,
    easing: 'easeInCubic',
    complete: next
  })
}

var profileToHomeIn = function(next) {
  anime({
    targets: '.site-main',
    opacity: [0, 1],
    // translateX: ['100vw', 0],
    duration: 400,
    easing: 'easeOutCubic',
    complete: next
  })
}

// next and prev post transitions
var nextProfileOut = function(next) {
  anime({
    targets: '.site-main',
    rotate: '45deg',
    opacity: 0,
    duration: 200,
    easing: 'easeInCubic',
    complete: next
  })
}

var nextProfileIn = function(next) {
  anime.timeline()
    .add({
      targets: '.site-main',
      rotate: ['-45deg', 0],
      opacity: [0, 1],
      easing: [0, 1, 0, 1],
    })
    .add({
      targets: '.profile-img-wrap',
      opacity: [0, 1],
      translateX: [-200, 0],
      translateZ: [-200, 0],
      easing: [0, 1, 0, 1],
      offset: 0
    })
    .add({
      targets: '.graduate-profile-top-section',
      opacity: [0, 1],
      translateX: [-200, 0],
      translateZ: [-300, 0],
      easing: [0, 1, 0, 1],
      offset: 150
    })
    .add({
      targets: '.graduate-profile-bio-wrap',
      opacity: [0, 1],
      translateX: [-200, 0],
      translateZ: [-400, 0],
      easing: [0, 1, 0, 1],
      offset: 250
    })
    .add({
      targets: '.project-preview-wrap',
      opacity: [0, 1],
      translateX: [-200, 0],
      translateZ: [-500, 0],
      easing: [0, 1, 0, 1],
      offset: 350,
      delay: function(el, i, l) {
        return i * 100;
      },
      complete: next
    })
}

var prevProfileOut = function(next) {
  anime({
    targets: '.site-main',
    rotate: '-45deg',
    opacity: 0,
    duration: 200,
    easing: 'easeInCubic',
    complete: next
  })
}

var prevProfileIn = function(next) {

    anime.timeline()
    .add({
      targets: '.site-main',
      rotate: ['45deg', 0],
      opacity: [0, 1],
      easing: [0, 1, 0, 1],
    })
    .add({
      targets: '.profile-img-wrap',
      opacity: [0, 1],
      translateX: [200, 0],
      translateZ: [-200, 0],
      easing: [0, 1, 0, 1],
      offset: 0
    })
    .add({
      targets: '.graduate-profile-top-section',
      opacity: [0, 1],
      translateX: [200, 0],
      translateZ: [-300, 0],
      easing: [0, 1, 0, 1],
      offset: 150
    })
    .add({
      targets: '.graduate-profile-bio-wrap',
      opacity: [0, 1],
      translateX: [200, 0],
      translateZ: [-400, 0],
      easing: [0, 1, 0, 1],
      offset: 250
    })
    .add({
      targets: '.project-preview-wrap',
      opacity: [0, 1],
      translateX: [200, 0],
      translateZ: [-500, 0],
      easing: [0, 1, 0, 1],
      offset: 350,
      delay: function(el, i, l) {
        return i * 100;
      },
      complete: next
    })
}








// FLIP Animation function that allows tweening class position and rotation
function flipAnim(element, from, to ) {
  
  // Check if element is already animating and return if it is
  if (element.classList.contains('animating')) {
    console.log('already animating');
    return;
  }
  
  // Get 'from' position
  var expanded = element.getBoundingClientRect();
  
  // Swap the classes
  element.classList.remove(from);
  element.classList.add(to);
  
  // Get the 'to' position
  var collapsed = element.getBoundingClientRect();

  // Invert the values
  // Use minus when manipulating sizes to apply in scale
  var invertedTop =  expanded.top - collapsed.top;
  // var invertedTop =  collapsed.top - expanded.top;
  var invertedLeft = expanded.left - collapsed.left;
  // var invertedLeft = collapsed.left - expanded.left;
  // Use divisions when manipulating sizes to apply in scale
  var invertedWidth = expanded.width / collapsed.width;
  var invertedHeight = expanded.height / collapsed.height;
  
  // Set the transform origin point so it works with the calculated co-ordinates
  element.style.transformOrigin = 'left top';
  
  // Apply transform to sync the from class back to the 'to' classes position
  element.style.transform = 'translateX(' + invertedLeft + 'px) translateY(' + invertedTop + 'px) scaleX(' + invertedWidth + ') scaleY(' + invertedHeight + ')';
  
  // Call the animation function
  animate(element);

};

// Anime function that controls the animation
function animate(element) {
    anime({
      targets: element,
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 800,
      // easing: 'easeInOutCubic',
      elasticity: 100,
      // delay: function(element, index, numTargets) {
      //           return index * 100;
      //         },
      run: function() {
        // Add animating class when animation starts
        element.classList.add('animating');
      },
      complete: function() {
        // Remove animating class when animation ends
        element.classList.remove('animating');
        // Remove the left over inline styles
        element.removeAttribute('style');
        // Remove the anime from element to allow it to be animated again with no glitching or delay
        anime.remove(element);
      }
    });
  };