
function displayDestination(objCurrent, objDestination) {

  var strTemp = "";

  strTemp = objDestination.name;
  updateElement("destinationName", strTemp);

  strTemp = calcDistance(objCurrent.latLng[0], objCurrent.latLng[1], objDestination.latLng[0], objDestination.latLng[1], JSONconfig["config"][0].units) + " " + JSONconfig["config"][0].units;
  updateElement("destinationDistance", strTemp);

}


function displayCurrent(objCurrent) {

  var strTemp = "";

  strTemp = JSONdestinations["destinations"][objCurrent.locationCurrent].name;
  updateElement("currentName", strTemp);

}

//update the element
function updateElement(elemName, strTemp) {
  var elem = document.getElementById(elemName).innerHTML = strTemp;
}
