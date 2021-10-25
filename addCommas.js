/* Function reverses a given string */
function reverseString(str) {
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
  
    return joinArray;
  }
  
  /* Function to segment a string */
  function segmentString(str) {
    const reversedStr = reverseString(str);
    const strSegments = reversedStr.match(/.{1,3}/g);
    const addCommas = strSegments.join(',');
  
    const result = reverseString(addCommas);
    return result;
  }
  
  /* Function accepts a number and converts it into a string formatted with commas
   * added for readability. */
  
  function addCommas(num) {
    let numStr = num.toString();
    const firstChar = numStr[0];
    const decIndex = numStr.indexOf('.');
  
    if (
      (numStr.length >= 4 && !(firstChar === '-')) ||
      (numStr.length >= 4 && decIndex !== -1) ||
      (numStr.length >= 4 && firstChar === '-')
    ) {
      if (decIndex !== -1) {
        const splitDecStr = numStr.split('.');
        const afterDec = splitDecStr[1];
        numStr = splitDecStr[0];
  
        const result = segmentString(numStr);
        const resultWithDec = result.concat('.', afterDec);
  
        return resultWithDec;
      } else {
        return segmentString(numStr);
      }
    } else if (firstChar === '-' || !(numStr.length >= 4)) {
      return numStr;
    }
  }
  
  module.exports = {
    reverseString,
    segmentString,
    addCommas,
  };