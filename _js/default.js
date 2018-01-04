
function elemHideShow(elemName, strAction) {

  var elem = document.getElementById(elemName);

  if (strAction == "Show") $(elem).show();
  else $(elem).hide();

}

function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function





function initStart() {

  //defaults from config
  JSONlocation["location"][0].locationCurrent = JSONconfig["config"][0].home; //make the destination the config default


  /* GUI GUI GUI */
  /* GUI GUI GUI */
  elemHideShow("destinationTable", "Hide");
  elemHideShow("workTable", "Show");
  elemHideShow("trekTable", "Hide");
  /* GUI GUI GUI */
  /* GUI GUI GUI */


  meObjectDisplay(); //displays UPDATE? the user's details

//travelSelect(JSONlocation["location"][0].locationCurrent); //init travel
workSelect(); //init Work
//trekPopulateLocationChoices();//init Treks for Location

  updateHistory("Started in " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateTurnDetails(""); //???

}


function turnEnd() {
  //finally do anything

  updateTurnDetails(""); //???
  updateMapCurrentLocation();
  resetTurnWork();
  trekPopulateLocationChoices();
  meObjectDisplay(); //displays UPDATE? the user's details

//  travelButtonShowHide(index); //if can afford


/* GUI GUI GUI */
/* GUI GUI GUI */
elemHideShow("destinationTable", "Hide");
elemHideShow("trekTable", "Hide");
elemHideShow("workTable", "Hide");
if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) {
  elemHideShow("workTable", "Show");
  elemHideShow("trekTable", "Show");
} else {
  elemHideShow("trekTable", "Show");
}
/* GUI GUI GUI */
/* GUI GUI GUI */


// WORK OUT % OF COUNTRY YOU HAVE TREKKED?????

}
