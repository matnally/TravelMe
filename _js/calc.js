
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
                  D = Distance (KM or Miles)
                  F = Factor (Chosen by me 3500)
                  O = For KM / Miles discrepancy (KM = 0.62137 / Miles = 1)
  **************************/

  var intResult = 0 //Value to return

  var d = parseInt(intDistance);
  var f = JSONconfig[0].factorTimeTakenToTravel;
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
    Cost =  D (0.1 * F)
            D = Distance (KM or Miles)
            F = Factor (Chosen by me 0.1)
            O = For KM / Miles discrepancy (KM = 0.62137 / Miles = 1)
  **************************/

  var intResult = 0 //Value to return

  var d = parseInt(intDistance);
  var f = JSONconfig[0].factorDistanceCost;
  var o = 0;

  if (strUnit == "KM") { //offsets for Kilometres
     o = 0.62137;
  } else o = 1;

  intResult = Math.ceil(d * ( f * o)).toFixed(0);

  return intResult;

}

function calHappiness(intDays, intCost, intDistance, strUnit) {
  //Calculate potential happiness from travel

  /**************************
    Cost =  (((D - C) * Z) * O) / F
            Z = Days
            C = Cost
            D = Distance (KM or Miles)
            F = Factor (Chosen by me 1000)
            O = For KM / Miles discrepancy (KM = 0.62137 / Miles = 1)
  **************************/

  var intResult = 0 //Value to return

  var z = parseInt(intDays);
  var c = parseInt(intCost);
  var d = parseInt(intDistance);
  var f = JSONconfig[0].factorHappiness;
  var o = 0;

  if (strUnit == "KM") { //offsets for Kilometres
     o = 0.62137;
  } else o = 1;

  intResult = Math.ceil((((d - c) * z) * o) / f).toFixed(0);



console.log("****************************");
console.log("intDays: " + intDays);
console.log("intCost: " + intCost);
console.log("intDistance: " + intDistance);
console.log("strUnit: " + strUnit);
console.log("intResult / Happiness: " + intResult);
console.log("intResult / Happiness (without Factor): " + Math.ceil((((d - c) * z) * o)).toFixed(0));
//console.log("intResult / Happiness (after x10 because < 1): " + intResult);
//alert(JSONaction[0].actionType);
if (JSONaction[0].actionType == "trek") {
  intResult = Math.abs(intResult);
  if (intResult < 10) intResult = intResult * 10;
  console.log("intResult / Happiness (trek workaround): " + intResult);
}



  return intResult;

}

function calcAfford(intCurrentValue, intCost, elemName) {

  var intResult = (parseInt(intCurrentValue) - parseInt(intCost));

  if (intResult < 0) {
    document.getElementById(elemName).style.color = "red";
  } else {
    document.getElementById(elemName).style.color = "black";
  }

  return intResult;

}

function calcMoney(intWorkDays, intCostOfLiving) {
  var intResult = 0;
      intResult = intCostOfLiving * intWorkDays;
  return intResult;
}



/*
function calcWorkMoney(intWorkDays) {

  var intResult = 0;
  var intSalary = JSONme[0].salary;

  intResult = intSalary * intWorkDays;
  return intResult;

}
function calcWorkHolidays(intWorkDays) {

  var intResult = 0;
      intResult = intWorkDays / 14;
  return intResult;

}
*/
