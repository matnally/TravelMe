
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

  JSONlocation["location"][0].days = JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days;
  JSONlocation["location"][0].money = calcTrekMoney(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days);
  JSONlocation["location"][0].happiness = calHappiness(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days, calcTrekMoney(JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days), 0, JSONconfig["config"][0].units)
  JSONlocation["location"][0].travelledDistance = JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].travelledDistance;
//  JSONlocation["location"][0].travelledDays = JSONme["me"][0].travelledDays + parseInt(JSONlocation["location"][0].days);

//  JSONlocation["location"][0].holidays = JSONdestinations["destinations"][elem.options[elem.selectedIndex].value].days;
} //function
function trekObjectDisplay() {
  updateElement("divTrekDays", JSONlocation["location"][0].days);
  updateElement("divTrekMoney", JSONconfig["config"][0].currency + JSONlocation["location"][0].money);
  updateElement("divTrekHappiness", JSONlocation["location"][0].happiness);
  updateElement("divTrekTravelledDistance", JSONlocation["location"][0].travelledDistance);
} //function
function trekButtonShowHide() {
  if (calcAfford(JSONme["me"][0].happiness, Math.abs(JSONlocation["location"][0].happiness), "divTrekHappiness") < 1) {
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

  updateHistory("Treked " + JSONlocation["location"][0].days + " days");

  callEvent(JSONlocation["location"][0].locationCurrent, "trek");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateTrek() {
  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) - parseFloat(JSONlocation["location"][0].days);
//  JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(JSONlocation["location"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(JSONlocation["location"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONlocation["location"][0].happiness);

  JSONme["me"][0].travelledDistance = JSONme["me"][0].travelledDistance + parseInt(JSONlocation["location"][0].travelledDistance);
  JSONme["me"][0].travelledDays = JSONme["me"][0].travelledDays + parseInt(JSONlocation["location"][0].days);
  //TODO:
    //Distance Travelled???
} //function
function trekGetTrekDetails() {
  var strTemp = "";
      strTemp += "You will loose " + JSONlocation["location"][0].days + " day's hoilday";
      strTemp += "You will trek " + JSONlocation["location"][0].days + " days";
      strTemp += "It will cost " + JSONconfig["config"][0].currency + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving + " per day ("+JSONconfig["config"][0].currency+calcTrekTotalCost(JSONlocation["location"][0].days,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving)+" in total)";
      strTemp += "Your happiness will be increased by " + JSONlocation["location"][0].happiness;
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

  $("#trekChoice").empty(); //remove options from previous populate
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
