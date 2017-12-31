
function displayCurrent() {
  //updates the display of the user's details

  updateElement("locationCurrentName", JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateElement("meHappiness", JSONme["me"][0].happiness);
  updateElement("meMoney", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONme["me"][0].money));
  updateElement("meSalary", JSONme["me"][0].salary);
  updateElement("meDaysLeft", JSONme["me"][0].daysLeft);
  updateElement("meDaysWorked", JSONme["me"][0].daysWorked);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme["me"][0].travelledDistance) + " " + JSONconfig["config"][0].units);

if (JSONlocation["location"][0].locationCurrent == JSONlocation["location"][0].locationPrevious) {
  //current location equals previous.. must be at the START.. or bugged!
  updateElement("meLocationPrevious", "");
} else {
  updateElement("meLocationPrevious", JSONdestinations["destinations"][JSONlocation["location"][0].locationPrevious].name);
}

  updateElement("meTravelledDays", JSONme["me"][0].travelledDays);

  if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) { //Current location and CONFIG home is the same
    //Back at your HOME destination
    elemHideShow("workTable", "Show");
  } else {
    //Travelling from HOME destination
    elemHideShow("workTable", "Hide");
  }

  //if not clicked on a destination or just travelled, hide details
  if (!JSONlocation["location"][0].locationDestination) elemHideShow("destinationTable", "Hide");

} //function

function elemHideShow(elemName, strAction) {

  var elem = document.getElementById(elemName);

  if (strAction == "Show") $(elem).show();
  else $(elem).hide();

}

function displayDestination(index) {
  //updates the display of the chosen destination

  elemHideShow("destinationTable", "Show"); //click on a destination so show the details

  JSONlocation["location"][0].locationDestination = index; //temp store potential destination
  JSONlocation["location"][0].locationDestinationTravelDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units);
  JSONlocation["location"][0].locationDestinationTravelCosts = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
  JSONlocation["location"][0].locationDestinationTravelDistance = calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units);

  updateElement("locationDestinationName", JSONdestinations["destinations"][index].name);
  updateElement("locationDestinationTimeTaken", JSONlocation["location"][0].locationDestinationTravelDays);
  updateElement("locationDestinationCost", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONlocation["location"][0].locationDestinationTravelCosts));
  updateElement("locationDestinationDistance", displayNumbersWithCommas(JSONlocation["location"][0].locationDestinationTravelDistance) + " " + JSONconfig["config"][0].units);
  updateElement("locationHappiness", calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      updateElement("locationRegion", mapObject.getRegionName(JSONdestinations["destinations"][index].region));
      updateElement("locationRegionDetails", getRegionDetails(JSONdestinations["destinations"][index].region));

  var x = calcAfford(JSONme["me"][0].money, JSONlocation["location"][0].locationDestinationTravelCosts, "locationDestinationCost");
  var y = calcAfford(JSONme["me"][0].daysLeft, calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units), "locationDestinationTimeTaken");
  if ((x < 0) || (y <  0)) {
    document.getElementById("butTravel").disabled = true;
  } else {
    document.getElementById("butTravel").disabled = false;
  }

} //function




function resetDestination() {
  updateElement("locationDestinationName", "");
  updateElement("locationDestinationTimeTaken", "");
  updateElement("locationDestinationCost", "");
  updateElement("locationDestinationDistance", "");
  updateElement("locationHappiness", "");
  updateElement("locationRegion", "");
  updateElement("locationRegionDetails", "");

  document.getElementById("butTravel").disabled = true;

} //function








function getRegionDetails(strRegion) {

var strTemp = "";

  //get array
  var arrTemp = JSONdestinations["destinations"];
  //loop through
  for (var i = 0; i < arrTemp.length; i++) {

    if (arrTemp[i].region == strRegion) {
// show details of the region
      strTemp += arrTemp[i].name;
      strTemp += "<br>";

    } //if

  }//for

return strTemp;

}








function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function

function updateElement(elemName, strTemp) {
  //update the element with text
  var elem = document.getElementById(elemName).innerHTML = strTemp;
} //function
