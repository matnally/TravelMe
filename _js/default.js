
function defThousandsDelimiter(intNumber) {
  //delimits a number to thousands using a comma
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&#44;");
} //function

function defUpdateElement(elemName, strTemp) {
  //update an element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function defCalcPercentage(intValue, intTotal) {
   return ((100 * intValue) / intTotal);
} //function
