
/*** START trekSelect ***/
function trekSelect() {
  trekObjectUpdate();
  trekObjectDisplay();
  trekButtonShowHide(); //if can afford

  updateTurnDetails(trekGetTrekDetails()); //???
} //function
function trekGetNoOfDaysToTrek() {
  var elem = document.getElementById("trekChoice");
  return elem.options[elem.selectedIndex].value;
} //function
function trekObjectUpdate() {

  var elem = document.getElementById("trekChoice");

  JSONtrek["trek"][0].days = JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days;
  JSONtrek["trek"][0].money = calcTrekMoney(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days);
  JSONtrek["trek"][0].happiness = calTrekHappiness(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days, calcTrekMoney(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days), 0, JSONconfig["config"][0].units)
//  JSONtrek["trek"][0].holidays = JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days;
} //function
function trekObjectDisplay() {
  updateElement("divTrekDays", JSONtrek["trek"][0].days);
  updateElement("divTrekMoney", JSONconfig["config"][0].currency + JSONtrek["trek"][0].money);
  updateElement("divTrekHappiness", JSONtrek["trek"][0].happiness);
//  updateElement("divTrekHolidays", JSONtrek["trek"][0].holidays);
} //function
function trekButtonShowHide() {
  if (calcAfford(JSONme["me"][0].happiness, Math.abs(JSONtrek["trek"][0].happiness), "divTrekHappiness") < 1) {
    updateElement("trekErrorMessage", "You'll be too unhappy");
    document.getElementById("butTrek").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butTrek").disabled = false;
  }
  if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) {
    //clicked on current destination
//    updateElement("trekErrorMessage", "2");
    document.getElementById("butTrek").disabled = false;
  } else {
    updateElement("trekErrorMessage", "You need to go to your home country of " +JSONdestinations["destinations"][JSONconfig["config"][0].home].name);
    document.getElementById("butTrek").disabled = true;
  } //if
} //function
/*** END trekSelect ***/

/*** START trekStart ***/
function trekStart() {

  alert(trekGetTrekDetails()); //B4 resetTrek!

  meObjectUpdateTrek();
  meObjectDisplay(); //displays the user's details
  //trekButtonShowHide(); //???

  updateHistory("Treked " + JSONtrek["trek"][0].days + " days");

  callEvent(JSONlocation["location"][0].locationCurrent, "trek");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateTrek() {
  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) - parseFloat(JSONtrek["trek"][0].days);
  JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(JSONtrek["trek"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(JSONtrek["trek"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONtrek["trek"][0].happiness);
  //TODO:
    //Distance Travelled???
} //function
function trekGetTrekDetails() {
  var strTemp = "";
      strTemp += "You will loose " + JSONtrek["trek"][0].days + " day's hoilday";
      strTemp += "You will trek " + JSONtrek["trek"][0].days + " days";
      strTemp += "It will cost " + JSONconfig["config"][0].currency + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving + " per day ("+JSONconfig["config"][0].currency+calcTrekTotalCost(JSONtrek["trek"][0].days,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving)+" in total)";
      strTemp += "Your happiness will be increased by " + JSONtrek["trek"][0].happiness;
  return strTemp;
} //function
function resetTurnTrek() {
  document.getElementById("trekChoice").selectedIndex = 0;
  trekButtonShowHide();
} //function



function calcTrekTotalCost(intDays, intCostOfLiving) {
  return  (parseInt(intCostOfLiving) * parseInt(intDays))
}

function trekPopulateLocationChoices() {
  //get all treks for region

  var elemTrekSelect = document.getElementById("trekChoice");

  //loop through
  for (var i = 0; i < JSONdestinations["destinations"].length; i++) {

    if ((JSONdestinations["destinations"][i].region == JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].region)&&(JSONdestinations["destinations"][i].destinationType == "trek")) {
      elemTrekSelect.options[elemTrekSelect.options.length] = new Option(JSONdestinations["destinations"][i].name, i);
    } //if

  }//for

} //function




//function trekGetNoOfDaysToTrek() {
//  return JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].days;
//}
function calcTrekMoney(intWorkDays) {
  var intResult = 0;
  var intCostOfLiving = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving;

  intResult = intCostOfLiving * intWorkDays;
  return intResult;
}
function calTrekHappiness(intDays, intCost, intDistance, strUnit) {
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
  var f = JSONconfig["config"][0].factorHappiness;
  var o = 0;

  if (strUnit == "KM") { //offsets for Kilometres
     o = 0.62137;
  } else o = 1;

  intResult = Math.ceil((((d - c) * z) * o) / f).toFixed(0);

  return intResult;

}
