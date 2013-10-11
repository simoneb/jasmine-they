describe('jasmine-they', function(){
  function then(fn){  
    describe('ex', function() {
      it('ec', fn);
    });    
  }
  
  it('should accept a description', function(){
    they('have a description');
  });
  
  it('should accept arguments', function(){
    they('', 1, 2, 3);
  });
  
  it('should accept a body', function(){
    they('', 1, 2, 3, function(){});
  });
  
  it('should not invoke body if no arguments', function(){
    var fn = createSpy('fun');
    
    they('', fn);
    
    then(function() {
      expect(fn).not.toHaveBeenCalled();    
    });
  });
  
  it('should invoke body with one argument', function(){
    var fn = createSpy('fun');
    
    they('', 1, fn);
    
    then(function() {
      expect(fn).toHaveBeenCalledWith(1);    
    });
  });
  
  it('should invoke body with two arguments', function(){
    var fn = createSpy('fun');

    they('', 1, 2, fn);
    
    then(function() {
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
    });
  });
  
  it('should invoke body with elements of array if argument is array', function(){
    var fn = createSpy('fun');

    they('', [1, 2], fn);
    
    then(function() {
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
    });
  });
  
  it('should invoke body with array themselves if arguments are multiple arrays', function(){
    var fn = createSpy('fun');

    they('', [1, 2], [3, 4], fn);
    
    then(function() {
      expect(fn).toHaveBeenCalledWith([1, 2]);
      expect(fn).toHaveBeenCalledWith([3, 4]);
    });
  });
});
