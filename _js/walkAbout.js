
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

  //JSONlocation[0].locationCurrent = JSONme[0].locationCurrent;

  JSONlocation[0].days = walkAboutGetNoOfDaysToWalkAbout(); //DO FIRST AS REFERENCED LATER
  JSONlocation[0].money = calcWalkAboutMoney(JSONlocation[0].days);
  //put before happiness as needs the value
  JSONlocation[0].travelledDistance = JSONdestinations[JSONlocation[0].locationCurrent].travelledDistance;
  //adding the - to calHappiness below forces a positive
  JSONlocation[0].happiness = -calHappiness(parseInt(JSONlocation[0].days), parseInt(calcWalkAboutMoney(JSONlocation[0].days)), parseInt(JSONlocation[0].travelledDistance), JSONconfig[0].units)

//alert(JSONlocation[0].happiness);
//alert(walkAboutGetNoOfDaysToWalkAbout());
//alert(calcWalkAboutMoney(JSONlocation[0].days), JSONlocation[0].travelledDistance, JSONconfig[0].units);

//  ,"travelledDistance"  : 0
  //,"travelledDays"      : 0


} //function
function walkAboutObjectDisplay() {
  updateElement("divActionDays", JSONlocation[0].days);
  updateElement("divActionMoney", JSONconfig[0].currency + JSONlocation[0].money);
  updateElement("divActionTravelledDistance", JSONlocation[0].travelledDistance);
  updateElement("divActionHappiness", JSONlocation[0].happiness);
} //function
function walkAboutButtonShowHide() {
  if (calcAfford(JSONme[0].daysLeft, Math.abs(JSONlocation[0].days), "divActionDays") < 1) {
    updateElement("trekErrorMessage", "You don't have any days left");
    document.getElementById("butWalkAbout").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butWalkAbout").disabled = false;
  } //if
  if (calcAfford(JSONme[0].money, Math.abs(calcWalkAboutMoney(JSONlocation[0].days)), "divActionMoney") < 1) {
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
  displayMeObject(); //displays the user's details
  //walkAboutButtonShowHide(); //???

  updateHistory("Walked About " + JSONlocation[0].days + " days");

  alert(walkAboutGetWalkAboutDetails()); //B4 resetWalkAbout!

  callEvent(JSONlocation[0].locationCurrent, "walkAbout");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateWalkAbout() {
  JSONme[0].daysLeft = parseFloat(JSONme[0].daysLeft) - parseFloat(JSONlocation[0].days);
  //JSONme[0].daysWalkAbouted = parseInt(JSONme[0].daysWalkAbouted) + parseInt(JSONlocation[0].days);
  JSONme[0].money = parseInt(JSONme[0].money) - parseInt(JSONlocation[0].money);
  JSONme[0].happiness = parseInt(JSONme[0].happiness) + parseInt(JSONlocation[0].happiness);
  JSONme[0].travelledDistance = JSONme[0].travelledDistance + parseInt(JSONlocation[0].travelledDistance);
  JSONme[0].travelledDays = JSONme[0].travelledDays + parseInt(JSONlocation[0].days);
} //function
function walkAboutGetWalkAboutDetails() {
  var strTemp = "-Deductions and additions already displayed and updated-";
      strTemp += "You will loose " + JSONlocation[0].days + " day's hoilday";
      strTemp += "You will walkAbout " + JSONlocation[0].days + " days";
      strTemp += "You will loose " + JSONconfig[0].currency + JSONlocation[0].money;
      strTemp += "Your happiness will be increased by " + JSONlocation[0].happiness;
      strTemp += "You will travel " + JSONlocation[0].travelledDistance + " " + JSONconfig[0].units;
      strTemp += "You will travel " + JSONlocation[0].days + " days";

  return strTemp;
} //function
function resetTurnWalkAbout() {
  document.getElementById("walkAboutChoice").selectedIndex = 0;
  walkAboutButtonShowHide();
} //function





function calcWalkAboutMoney(intWorkDays) {

  var intResult = 0;
  var intSalary = JSONme[0].salary;

  intResult = intSalary * intWorkDays;
  return intResult;

}
