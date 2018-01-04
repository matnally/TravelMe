
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
  JSONtrek["trek"][0].days = trekGetNoOfDaysToTrek(); //DO FIRST AS REFERENCED LATER
  JSONtrek["trek"][0].money = 69;
  JSONtrek["trek"][0].happiness = 11;
  JSONtrek["trek"][0].holidays = 12;
/*
JSONtrek["trek"][0].money = calcTrekMoney(JSONtrek["trek"][0].days);
JSONtrek["trek"][0].happiness = calHappiness(JSONtrek["trek"][0].days, calcTrekMoney(JSONtrek["trek"][0].days), 0, JSONconfig["config"][0].units)
JSONtrek["trek"][0].holidays = calcTrekHolidays(JSONtrek["trek"][0].days);
*/
} //function
function trekObjectDisplay() {
  updateElement("divTrekDays", JSONtrek["trek"][0].days);
  updateElement("divTrekMoney", JSONconfig["config"][0].currency + JSONtrek["trek"][0].money);
  updateElement("divTrekHappiness", JSONtrek["trek"][0].happiness);
  updateElement("divTrekHolidays", JSONtrek["trek"][0].holidays);
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
  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) + parseFloat(JSONtrek["trek"][0].holidays);
  JSONme["me"][0].daysTreked = parseInt(JSONme["me"][0].daysTreked) + parseInt(JSONtrek["trek"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) + parseInt(JSONtrek["trek"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONtrek["trek"][0].happiness);
} //function
function trekGetTrekDetails() {
  var strTemp = "";
      strTemp += "You will gain " + JSONtrek["trek"][0].holidays + " day's hoilday";
      strTemp += "You will trek " + JSONtrek["trek"][0].days + " days";
      strTemp += "You will earn " + JSONconfig["config"][0].currency + JSONtrek["trek"][0].money;
      strTemp += "Your happiness will be decreased by " + JSONtrek["trek"][0].happiness;
  return strTemp;
} //function
function resetTurnTrek() {
  document.getElementById("trekChoice").selectedIndex = 0;
  trekButtonShowHide();
} //function
