
// FLIP Animation function that allows tweening classes
var flipAnimNodeList = function(elList, activeFilter) {
  
  // Create 'first' position array
  var firstRect = [];

  for(var i = 0; elList.length> i; i++) {
    elList[i].style.cssText = "";
    firstRect.push(elList[i].getBoundingClientRect())
  }
  
  // Swap the classes based on filter
  // then add positions to the array
  for(var i = 0; elList.length> i; i++) {
    elList[i].classList.remove('visible', 'hidden');

    if(elList[i].classList.contains(activeFilter)) {
      elList[i].classList.add('visible');

    } else {
      elList[i].classList.add('hidden');
    }
  }
  
  // Create the 'last' position array
  var lastRect = [];
  for(var i = 0; elList.length> i; i++) {
    lastRect.push(elList[i].getBoundingClientRect())
  }

  // console.log('firstRect', firstRect);
  // console.log('lastRect', lastRect);

  var elListActive = [];

// convert all the cordinates and create temp object to hold them
  for(var i = 0; elList.length > i; i++) {
    var invertedRect = {
      top: firstRect[i].top - lastRect[i].top,
      left: firstRect[i].left - lastRect[i].left,
      width: firstRect[i].width / lastRect[i].width,
      height: firstRect[i].height / lastRect[i].height
    }
    // apply transformations to each element
    elList[i].style.transform = 'translateX(' + invertedRect.left + 'px) translateY(' + invertedRect.top + 'px) scaleX(' + invertedRect.width + ') scaleY(' + invertedRect.height + ')';


    // // add active items to an array
    if(elList[i].classList.contains(activeFilter)) {
      elListActive.push(elList[i]);
    }
  }

    // apply to active items
    anime({
      targets: elListActive,
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      translateX: 0,
      translateY: 0,
      easing: 'easeInOutSine',
      duration: 300,
      delay: function(el, i, l) {
        return  i * 50;
      }
    });
}

// Filter function
var onFilterChange = function(elList, activeFilter){
  
  // Hide the els not in the filter
  for(var i = 0; elList.length> i; i++) {
      if( ! elList[i].classList.contains(activeFilter)) {
        anime({
          targets: elList[i],
          opacity: 0,
          scaleX: 0.5,
          scaleY: 0.5,
          easing: 'easeInOutCubic',
          duration: 300,
          delay: function(el, i, l) {
            return  i * 50;
          }
        });
      }
  }

  setTimeout(function(){
    flipAnimNodeList(elList, activeFilter);
  }, 300);

}