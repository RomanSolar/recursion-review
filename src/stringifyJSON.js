// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // check if obj is string, if so return string
  // check if obj is not object or is null, if so return obj.tostring
  // check if obj is array, if so iterate over array recursively
  // else it is obj with keys, so iterate over keys
  var recursiveStringify = function(obj) {
    var stringed = '';
    if (typeof obj === 'string') {
      return '"' + obj + '"';
    } else if ((typeof obj !== 'object') || obj === null) {
      return '' + obj + '';
    } else if (Array.isArray(obj)) {
      stringed += '[';
      for (var i = 0; i < obj.length; i++) {
        stringed += recursiveStringify(obj[i]);
        if (i !== obj.length - 1) {
          stringed += ',';
        }
      }
      stringed += ']';
      return stringed;
    } else {
      stringed += '{';
      for (var i = 0; i < (Object.keys(obj)).length; i++) {
        if (typeof obj[Object.keys(obj)[i]] !== 'function' &&
          typeof obj[Object.keys(obj)[i]] !== 'undefined') {
          stringed += recursiveStringify(Object.keys(obj)[i]) + ':' +
            recursiveStringify(obj[Object.keys(obj)[i]]);
          if (i !== Object.keys(obj).length - 1) {
            stringed += ',';
          }
        }
      }
      stringed += '}';
      return stringed;
    }
  };

  return recursiveStringify(obj);
};
