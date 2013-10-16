// `they` is the entry function to `jasmine-they`.
// Use it as you would use jasmine's `it`.
var they = function(description, optionalArguments, callback){
  // Javascript's `arguments` variable is not an array, we make it one
  // and at the same time remove the first argument, the description.
  var args = Array.prototype.slice.call(arguments, 1);
  
  // If there are no arguments left then we don't need to do anything.
  if(args.length === 0)
    return;
  
  // There are arguments, and the callback function must be the last one.
  var fun = args.pop();
  
  // If the last argument is not a function, then just move on.
  if(typeof fun !== 'function')
    return;
  
  // If the sole argument is an array then treat it as multiple arguments.
  if(args.length === 1 && 
     Object.prototype.toString.call(args[0]) === 
     Object.prototype.toString.call([]))
    args = args[0];
  
  // Some nice formatting for the test description.
  var cases = args.length === 1 ? 'case' : 'cases';
  
  // Wrap all test cases in a single `describe`.
  return describe(description + ' (' + args.length + ' ' + cases + ')', function() {
    // Create a single `it` for each argument
    for(var i = 0; i < args.length; i++) {
      (function(arg) {
        it(description + ' (' + JSON.stringify(arg) + ')', function() { 
          fun.call(this, arg); 
        });
      })(args[i]);
    }  
  });
}

if(typeof window == "undefined" && typeof exports == "object") 
  exports.they = they;