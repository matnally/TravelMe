
function displayDestination(objCurrent, objDestination) {
  //updates the display of the chosen destination

  var strTemp = "";

  strTemp = objDestination.name;
  updateElement("locationDestinationName", strTemp);

  //calc distance and days to destination
  var strDistance = calcDistance(objCurrent.latLng[0], objCurrent.latLng[1], objDestination.latLng[0], objDestination.latLng[1], JSONconfig["config"][0].units);
      strTemp =  displayNumbersWithCommas(strDistance) + " " + JSONconfig["config"][0].units;
      updateElement("locationDestinationDistance", strTemp);
      strTemp = displayNumbersWithCommas(calcTimeTakenToTravel(calcDistance(objCurrent.latLng[0], objCurrent.latLng[1], objDestination.latLng[0], objDestination.latLng[1]), JSONconfig["config"][0].units)) + " days";
      updateElement("locationDestinationTimeTaken", strTemp);

      strTemp = calcDistanceCost(calcDistance(objCurrent.latLng[0], objCurrent.latLng[1], objDestination.latLng[0], objDestination.latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
      updateElement("locationDestinationCost", displayNumbersWithCommas(strTemp));

}

function displayCurrent(objMeObject) {
  //updates the display of the user's details

  var strTemp = "";

  strTemp = JSONdestinations["destinations"][objMeObject.locationCurrent].name;
  updateElement("locationCurrentName", strTemp);
  strTemp = objMeObject.happiness;
  updateElement("meHappiness", strTemp);
  strTemp = objMeObject.money;
  updateElement("meMoney", displayNumbersWithCommas(strTemp));
  strTemp = objMeObject.holidaysLeft;
  updateElement("meHolidaysLeft", strTemp);
  strTemp = objMeObject.daysLeft;
  updateElement("meDaysLeft", strTemp);
  strTemp = objMeObject.travelledDistance;
  updateElement("meTravelledDistance", displayNumbersWithCommas(strTemp));
  strTemp = objMeObject.locationPrevious;
  updateElement("meLocationPrevious", strTemp);
  strTemp = objMeObject.travelledDays;
  updateElement("meTravelledDays", strTemp);

}


function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateElement(elemName, strTemp) {
  //update the element with text
  var elem = document.getElementById(elemName).innerHTML = strTemp;
}
