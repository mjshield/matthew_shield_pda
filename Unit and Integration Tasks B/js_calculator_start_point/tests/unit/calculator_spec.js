var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('should be able to correctly add values together', function(){
    calculator.previousTotal = 1;
    calculator.add(2);
    var result = calculator.runningTotal;
    var expected = 3;
    assert.equal(result, expected);
  })

  it('should be able to correctly subtract values', function(){
    calculator.previousTotal = 10;
    calculator.subtract(6);
    var result = calculator.runningTotal;
    var expected = 4;
    assert.equal(result, expected);
  })

  it('should be able to correctly multiply values', function(){
    calculator.previousTotal = 4;
    calculator.multiply(10);
    var result = calculator.runningTotal;
    var expected = 40;
    assert.equal(result, expected);
  })

  it('should be able to correctly divide values', function(){
    calculator.previousTotal = 35;
    calculator.divide(5);
    var result = calculator.runningTotal;
    var expected = 7;
    assert.equal(result, expected);
  })

  it('should be able to correctly concatenate a multitude of number clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(6);
    var result = calculator.runningTotal;
    var expected = 26;
    assert.equal(result, expected);
  })

  it('should clear the runningTotal if a previous operation was just completed', function(){
    calculator.add(4);
    calculator.numberClick(8);
    var result = calculator.runningTotal;
    var expected = 8;
    assert.equal(result, expected);
  })

  it('should correctly calculate the total result of multiple different operations', function(){
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(17); 
    calculator.operatorClick("=");
    var result = calculator.runningTotal;
    var expected = 20;
    assert.equal(result, expected);
  })

  it('should be able to clear the runningTotal without affecting the calculation', function(){
    calculator.numberClick(6);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick("=");
    var result = calculator.runningTotal;
    var expected = 5;
    assert.equal(result, expected);
  })

  it('should reset the newTotal flag to false if 0 is in the runningTotal', function(){
    calculator.numberClick(0);
    var result = calculator.newTotal;
    var expected = false;
    assert.equal(result, expected);
  })

  it('should clear the runningTotal if a previous operation was just completed', function(){
    calculator.add(4);
    calculator.numberClick(8);
    var result = calculator.runningTotal;
    var expected = 8;
    assert.equal(result, expected);
  })

  it('should clear the runningTotal if 0 is in it', function(){
    calculator.add(0);
    calculator.numberClick(2);
    var result = calculator.runningTotal;
    var expected = 2;
    assert.equal(result, expected);
  })

});
