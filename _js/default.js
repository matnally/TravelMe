

function createJSON() {

  //loop through
  var strBubbleJSON = "";
  var strTemp = "";
  for (var x = 0; x < JSONdestinations.length; x++) {
    if (!x==0) strBubbleJSON += ",";
    strBubbleJSON += "{";
    strBubbleJSON += "\n";
    var intTemp = 0;
    for (var key in JSONdestinations[x]) {
      if (JSONdestinations[x].hasOwnProperty(key)) {
        //CASE???
        if (!intTemp==0) { strBubbleJSON += "  ," } else { strBubbleJSON += "  " };
        intTemp++;

        switch (key) {
          case "region":
            strBubbleJSON += ("'country' : '" + JSONdestinations[x][key] + "'");
            strBubbleJSON += "\n";
          break;
          default:
            strBubbleJSON += ("'" + key + "' : '" + JSONdestinations[x][key] + "'");
            strBubbleJSON += "\n";
        } //switch

      } //if
    } //for


    strBubbleJSON += ("  ,'daysInCountry' : '0'");
    strBubbleJSON += "\n";

/*
    strBubbleJSON += ("  ,'country' : 'blank'");
    strBubbleJSON += "\n";
    strBubbleJSON += ("  ,'blank' : 'blank'");
    strBubbleJSON += "\n";
    strBubbleJSON += ("  ,'blank' : 'blank'");
    strBubbleJSON += "\n";
    */
    strBubbleJSON += "}";
    strBubbleJSON += "\n";
  }//for
//  console.log(strBubbleJSON);
  alert(strBubbleJSON);
document.write(strBubbleJSON);

} //function




function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function
