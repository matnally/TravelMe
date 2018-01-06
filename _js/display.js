






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
