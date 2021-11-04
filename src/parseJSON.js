// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // parse a string into an object
  // ex '{key:value, key2:value2}'
  // ex '{key:value, key2:value2, "idk":something, another:value4}'
  // strategy: split by commas, get key values from there
  // what about extraneous commas or semi colons?
  // keys are strings, have to ensure values are stored correctly instead of just strings

  var parsed = {};
  // remove curly braces and split by comma for pairs ex: [key:value,] key2:value2]
  // var recursiveParse = function(str) {
  //   if (str.length !== 0) {
  //     // check if array notation
  //     if (str[0] === '[') {
  //       var subs = str.substring(1, (str.length - 1));
  //       var values = subs.substring(1, (subs.length - 1)).split(', ');
  //       // split array into values
  //       console.log(values);
  //       for (var i = 0; i < values.length; i++) {
  //         console.log(' values[i]:' + values[i]);
  //         obj[i] = values[i];
  //       }
  //     } else if (str[0] === '{') {
  //       var pairs = json.substring(1, (json.length - 1)).split(', ');
  //       // split pairs into array of key and value
  //       console.log(pairs);
  //       for (var i = 0; i < pairs.length; i++) {
  //         console.log(' pairs[i]:' + pairs[i]);
  //         obj.keyValue[0] = keyValue[1];
  //         //[key, value, key, value]
  //       }
  //     } else {
  //       var subs = str.substring(1, (str.length - 1));
  //       if (subs.indexOf('[') < 0 && subs.indexOf('{') < 0) {
  //         var pairs = subs.substring(1, (subs.length - 1)).split(', ');
  //         // split pairs into array of key and value
  //         console.log(pairs);
  //         for (var i = 0; i < pairs.length; i++) {
  //           //pairs[i].trim()
  //           var keyValue = pairs[i].split(':');
  //           console.log(' pairs[i]:' + pairs[i]);
  //           obj.keyValue[0] = keyValue[1];
  //           //[key, value, key, value]
  //         }
  //       }
  //     }
  //   }
  // };
  // return obj;

  if (json.startsWith('[')) {
    if (json.endsWith(']')) {
      console.log('hi');
    } else {
      console.log('error');
      //throw 'SyntaxError';
      throw new SyntaxError();
    }
  }
  if (json.startsWith('{')) {
    if (json.endsWith('}')) {
      console.log('{}');
    } else {
      console.log('error {}');
      //throw 'SyntaxError';
      throw new SyntaxError('missing {}');
    }
  }
};
