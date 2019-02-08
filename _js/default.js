
function defThousandsDelimiter(intNumber) {
  //delimits a number in thousands
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function

function defUpdateElement(elemName, strTemp) {
  //update an element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function
