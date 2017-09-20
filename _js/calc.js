
function calcDistance(currentLat, currentLong, destinationLat, destinationLong, strUnit) {
  //Calculate distance from lat and longs

  var intResult = 0 //Value to return

  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((destinationLat - currentLat) * p)/2 +
          c(currentLat * p) * c(destinationLat * p) *
          (1 - c((destinationLong - currentLong) * p))/2;

  var intKilometres = Math.round(12742 * Math.asin(Math.sqrt(a))).toFixed(0); // 2 * R; R = 6371 km
  var intMiles = Math.round(intKilometres * 0.621371).toFixed(0); // miles

  //determine what unit to display
  if (strUnit == "KM") intResult = intKilometres;
  else intResult = intMiles;

  return intResult

}
