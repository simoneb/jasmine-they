var fs = require('fs'),
    jasmine_they = fs.readFileSync(__dirname + '/../jasmine-they.js','utf-8'),
    specs = fs.readFileSync(__dirname + '/jasmine-they-specs.js','utf-8');

eval(jasmine_they);
  
describe('in browser', function() {
  eval(specs);
});