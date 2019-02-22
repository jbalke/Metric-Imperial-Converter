/*
*
*
*       Complete the handler logic below
*       
*       
*/

var inputPattern = /^((?:\d*\.?\d*)|(?:\d+\.?\d*\/\d+\.?\d*)|([\d\/\s.]+))?\s*((?:gal|lbs|mi|l|kg|km)|([a-z]+))?$/i;

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var invalidInput, validInput;
    
    if ((input.trim().length > 0) && (result = input.match(inputPattern))) {
      [invalidInput, validInput] = [result[2], result[1]];      
      
      if (invalidInput) {
        return 'invalid number';
      } else if (validInput) {
        return eval(validInput)
      }
    } 
    
    return 1;
  };
  
  this.getUnit = function(input) {
    var result;
    var invalidInput, validInput;
    
    if ((input.trim().length > 0) && (result = input.match(inputPattern))) {
      [invalidInput, validInput] = [result[4], result[3]];
      
      if (invalidInput) {
        return 'invalid unit';
      } else if (validInput) {
         return validInput; 
      }
    }
      
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {    
    switch (initUnit.toLowerCase()) {
      case 'gal': return 'l';
      case 'lbs': return 'kg';
      case 'mi': return 'km';
      case 'l': return 'gal';
      case 'kg': return 'lbs';
      case 'km': return 'mi';
      default: return 'invalid unit';
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit.toLowerCase()) {
      case 'gal': return 'gallons';
      case 'lbs': return 'pounds';
      case 'mi': return 'miles';
      case 'l': return 'liters';
      case 'kg': return 'kilograms';
      case 'km': return 'kilometers';
      default: return 'invalid unit';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    
    switch (initUnit.toLowerCase()) {
      case 'gal': result = initNum * galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      case 'l': result = initNum / galToL; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'km': result = initNum / miToKm; break;
      default: return 'invalid unit';
    }
    
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
