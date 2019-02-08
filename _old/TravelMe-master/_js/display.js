
function resetErrorStyles() {

  //resets any error styles
  calcAfford(0, 0, "divActionHappiness");
  calcAfford(0, 0, "divActionDays");
  calcAfford(0, 0, "divActionMoney");

} //function

function resetDestination() {
  updateElement("locationDestinationName", "");
  updateElement("locationDays", "");
  updateElement("locationDestinationCost", "");
  updateElement("travelledDistance", "");
  updateElement("locationHappiness", "");
  updateElement("locationRegion", "");
  updateElement("locationRegionDetails", "");

  document.getElementById("butTravel").disabled = true;

} //function
