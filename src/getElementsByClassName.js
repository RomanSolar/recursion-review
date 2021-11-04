// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // results array to add elements that match
  // subfunction iterates over nodes
  // it adds nodes matching class name to results array
  // if there are any child nodes call function on those
  var results = [];
  var body = document.body;
  var hasClass = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        hasClass(node.childNodes[i]);
      }
    }
  };
  hasClass(body);
  return results;
};
