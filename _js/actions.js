
function actionSelect(strAction, index) {
  var intDays = 0;
  var intMoney = 0;
  var intTravelledDistance = 0;
  var intHappiness = 0;

  switch (strAction) {
    case "work":
      updateLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, "");
      intDays = workGetNoOfDaysToWork(); //DO FIRST AS REFERENCED LATER
      intMoney = calcMoney(workGetNoOfDaysToWork(), JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving);
      intTravelledDistance = 0; //as working NOT travelling
      intHappiness = calHappiness(workGetNoOfDaysToWork(), intMoney, 0, JSONconfig["config"][0].units);
      //holidays gained?!?!?!
    break;
    case "flight":
      updateLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, index);
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
      intTravelledDistance = calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units);
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig["config"][0].units);
    break;
    case "trek":
      updateLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, index);
      var elem = document.getElementById("trekChoice");
      var actionSelectIndex = elem.options[elem.selectedIndex].value;
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][actionSelectIndex].latLng[0], JSONdestinations["destinations"][actionSelectIndex].latLng[1]), JSONconfig["config"][0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][actionSelectIndex].latLng[0], JSONdestinations["destinations"][actionSelectIndex].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
      intTravelledDistance = JSONdestinations["destinations"][actionSelectIndex].travelledDistance;
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig["config"][0].units);
    break;
    case "walkAbout":
      updateLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination);
      intDays = walkAboutGetNoOfDaysToWalkAbout(); //DO FIRST AS REFERENCED LATER
      intMoney = calcWalkAboutMoney(JSONlocation["location"][0].days);
      intTravelledDistance = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].travelledDistance; //put before happiness as needs the value
      intHappiness = -calHappiness(parseInt(JSONlocation["location"][0].days), parseInt(calcWalkAboutMoney(JSONlocation["location"][0].days)), parseInt(JSONlocation["location"][0].travelledDistance), JSONconfig["config"][0].units); //adding the - to calHappiness below forces a positive
    break;
    default:
      alert("ERROR: actionSelect - Not an recognised action choice! How did you get here?");
  } //switch

  //update and diplay action object
  JSONaction["action"][0].days = intDays;
  JSONaction["action"][0].money = intMoney;
  JSONaction["action"][0].travelledDistance = intTravelledDistance;
  JSONaction["action"][0].happiness = intHappiness;
  updateElement("divActionDays", JSONaction["action"][0].days);
  updateElement("divActionMoney", JSONconfig["config"][0].currency + JSONaction["action"][0].money);
  updateElement("divActionTravelledDistance", JSONaction["action"][0].travelledDistance);
  updateElement("divActionHappiness", JSONaction["action"][0].happiness);
} //function

function updateLocationObject(strAction, intPrevious, intCurrent, intDestination) {
  if (intPrevious != "")
    JSONlocation["location"][0].locationPrevious = intPrevious;
  if (intCurrent != "")
  JSONlocation["location"][0].locationCurrent = intCurrent;
  if (intDestination != "")
    JSONlocation["location"][0].locationDestination = intDestination;
  updateElement("meLocationPrevious", JSONdestinations["destinations"][JSONlocation["location"][0].locationPrevious].name);
  updateElement("locationCurrentName", JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateElement("locationDestinationName", JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].name);

  switch (strAction) {
    case "work":
      updateElement("meLocationPrevious", "");
      updateElement("locationDestinationName", "");
    break;
    case "flight":
    break;
    case "trek":
    break;
    case "walkAbout":
    break;
    case "start":
    //start
    updateElement("meLocationPrevious", "");
    updateElement("locationDestinationName", "");
    break;
    default:
      alert("ERROR: actionSelectExecute - Not an recognised action choice! How did you get here?");
  } //switch

} //function
function actionSelectExecute(strAction, index) {
  var intDays = 0;
  var intMoney = 0;
  var intTravelledDistance = 0;
  var intHappiness = 0;
  var intDaysLeft = 0;
  var intDaysWorked = 0;
  var intTravelledDays = 0;

  intDays = parseInt(JSONaction["action"][0].days);
  intMoney = parseInt(JSONaction["action"][0].money);
  intTravelledDistance = parseInt(JSONaction["action"][0].travelledDistance);
  intHappiness = parseInt(JSONaction["action"][0].happiness);

  turnStart(); //before anything, do something

  //do calculations
  switch (strAction) {
    case "work":
      updateLocationObject(strAction, "", "", "");
      intMoney = JSONme["me"][0].money + intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness - intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft + intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + intDays; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + 0;
    break;
    case "flight":
      updateLocationObject(strAction, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination, "");
      intMoney = JSONme["me"][0].money - intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness + intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft - intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + intDays;
    break;
    case "trek":
      updateLocationObject(strAction, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination, "");
      intMoney = JSONme["me"][0].money - intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness + intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft - intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + intDays;
    break;
    case "walkAbout":
      updateLocationObject(strAction, "", "", "");
      intMoney = JSONme["me"][0].money - intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness + intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft - intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + intDays;
    break;
    default:
      alert("ERROR: actionSelectExecute - Not an recognised action choice! How did you get here?");
  } //switch


  JSONme["me"][0].money = intMoney;
  JSONme["me"][0].happiness = intHappiness;
  JSONme["me"][0].daysLeft = intDaysLeft; //rename to days?
  JSONme["me"][0].daysWorked = intDaysWorked;
  JSONme["me"][0].travelledDays = intTravelledDays;
  JSONme["me"][0].travelledDistance = intTravelledDistance;
  updateElement("meMoney", JSONme["me"][0].money);
  updateElement("meHappiness", JSONme["me"][0].happiness);
  updateElement("meDaysLeft", JSONme["me"][0].daysLeft);
  updateElement("meDaysWorked", JSONme["me"][0].daysWorked);
  updateElement("meTravelledDays", JSONme["me"][0].travelledDays);
  updateElement("meTravelledDistance", JSONme["me"][0].travelledDistance);

  //update where you are! important!
//  updateLocationObject(strAction, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination, "");


  turnEnd(); //finally do something

} //function









function initStart() {

updateLocationObject("start", 0, JSONconfig["config"][0].home, 0);

  //defaults from config
  //JSONlocation["location"][0].locationCurrent = JSONconfig["config"][0].home; //make the destination the config default

  /* GUI GUI GUI */
  /* GUI GUI GUI */
//  elemHideShow("destinationTable", "Hide");
  //elemHideShow("workTable", "Show");
  //elemHideShow("trekTable", "Hide");
  /* GUI GUI GUI */
  /* GUI GUI GUI */

  meObjectDisplay(); //displays UPDATE? the user's details

//travelSelect(JSONlocation["location"][0].locationCurrent); //init travel
//workSelect(); //init Work
//trekPopulateLocationChoices();//init Treks for Location

  updateHistory("Started in " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateTurnDetails(""); //???

}

function turnStart() {
}
function turnEnd() {
  //finally do anything

  updateTurnDetails(""); //???
  updateMapCurrentLocation();
  resetTurnWork();
  trekPopulateLocationChoices();
  meObjectDisplay(); //displays UPDATE? the user's details

//  travelButtonShowHide(JSONlocation["location"][0].locationCurrent); //if can afford


/* GUI GUI GUI */
/* GUI GUI GUI */
elemHideShow("destinationTable", "Hide");
elemHideShow("trekTable", "Hide");
elemHideShow("workTable", "Hide");
if (JSONlocation["location"][0].locationCurrent == JSONconfig["config"][0].home) {
  elemHideShow("workTable", "Show");
  elemHideShow("trekTable", "Show");
} else {
  elemHideShow("trekTable", "Show");
}
/* GUI GUI GUI */
/* GUI GUI GUI */


// WORK OUT % OF COUNTRY YOU HAVE TREKKED?????

}


function calcMoney(intWorkDays, intCostOfLiving) {
  var intResult = 0;
      intResult = intCostOfLiving * intWorkDays;
  return intResult;
}
