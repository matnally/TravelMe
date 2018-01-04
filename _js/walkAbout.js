
/*** START walkAboutSelect ***/
function walkAboutSelect() {

  walkAboutObjectUpdate();
  walkAboutObjectDisplay();
  walkAboutButtonShowHide(); //if can afford

  updateTurnDetails(walkAboutGetWalkAboutDetails()); //???

} //function
function walkAboutGetNoOfDaysToWalkAbout() {
  var elem = document.getElementById("walkAboutChoice");
  return elem.options[elem.selectedIndex].value;
} //function
function walkAboutObjectUpdate() {
  JSONlocation["location"][0].days = walkAboutGetNoOfDaysToWalkAbout(); //DO FIRST AS REFERENCED LATER
  JSONlocation["location"][0].money = calcWalkAboutMoney(JSONlocation["location"][0].days);
  JSONlocation["location"][0].happiness = calHappiness(JSONlocation["location"][0].days, calcWalkAboutMoney(JSONlocation["location"][0].days), 0, JSONconfig["config"][0].units)
  JSONlocation["location"][0].holidays = calcWalkAboutHolidays(JSONlocation["location"][0].days);
} //function
function walkAboutObjectDisplay() {
  updateElement("divTrekDays", JSONlocation["location"][0].days);
  updateElement("divTrekMoney", JSONconfig["config"][0].currency + JSONlocation["location"][0].money);
  updateElement("divTrekHappiness", JSONlocation["location"][0].happiness);
//  updateElement("divTrekHolidays", JSONlocation["location"][0].holidays);
} //function
function walkAboutButtonShowHide() {
  if (calcAfford(JSONme["me"][0].happiness, Math.abs(JSONlocation["location"][0].happiness), "divTrekHappiness") < 1) {
    updateElement("trekErrorMessage", "You'll be too unhappy");
    document.getElementById("butWalkAbout").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butWalkAbout").disabled = false;
  }
  if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) {
    //clicked on current destination
//    updateElement("walkAboutErrorMessage", "2");
    document.getElementById("butWalkAbout").disabled = false;
  } else {
    updateElement("trekErrorMessage", "You need to go to your home country of " +JSONdestinations["destinations"][JSONconfig["config"][0].home].name);
    document.getElementById("butWalkAbout").disabled = true;
  } //if
} //function
/*** END walkAboutSelect ***/

/*** START walkAboutStart ***/
function walkAboutStart() {

  alert(walkAboutGetWalkAboutDetails()); //B4 resetWalkAbout!

  meObjectUpdateWalkAbout();
  meObjectDisplay(); //displays the user's details
  //walkAboutButtonShowHide(); //???

  updateHistory("Walked About " + JSONlocation["location"][0].days + " days");

  callEvent(JSONlocation["location"][0].locationCurrent, "walkAbout");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateWalkAbout() {
  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) + parseFloat(JSONlocation["location"][0].holidays);
  JSONme["me"][0].daysWalkAbouted = parseInt(JSONme["me"][0].daysWalkAbouted) + parseInt(JSONlocation["location"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) + parseInt(JSONlocation["location"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONlocation["location"][0].happiness);
} //function
function walkAboutGetWalkAboutDetails() {
  var strTemp = "";
      strTemp += "You will gain " + JSONlocation["location"][0].holidays + " day's hoilday";
      strTemp += "You will walkAbout " + JSONlocation["location"][0].days + " days";
      strTemp += "You will earn " + JSONconfig["config"][0].currency + JSONlocation["location"][0].money;
      strTemp += "Your happiness will be decreased by " + JSONlocation["location"][0].happiness;
  return strTemp;
} //function
function resetTurnWalkAbout() {
  document.getElementById("walkAboutChoice").selectedIndex = 0;
  walkAboutButtonShowHide();
} //function





function calcWalkAboutMoney(intWorkDays) {

  var intResult = 0;
  var intSalary = JSONme["me"][0].salary;

  intResult = intSalary * intWorkDays;
  return intResult;

}

function calcWalkAboutHolidays(intWorkDays) {

  var intResult = 0;
      intResult = intWorkDays;
  return intResult;

}
