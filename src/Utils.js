// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// http://davidwalsh.name/javascript-debounce-function
const debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};

// Throttle function
const throttle = function(callback, limit) {
  var wait = false;
  return function () { 
      var context = this, args = arguments;
      if (!wait) {
          callback.apply(context, args);
          wait = true;
          setTimeout(function () {
              wait = false;
          }, limit);
      }
  }
}

export {
  debounce,
  throttle
};