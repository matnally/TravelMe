
/*** START travelSelect ***/
function travelSelect(index) {




/*
  travelObjectUpdate(index);
  travelObjectDisplay(index);
  travelButtonShowHide(index); //if can afford

  //TODO
  if (JSONlocation[0].locationCurrent == index) {
    //same location as current!
    updateTurnDetails(""); //???

  } else {
    updateTurnDetails(travelGetTravelDetails()); //???

  } //if
*/

  /* GUI GUI GUI */
  /* GUI GUI GUI */
  elemHideShow("destinationTable", "Hide");
  elemHideShow("trekTable", "Hide");
  elemHideShow("workTable", "Hide");
  if (JSONlocation[0].locationCurrent == index) {
    elemHideShow("trekTable", "Show");
  } else {
    elemHideShow("destinationTable", "Show");
  }
  if ((index == JSONconfig[0].home)&&(JSONlocation[0].locationCurrent == index)) {
    elemHideShow("workTable", "Show");
  } else {
  }
  /* GUI GUI GUI */
  /* GUI GUI GUI */



} //function
function travelObjectUpdate(index) {
  JSONlocation[0].locationDestination = index; //temp store potential destination
  JSONlocation[0].days = calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[index].latLng[0], JSONdestinations[index].latLng[1]), JSONconfig[0].units);
  JSONlocation[0].locationDestinationTravelCosts = calcDistanceCost(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[index].latLng[0], JSONdestinations[index].latLng[1], JSONconfig[0].units), JSONconfig[0].units);
  JSONlocation[0].travelledDistance = calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[index].latLng[0], JSONdestinations[index].latLng[1], JSONconfig[0].units);
} //function
function travelObjectDisplay(index) {
  //updates the display of the chosen destination
  updateElement("locationDestinationName", JSONdestinations[index].name);
  updateElement("locationDays", JSONlocation[0].days);
  updateElement("locationDestinationCost", JSONconfig[0].currency + displayNumbersWithCommas(JSONlocation[0].locationDestinationTravelCosts));
  updateElement("travelledDistance", displayNumbersWithCommas(JSONlocation[0].travelledDistance) + " " + JSONconfig[0].units);
  updateElement("locationHappiness", calHappiness(JSONlocation[0].days, JSONlocation[0].locationDestinationTravelCosts, JSONlocation[0].travelledDistance, JSONconfig[0].units));
  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      updateElement("locationRegion", mapObject.getRegionName(JSONdestinations[index].region));
      updateElement("locationRegionDetails", getRegionDetails(JSONdestinations[index].region));
} //function
function travelButtonShowHide(index) {
  //TODO
  var x = calcAfford(JSONme[0].money, JSONlocation[0].locationDestinationTravelCosts, "locationDestinationCost");
  var y = calcAfford(JSONme[0].daysLeft, calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1]), JSONconfig[0].units), "locationDestinationCost");
  if ((x < 0) || (y <  0)) {
    updateElement("travelErrorMessage", "Cannot afford");
    document.getElementById("butTravel").disabled = true;
  } else {
    updateElement("travelErrorMessage", "");
    document.getElementById("butTravel").disabled = false;
  }
  if (JSONlocation[0].locationCurrent == index) {
    //clicked on current destination
    updateElement("travelErrorMessage", "Current location");
    document.getElementById("butTravel").disabled = true;
  } else {
    updateElement("travelErrorMessage", "");
  } //if
} //function
/*** END travelSelect ***/

/*** START travelStart ***/
function travelStart() {

  actionSelectExecute("flight")

/*


  alert(travelGetTravelDetails()); //B4 resetWork!

  meObjectUpdateTravel();
  displayMeObject(); //displays the user's details
  //workButtonShowHide(); //???

  updateHistory("Travelled to " + JSONdestinations[JSONlocation[0].locationDestination].name + "");

  callEvent(JSONlocation[0].locationCurrent, "travel");

  //finally do anything
  turnEnd();
*/
} //function
function meObjectUpdateTravel() {
  JSONme[0].money = parseInt(JSONme[0].money) - parseInt(calcDistanceCost(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1], JSONconfig[0].units), JSONconfig[0].units));
  JSONme[0].daysLeft = parseInt(JSONme[0].daysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1]), JSONconfig[0].units));
  JSONme[0].travelledDistance = parseInt(JSONme[0].travelledDistance) + parseInt(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1], JSONconfig[0].units));
  JSONme[0].travelledDays = JSONme[0].travelledDays + parseInt(JSONlocation[0].days);
  JSONme[0].travelledDays = parseInt(JSONme[0].travelledDays) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1]), JSONconfig[0].units));
  JSONme[0].happiness = parseInt(JSONme[0].happiness) + parseInt(calHappiness(JSONlocation[0].days, JSONlocation[0].locationDestinationTravelCosts, JSONlocation[0].travelledDistance, JSONconfig[0].units));


  //DO LAST
  JSONlocation[0].locationPrevious = JSONlocation[0].locationCurrent;
  JSONlocation[0].locationCurrent = JSONlocation[0].locationDestination; //update current location // IMPORTANT! THIS NOW STATES WHERE YOU ARE!
}
function travelGetTravelDetails() {
  //build up event text
  var strTemp = "";
      strTemp += "You are travelling from " + JSONdestinations[JSONlocation[0].locationCurrent].name + " to " + JSONdestinations[JSONlocation[0].locationDestination].name;
      strTemp += "\n";
      strTemp += "It'll cost " + JSONconfig[0].currency + parseInt(calcDistanceCost(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1], JSONconfig[0].units), JSONconfig[0].units));
      strTemp += "\n";
      strTemp += "It'll take " + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1]), JSONconfig[0].units));
      strTemp += "\n";
      strTemp += "You'll travelled " + parseInt(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[JSONlocation[0].locationDestination].latLng[0], JSONdestinations[JSONlocation[0].locationDestination].latLng[1], JSONconfig[0].units));
      strTemp += "\n";
      strTemp += "Your happiness will go up " + parseInt(calHappiness(JSONlocation[0].days, JSONlocation[0].locationDestinationTravelCosts, JSONlocation[0].travelledDistance, JSONconfig[0].units));
  return strTemp;
} //function
/*** END travelStart ***/
