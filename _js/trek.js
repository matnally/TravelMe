
/*** START trekSelect ***/
function trekSelect() {


actionSelect("trek", index);
actionSelectDisplay();

/*
  trekObjectUpdate();
  trekObjectDisplay();
  trekButtonShowHide(); //if can afford

  updateTurnDetails(trekGetTrekDetails()); //???
*/

} //function
function trekGetNoOfDaysToTrek() {
  var elem = document.getElementById("trekChoice");
  return elem.options[elem.selectedIndex].value;
} //function
function trekObjectUpdate() {

  var elem = document.getElementById("trekChoice");
//alert(document.getElementById("trekChoice").value);
  //JSONlocation[0].days = JSONdestinations[parseInt(elem.options[elem.selectedIndex].value)].days;
  //alert(JSONlocation[0].days);


  var index = elem.options[elem.selectedIndex].value;
  JSONlocation[0].days = calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latLng[0], JSONdestinations[JSONlocation[0].locationCurrent].latLng[1], JSONdestinations[index].latLng[0], JSONdestinations[index].latLng[1]), JSONconfig[0].units);
  JSONlocation[0].money = calcTrekMoney(JSONdestinations[elem.options[elem.selectedIndex].value].days);
  JSONlocation[0].happiness = calHappiness(JSONdestinations[elem.options[elem.selectedIndex].value].days, calcTrekMoney(JSONdestinations[elem.options[elem.selectedIndex].value].days), 0, JSONconfig[0].units)
  JSONlocation[0].travelledDistance = JSONdestinations[elem.options[elem.selectedIndex].value].travelledDistance;
//  JSONlocation[0].travelledDays = JSONme[0].travelledDays + parseInt(JSONlocation[0].days);

//  JSONlocation[0].holidays = JSONdestinations[elem.options[elem.selectedIndex].value].days;
} //function
function trekObjectDisplay() {
//  alert(JSONlocation[0].days);
  updateElement("divActionDays", JSONlocation[0].days);
  updateElement("divActionMoney", JSONconfig[0].currency + JSONlocation[0].money);
  updateElement("divActionHappiness", JSONlocation[0].happiness);
  updateElement("divActionTravelledDistance", JSONlocation[0].travelledDistance);
} //function
function trekButtonShowHide() {
  if (calcAfford(JSONme[0].happiness, Math.abs(JSONlocation[0].happiness), "divActionHappiness") < 1) {
    updateElement("trekErrorMessage", "You'll be too unhappy");
    document.getElementById("butTrek").disabled = true;
  } else {
    updateElement("trekErrorMessage", "");
    document.getElementById("butTrek").disabled = false;
  }
  if (JSONlocation[0].locationCurrent == JSONconfig[0].home) {
    //clicked on current destination
//    updateElement("trekErrorMessage", "2");
    document.getElementById("butTrek").disabled = false;
  } else {
    updateElement("trekErrorMessage", "You need to go to your home country of " + JSONdestinations[JSONconfig[0].home].name);
    document.getElementById("butTrek").disabled = true;
  } //if
} //function
/*** END trekSelect ***/

/*** START trekStart ***/
function trekStart() {


  alert(trekGetTrekDetails()); //B4 resetTrek!

  meObjectUpdateTrek();
  displayMeObject(); //displays the user's details
  //trekButtonShowHide(); //???

  updateHistory("Treked " + JSONlocation[0].days + " days");

  callEvent(JSONlocation[0].locationCurrent, "trek");

  //finally do anything
  turnEnd();

} //function
function meObjectUpdateTrek() {
  JSONme[0].daysLeft = parseFloat(JSONme[0].daysLeft) - parseFloat(JSONlocation[0].days);
//  JSONme[0].travelledDays = parseInt(JSONme[0].travelledDays) + parseInt(JSONlocation[0].days);
  JSONme[0].money = parseInt(JSONme[0].money) - parseInt(JSONlocation[0].money);
  JSONme[0].happiness = parseInt(JSONme[0].happiness) + parseInt(JSONlocation[0].happiness);

  JSONme[0].travelledDistance = JSONme[0].travelledDistance + parseInt(JSONlocation[0].travelledDistance);
  JSONme[0].travelledDays = JSONme[0].travelledDays + parseInt(JSONlocation[0].days);
  //TODO:
    //Distance Travelled???
} //function
function trekGetTrekDetails() {
  var strTemp = "";
      strTemp += "You will loose " + JSONlocation[0].days + " day's hoilday";
      strTemp += "You will trek " + JSONlocation[0].days + " days";
      strTemp += "It will cost " + JSONconfig[0].currency + JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving + " per day ("+JSONconfig[0].currency+calcTrekTotalCost(JSONlocation[0].days,JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving)+" in total)";
      strTemp += "Your happiness will be increased by " + JSONlocation[0].happiness;
  return strTemp;
} //function
function resetTurnTrek() {
  document.getElementById("trekChoice").selectedIndex = 0;
  trekButtonShowHide();
} //function



function calcTrekTotalCost(intDays, intCostOfLiving) {
  return  (parseInt(intCostOfLiving) * parseInt(intDays))
}





//function trekGetNoOfDaysToTrek() {
//  return JSONdestinations[JSONlocation[0].locationCurrent].days;
//}
function calcTrekMoney(intWorkDays) {
  var intResult = 0;
  var intCostOfLiving = JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving;

  intResult = intCostOfLiving * intWorkDays;
  return intResult;
}
