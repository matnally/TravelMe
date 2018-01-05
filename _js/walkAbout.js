
/*** START walkAboutSelect ***/
function walkAboutSelect() {


actionSelect("walkAbout", index);
actionSelectDisplay();


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

  //JSONlocation["location"][0].locationCurrent = JSONme["me"][0].locationCurrent;

  JSONlocation["location"][0].days = walkAboutGetNoOfDaysToWalkAbout(); //DO FIRST AS REFERENCED LATER
  JSONlocation["location"][0].money = calcWalkAboutMoney(JSONlocation["location"][0].days);
  //put before happiness as needs the value
  JSONlocation["location"][0].travelledDistance = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].travelledDistance;
  //adding the - to calHappiness below forces a positive
  JSONlocation["location"][0].happiness = -calHappiness(parseInt(JSONlocation["location"][0].days), parseInt(calcWalkAboutMoney(JSONlocation["location"][0].days)), parseInt(JSONlocation["location"][0].travelledDistance), JSONconfig["config"][0].units)

//alert(JSONlocation["location"][0].happiness);
//alert(walkAboutGetNoOfDaysToWalkAbout());
//alert(calcWalkAboutMoney(JSONlocation["location"][0].days), JSONlocation["location"][0].travelledDistance, JSONconfig["config"][0].units);

//  ,"travelledDistance"  : 0
  //,"travelledDays"      : 0


} //function
function walkAboutObjectDisplay() {
  updateElement("divActionDays", JSONlocation["location"][0].days);
  updateElement("divActionMoney", JSONconfig["config"][0].currency + JSONlocation["location"][0].money);
  updateElement("divActionTravelledDistance", JSONlocation["location"][0].travelledDistance);
  updateElement("divActionHappiness", JSONlocation["location"][0].happiness);
} //function
function walkAboutButtonShowHide() {
  if (calcAfford(JSONme["me"][0].daysLeft, Math.abs(JSONlocation["location"][0].days), "divActionDays") < 1) {
    updateElement("trekErrorMessage", "You don't have any days left");
    document.getElementById("butWalkAbout").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butWalkAbout").disabled = false;
  } //if
  if (calcAfford(JSONme["me"][0].money, Math.abs(calcWalkAboutMoney(JSONlocation["location"][0].days)), "divActionMoney") < 1) {
    updateElement("trekErrorMessage", "You can't afford this. Maybe can't afford it in days too... TODO");
    document.getElementById("butWalkAbout").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butWalkAbout").disabled = false;
  } //if
} //function
/*** END walkAboutSelect ***/

/*** START walkAboutStart ***/
function walkAboutStart() {

  walkAboutObjectUpdate();//??
  walkAboutObjectDisplay();//??


  meObjectUpdateWalkAbout();
  meObjectDisplay(); //displays the user's details
  //walkAboutButtonShowHide(); //???

  updateHistory("Walked About " + JSONlocation["location"][0].days + " days");

  alert(walkAboutGetWalkAboutDetails()); //B4 resetWalkAbout!

  callEvent(JSONlocation["location"][0].locationCurrent, "walkAbout");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateWalkAbout() {
  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) - parseFloat(JSONlocation["location"][0].days);
  //JSONme["me"][0].daysWalkAbouted = parseInt(JSONme["me"][0].daysWalkAbouted) + parseInt(JSONlocation["location"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(JSONlocation["location"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONlocation["location"][0].happiness);
  JSONme["me"][0].travelledDistance = JSONme["me"][0].travelledDistance + parseInt(JSONlocation["location"][0].travelledDistance);
  JSONme["me"][0].travelledDays = JSONme["me"][0].travelledDays + parseInt(JSONlocation["location"][0].days);
} //function
function walkAboutGetWalkAboutDetails() {
  var strTemp = "-Deductions and additions already displayed and updated-";
      strTemp += "You will loose " + JSONlocation["location"][0].days + " day's hoilday";
      strTemp += "You will walkAbout " + JSONlocation["location"][0].days + " days";
      strTemp += "You will loose " + JSONconfig["config"][0].currency + JSONlocation["location"][0].money;
      strTemp += "Your happiness will be increased by " + JSONlocation["location"][0].happiness;
      strTemp += "You will travel " + JSONlocation["location"][0].travelledDistance + " " + JSONconfig["config"][0].units;
      strTemp += "You will travel " + JSONlocation["location"][0].days + " days";

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
