// FLIP Animation function that allows tweening classes
var flipPrep = function(element, from, to){
  
  // Get 'first' position
  var firstRect = element.getBoundingClientRect();
  
  // Swap the classes
  element.classList.remove(from);
  element.classList.add(to);
  
  // Get the 'last' position
  var lastRect = element.getBoundingClientRect();

  // Create object with the firstRect values minus the lastRect values
  // To invert the transform
  var invertedRect = {
    top: firstRect.top - lastRect.top,
    left: firstRect.left - lastRect.left,
    width: firstRect.width / lastRect.width,
    height: firstRect.height / lastRect.height
  }
  
  // Set the transform origin point so it works with the calculated co-ordinates
  // element.style.transformOrigin = 'left top';
  // Not needed because this is set with the animation functions instead
  
  // Apply transform to sync the from class back to the 'to' classes position
  element.style.transform = 'translateX(' + invertedRect.left + 'px) translateY(' + invertedRect.top + 'px) scaleX(' + invertedRect.width + ') scaleY(' + invertedRect.height + ')';
}