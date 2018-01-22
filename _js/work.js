
/*** START workSelect ***/
function workSelect() {

  actionSelect("work", JSONconfig[0].home);
  actionSelectDisplay();

/*
  workObjectUpdate();
  workObjectDisplay();
  workButtonShowHide(); //if can afford

  updateTurnDetails(workGetWorkDetails()); //???
*/
} //function
function workGetNoOfDaysToWork() {
  var elem = document.getElementById("workChoice");
  return elem.options[elem.selectedIndex].value;
} //function
function workObjectUpdate() {
  JSONwork["work"][0].days = workGetNoOfDaysToWork(); //DO FIRST AS REFERENCED LATER
  JSONwork["work"][0].money = calcWorkMoney(JSONwork["work"][0].days);
  JSONwork["work"][0].happiness = calHappiness(JSONwork["work"][0].days, calcWorkMoney(JSONwork["work"][0].days), 0, JSONconfig[0].units)
  JSONwork["work"][0].holidays = calcWorkHolidays(JSONwork["work"][0].days);
} //function
function workObjectDisplay() {
  updateElement("divWorkDays", JSONwork["work"][0].days);
  updateElement("divWorkMoney", JSONconfig[0].currency + JSONwork["work"][0].money);
  updateElement("divWorkHappiness", JSONwork["work"][0].happiness);
  updateElement("divWorkHolidays", JSONwork["work"][0].holidays);
} //function
function workButtonShowHide() {
  alert();

  if (calcAfford(JSONme[0].happiness, Math.abs(JSONwork["work"][0].happiness), "divWorkHappiness") < 1) {
    updateElement("workErrorMessage", "You'll be too unhappy");
    document.getElementById("butWork").disabled = true;
  } else {
    updateElement("workErrorMessage", "");
    document.getElementById("butWork").disabled = false;
  }
  if (JSONlocation[0].locationCurrent == JSONconfig[0].home) {
    //clicked on current destination
//    updateElement("workErrorMessage", "2");
    document.getElementById("butWork").disabled = false;
  } else {
    updateElement("workErrorMessage", "You need to go to your home country of " +JSONdestinations[JSONconfig[0].home].name);
    document.getElementById("butWork").disabled = true;
  } //if
} //function
/*** END workSelect ***/

/*** START workStart ***/
function workStart() {

  alert(workGetWorkDetails()); //B4 resetWork!

  meObjectUpdateWork();
  displayMeObject(); //displays the user's details
  //workButtonShowHide(); //???

  updateHistory("Worked " + JSONwork["work"][0].days + " days");

  callEvent(JSONlocation[0].locationCurrent, "work");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateWork() {
  JSONme[0].daysLeft = parseFloat(JSONme[0].daysLeft) + parseFloat(JSONwork["work"][0].holidays);
  JSONme[0].daysWorked = parseInt(JSONme[0].daysWorked) + parseInt(JSONwork["work"][0].days);
  JSONme[0].money = parseInt(JSONme[0].money) + parseInt(JSONwork["work"][0].money);
  JSONme[0].happiness = parseInt(JSONme[0].happiness) + parseInt(JSONwork["work"][0].happiness);
} //function
function workGetWorkDetails() {
  var strTemp = "";
      strTemp += "You will gain " + JSONwork["work"][0].holidays + " day's hoilday";
      strTemp += "You will work " + JSONwork["work"][0].days + " days";
      strTemp += "You will earn " + JSONconfig[0].currency + JSONwork["work"][0].money;
      strTemp += "Your happiness will be decreased by " + JSONwork["work"][0].happiness;
  return strTemp;
} //function
function resetTurnWork() {
  document.getElementById("workChoice").selectedIndex = 0;
  workButtonShowHide();
} //function
