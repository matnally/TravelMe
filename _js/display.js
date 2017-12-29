
function displayCurrent() {
  //updates the display of the user's details

  updateElement("locationCurrentName", JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateElement("meHappiness", JSONme["me"][0].happiness);
  updateElement("meMoney", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONme["me"][0].money));
  updateElement("meSalary", JSONme["me"][0].salary);
  updateElement("meDaysLeft", JSONme["me"][0].daysLeft);
  updateElement("meDaysWorked", JSONme["me"][0].daysWorked);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme["me"][0].travelledDistance) + " " + JSONconfig["config"][0].units);
  updateElement("meLocationPrevious", JSONdestinations["destinations"][JSONlocation["location"][0].locationPrevious].name);
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

  JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestination = index; //temp store potential destination
  JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units);
  JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelCosts = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
  JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDistance = calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units);

  updateElement("locationDestinationName", JSONdestinations["destinations"][index].name);
  updateElement("locationDestinationTimeTaken", JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDays);
  updateElement("locationDestinationCost", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelCosts));
  updateElement("locationDestinationDistance", displayNumbersWithCommas(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDistance) + " " + JSONconfig["config"][0].units);
  updateElement("locationHappiness", calHappiness(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDays,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelCosts,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDistance, JSONconfig["config"][0].units));

  //TODO: check can afford price, days off!
  //Check if can afford o travel
  if ((calcAfford(JSONme["me"][0].money, JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelCosts, "locationDestinationCost") < 0) ||
      (calcAfford(JSONme["me"][0].daysLeft, calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units), "locationDestinationTimeTaken") < 0)) {
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
} //function










function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function

function updateElement(elemName, strTemp) {
  //update the element with text
  var elem = document.getElementById(elemName).innerHTML = strTemp;
} //function
