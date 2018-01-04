
/*** START travelSelect ***/
function travelSelect(index) {

  travelObjectUpdate(index);
  travelObjectDisplay(index);
  travelButtonShowHide(index); //if can afford

  //TODO
  if (JSONlocation["location"][0].locationCurrent == index) {
    //same location as current!
    updateTurnDetails(""); //???
  } else {
    updateTurnDetails(travelGetTravelDetails()); //???
  }

} //function
function travelObjectUpdate(index) {
  JSONlocation["location"][0].locationDestination = index; //temp store potential destination
  JSONlocation["location"][0].locationDestinationTravelDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units);
  JSONlocation["location"][0].locationDestinationTravelCosts = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
  JSONlocation["location"][0].locationDestinationTravelDistance = calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units);
}
function travelObjectDisplay(index) {
  //updates the display of the chosen destination
  updateElement("locationDestinationName", JSONdestinations["destinations"][index].name);
  updateElement("locationDestinationTimeTaken", JSONlocation["location"][0].locationDestinationTravelDays);
  updateElement("locationDestinationCost", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONlocation["location"][0].locationDestinationTravelCosts));
  updateElement("locationDestinationDistance", displayNumbersWithCommas(JSONlocation["location"][0].locationDestinationTravelDistance) + " " + JSONconfig["config"][0].units);
  updateElement("locationHappiness", calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));
  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      updateElement("locationRegion", mapObject.getRegionName(JSONdestinations["destinations"][index].region));
      updateElement("locationRegionDetails", getRegionDetails(JSONdestinations["destinations"][index].region));
} //function
function travelButtonShowHide(index) {
  //TODO
  var x = calcAfford(JSONme["me"][0].money, JSONlocation["location"][0].locationDestinationTravelCosts, "locationDestinationCost");
  var y = calcAfford(JSONme["me"][0].daysLeft, calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units), "locationDestinationTimeTaken");
  if ((x < 0) || (y <  0)) {
    updateElement("travelErrorMessage", "Cannot afford");
    document.getElementById("butTravel").disabled = true;
  } else {
    updateElement("travelErrorMessage", "");
    document.getElementById("butTravel").disabled = false;
  }
  if (JSONlocation["location"][0].locationCurrent == index) {
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

  alert(travelGetTravelDetails()); //B4 resetWork!

  meObjectUpdateTravel();
  meObjectDisplay(); //displays the user's details
  //workButtonShowHide(); //???

  updateHistory("Travelled to " + JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].name + "");

  callEvent(JSONlocation["location"][0].locationCurrent, "travel");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateTravel() {
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
  JSONme["me"][0].daysLeft = parseInt(JSONme["me"][0].daysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units));
  JSONme["me"][0].travelledDistance = parseInt(JSONme["me"][0].travelledDistance) + parseInt(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units));
  JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units));
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));

  //DO LAST
  JSONlocation["location"][0].locationPrevious = JSONlocation["location"][0].locationCurrent;
  JSONlocation["location"][0].locationCurrent = JSONlocation["location"][0].locationDestination; //update current location // IMPORTANT! THIS NOW STATES WHERE YOU ARE!
}
function travelGetTravelDetails() {
  //build up event text
  var strTemp = "";
      strTemp += "You are travelling from " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name + " to " + JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].name;
      strTemp += "\n";
      strTemp += "It'll cost " + JSONconfig["config"][0].currency + parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "It'll take " + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "You'll travelled " + parseInt(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "Your happiness will go up " + parseInt(calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));
  return strTemp;
} //function
/*** END travelStart ***/
