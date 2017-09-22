

function calcDistance(currentLat, currentLong, destinationLat, destinationLong, strUnit) {
  //Calculate distance from lat and long

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

  return intResult;

}

function calcTimeTakenToTravel(intDistance, strUnit) {
  //Calculate days taken to travel determined from distance

  /**************************
    Days taken = (D / F) O
                  D  = Distance (KM or Miles)
                  F  = Factor (Chosen by me 3500)
                  O  = For KM / Miles discrepancy (KM = 0.62137 / Miles = 1)
  **************************/

  var intResult = 0 //Value to return

  var d = parseInt(intDistance);
  var f = JSONconfig["config"][0].factorTimeTakenToTravel;
  var o = 0;
      if (strUnit == "KM") { //offsets for Kilometres
         o = 0.62137;
         f = f * o;
      } else o = 1;

  intResult = Math.ceil((d / f) * o).toFixed(0);

  return intResult;

}

function calcDistanceCost(intDistance, strUnit) {
  //Calculate cost determined from distance

  /**************************
    Cost = D (0.1 * F)
    D  = Distance (KM or Miles)
    F  = Factor (Chosen by me 0.1)
    O  = For KM / Miles discrepancy (KM = 0.62137 / Miles = 1)
  **************************/

  var intResult = 0 //Value to return

  var d = parseInt(intDistance);
  var f = JSONconfig["config"][0].factorDistanceCost;
  var o = 0;

  if (strUnit == "KM") { //offsets for Kilometres
     o = 0.62137;
  } else o = 1;

  intResult = Math.ceil(d * ( f * o)).toFixed(0);

  return intResult;

}
