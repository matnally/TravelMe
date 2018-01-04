
function meObjectDisplay() {
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

/*
  if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) { //Current location and CONFIG home is the same
    //Back at your HOME destination
    elemHideShow("workTable", "Show");
  } else {
    //Travelling from HOME destination
    elemHideShow("workTable", "Hide");
  }
  //if not clicked on a destination or just travelled, hide details
  if (!JSONlocation["location"][0].locationDestination) elemHideShow("destinationTable", "Hide");
*/

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
