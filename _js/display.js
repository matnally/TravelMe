
function displayCurrent() {
  //updates the display of the user's details

  updateElement("locationCurrentName", JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].name);
  updateElement("meHappiness", JSONme["me"][0].happiness);
  updateElement("meMoney", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONme["me"][0].money));
  updateElement("meDaysLeft", JSONme["me"][0].daysLeft);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme["me"][0].travelledDistance) + " " + JSONconfig["config"][0].units);
  updateElement("meLocationPrevious", JSONdestinations["destinations"][JSONme["me"][0].locationPrevious].name);
  updateElement("meTravelledDays", JSONme["me"][0].travelledDays);

}

function displayDestination(index) {
  //updates the display of the chosen destination

  JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestination = index; //temp store potential destination
  JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units);
  JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelCosts = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
  JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelDistance = calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units);

  updateElement("locationDestinationName", JSONdestinations["destinations"][index].name);
  updateElement("locationDestinationTimeTaken", JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelDays);
  updateElement("locationDestinationCost", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelCosts));
  updateElement("locationDestinationDistance", displayNumbersWithCommas(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestinationTravelDistance) + " " + JSONconfig["config"][0].units);

}
function resetDestination() {
  updateElement("locationDestinationName", "");
  updateElement("locationDestinationTimeTaken", "");
  updateElement("locationDestinationCost", "");
  updateElement("locationDestinationDistance", "");
}


function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateElement(elemName, strTemp) {
  //update the element with text
  var elem = document.getElementById(elemName).innerHTML = strTemp;
}
