// `jasmine-they` is a simple implementation of xunit-like test cases for `jasmine`.
// Test cases are useful when you would like to run a test against multiple inputs.
// ### *they*
// Whereas jasmine uses `it` to describe tests, jasmine-they uses `they`.
// That's pretty much all the is to it.

// In this example we include the `jasmine-they` source into this file because we need it to run the tests under node.
// You would normally use `<script>` tags in your spec runner html file:
//     
//      <script src="jasmine-they.js"></script>
var fs = require('fs'),
    jasmine_they = fs.readFileSync(__dirname + '/../jasmine-they.js','utf-8');
  
eval(jasmine_they);

// You would describe your spec as you would normally do:
describe('jasmine-they', function(){
  // `they` is the same as jasmine's `it`,
  // but it accepts arguments.
  // You can pass one argument, and it will be available in the callback function.
  they('accept one argument', 1, function(arg){
    expect(arg).toBe(1);
  });
  
  // Naturally you can pass multiple arguments.
  // In this case the test will run once per argument, and `arg` will
  // have value *1* in the first run, and *2* in the second run.
  they('accept multiple arguments', 1, 2, function(arg){
    expect(arg).toBeGreaterThan(0);
  });
  
  // You can also pass arrays as arguments, in this case the behavior
  // is the same as in the previous example. 
  // One test execution for each item in the array.
  they('accept arrays as arguments', [1, 2], function(arg){
    expect(arg).toBeGreaterThan(0);
  });
  
  // This is especially useful if you have an existing array and you
  // want to run a test for each item it contains.
  var matches = 'the quick brown fox jumps over the lazy dog'.match(/\w{4,}/g);
  
  they('accept array variables', matches, function(match){
    expect(match.length).toBeGreaterThan(3);
  });
  
  // Arrays are unwinded only if there is a single argument though,
  // otherwise they are treated as genuine standalone arguments.
  they('don\'t unwind multiple array arguments', [1,2], [3,4], function(arg){
    expect(arg.length).toBe(2);
  });
});