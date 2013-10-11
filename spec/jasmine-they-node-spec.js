var fs = require('fs'),
	they = require(__dirname + '/../jasmine-they.js').they,
    specs = fs.readFileSync(__dirname + '/jasmine-they-specs.js','utf-8');

describe('in node', function() {
  eval(specs);
});