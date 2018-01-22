
function actionSelect(strAction, index) {
  var intDays = 0;
  var intMoney = 0;
  var intTravelledDistance = 0;
  var intHappiness = 0;

  //resets any error styles
  calcAfford(0, 0, "divActionDays");
  calcAfford(0, 0, "divActionMoney");
  calcAfford(0, 0, "divActionHappiness");

  switch (strAction) {
    case "work":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationPrevious, JSONlocation[0].locationCurrent, "");
      var elem = document.getElementById("workChoice");
      intDays = elem.options[elem.selectedIndex].value;
      intMoney = calcMoney(intDays, JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving);
      intTravelledDistance = 0; //as working NOT travelling
      intHappiness = calHappiness(intDays, intMoney, 0, JSONconfig[0].units);
      //holidays gained?!?!?!
      calcAfford(JSONme[0].happiness, -intHappiness, "divActionHappiness");
    break;
    case "flight":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationPrevious, JSONlocation[0].locationCurrent, index);
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latitude, JSONdestinations[JSONlocation[0].locationCurrent].longitude, JSONdestinations[JSONlocation[0].locationDestination].latitude, JSONdestinations[JSONlocation[0].locationDestination].longitude), JSONconfig[0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latitude, JSONdestinations[JSONlocation[0].locationCurrent].longitude, JSONdestinations[JSONlocation[0].locationDestination].latitude, JSONdestinations[JSONlocation[0].locationDestination].longitude, JSONconfig[0].units), JSONconfig[0].units);
      intTravelledDistance = calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latitude, JSONdestinations[JSONlocation[0].locationCurrent].longitude, JSONdestinations[JSONlocation[0].locationDestination].latitude, JSONdestinations[JSONlocation[0].locationDestination].longitude, JSONconfig[0].units);
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig[0].units);
      calcAfford(JSONme[0].days, intDays, "divActionDays");
      calcAfford(JSONme[0].money, intMoney, "divActionMoney");
    break;
    case "trek":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationPrevious, JSONlocation[0].locationCurrent, index);
      var elem = document.getElementById("trekChoice");
      var actionSelectIndex = elem.options[elem.selectedIndex].value;
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latitude, JSONdestinations[JSONlocation[0].locationCurrent].longitude, JSONdestinations[actionSelectIndex].latitude, JSONdestinations[actionSelectIndex].longitude), JSONconfig[0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations[JSONlocation[0].locationCurrent].latitude, JSONdestinations[JSONlocation[0].locationCurrent].longitude, JSONdestinations[actionSelectIndex].latitude, JSONdestinations[actionSelectIndex].longitude, JSONconfig[0].units), JSONconfig[0].units);
      intTravelledDistance = JSONdestinations[actionSelectIndex].travelledDistance;
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig[0].units);
      calcAfford(JSONme[0].days, intDays, "divActionDays");
      calcAfford(JSONme[0].money, intMoney, "divActionMoney");
    break;
    case "walkAbout":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationPrevious, JSONlocation[0].locationCurrent, JSONlocation[0].locationDestination);
      var elem = document.getElementById("walkAboutChoice");
      intDays = elem.options[elem.selectedIndex].value;
      intMoney = calcMoney(parseInt(intDays), parseInt(JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving));
      intTravelledDistance = JSONdestinations[JSONlocation[0].locationCurrent].travelledDistance; //put before happiness as needs the value
      intHappiness = -calHappiness(parseInt(intDays), parseInt(calcMoney(intDays,  parseInt(JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving))), parseInt(JSONlocation[0].travelledDistance), JSONconfig[0].units); //adding the - to calHappiness below forces a positive
      calcAfford(JSONme[0].daysLeft, intDays, "divActionDays");
      calcAfford(JSONme[0].money, intMoney, "divActionMoney");
    break;
    default:
      alert("ERROR: actionSelect - Not an recognised action choice! How did you get here? : " + strAction);
  } //switch

  //UPDATE and DISPLAY object
  JSONaction[0].days = intDays;
  JSONaction[0].money = intMoney;
  JSONaction[0].travelledDistance = intTravelledDistance;
  JSONaction[0].happiness = intHappiness;
  updateElement("divActionDays", JSONaction[0].days);
  updateElement("divActionMoney", JSONconfig[0].currency + displayNumbersWithCommas(JSONaction[0].money));
  updateElement("divActionTravelledDistance", displayNumbersWithCommas(JSONaction[0].travelledDistance) + " " + JSONconfig[0].units);
  updateElement("divActionHappiness", JSONaction[0].happiness);
} //function

function actionSelectExecute(strAction, index) {

  turnStart(); //before anything, do something

  var intDays = 0;
  var intMoney = 0;
  var intTravelledDistance = 0;
  var intHappiness = 0;
  var intDaysLeft = 0;
  var intDaysWorked = 0;
  var intTravelledDays = 0;

  intDays = parseInt(JSONaction[0].days);
  intMoney = parseInt(JSONaction[0].money);
  intTravelledDistance = parseInt(JSONaction[0].travelledDistance);
  intHappiness = parseInt(JSONaction[0].happiness);

  //do calculations
  switch (strAction) {
    case "work":
      updateAndDisplayLocationObject(strAction, "", "", "");
      intMoney = JSONme[0].money + intMoney;
      intTravelledDistance = JSONme[0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme[0].happiness - intHappiness;
      intDaysLeft = JSONme[0].daysLeft + intDays;
      intDaysWorked = JSONme[0].daysWorked + intDays; // + 0 as have not worked!
      intTravelledDays = JSONme[0].travelledDays + 0;
    break;
    case "flight":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationCurrent, JSONlocation[0].locationDestination, "");
      trekPopulateLocationChoices();
      intMoney = JSONme[0].money - intMoney;
      intTravelledDistance = JSONme[0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme[0].happiness + intHappiness;
      intDaysLeft = JSONme[0].daysLeft - intDays;
      intDaysWorked = JSONme[0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme[0].travelledDays + intDays;
    break;
    case "trek":
      updateAndDisplayLocationObject(strAction, JSONlocation[0].locationCurrent, JSONlocation[0].locationDestination, "");
      intMoney = JSONme[0].money - intMoney;
      intTravelledDistance = JSONme[0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme[0].happiness + intHappiness;
      intDaysLeft = JSONme[0].daysLeft - intDays;
      intDaysWorked = JSONme[0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme[0].travelledDays + intDays;
    break;
    case "walkAbout":
      updateAndDisplayLocationObject(strAction, "", "", "");
      intMoney = JSONme[0].money - intMoney;
      intTravelledDistance = JSONme[0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme[0].happiness + intHappiness;
      intDaysLeft = JSONme[0].daysLeft - intDays;
      intDaysWorked = JSONme[0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme[0].travelledDays + intDays;
    break;
    default:
      alert("ERROR: actionSelectExecute - Not an recognised action choice! How did you get here?");
  } //switch

  //UPDATE and DISPLAY object
  JSONme[0].money = intMoney;
  JSONme[0].happiness = intHappiness;
  JSONme[0].daysLeft = intDaysLeft; //rename to days?
  JSONme[0].daysWorked = intDaysWorked;
  JSONme[0].travelledDays = intTravelledDays;
  JSONme[0].travelledDistance = intTravelledDistance;
  updateElement("meMoney", JSONme[0].money);
  updateElement("meHappiness", JSONme[0].happiness);
  updateElement("meDaysLeft", JSONme[0].daysLeft);
  updateElement("meDaysWorked", JSONme[0].daysWorked);
  updateElement("meTravelledDays", JSONme[0].travelledDays);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme[0].travelledDistance));

  turnEnd(); //finally do something

} //function



function trekPopulateLocationChoices() {
  //get all treks for region
  $("#trekChoice").empty(); //remove options from previous populate
  var elemTrekSelect = document.getElementById("trekChoice");
  //loop through
  for (var i = 0; i < JSONdestinations.length; i++) {
    if ((JSONdestinations[i].region == JSONdestinations[JSONlocation[0].locationCurrent].region)&&(JSONdestinations[i].destinationType == "trek")) {
      elemTrekSelect.options[elemTrekSelect.options.length] = new Option(JSONdestinations[i].name, i);
    } //if
  }//for
} //function




//UPDATE and DISPLAY object
function updateAndDisplayLocationObject(strAction, intPrevious, intCurrent, intDestination) {
  if (intPrevious != "")
    JSONlocation[0].locationPrevious = intPrevious;
  if (intCurrent != "")
  JSONlocation[0].locationCurrent = intCurrent;
  if (intDestination != "")
    JSONlocation[0].locationDestination = intDestination;
  updateElement("meLocationPrevious", JSONdestinations[JSONlocation[0].locationPrevious].name);
  updateElement("locationCurrentName", JSONdestinations[JSONlocation[0].locationCurrent].name);
  updateElement("locationDestinationName", JSONdestinations[JSONlocation[0].locationDestination].name);

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

//DISPLAY object
function displayMeObject() {
  //updates the display of the user's details

  updateElement("locationCurrentName", JSONdestinations[JSONlocation[0].locationCurrent].name);
  updateElement("meHappiness", JSONme[0].happiness);
  updateElement("meMoney", JSONconfig[0].currency + displayNumbersWithCommas(JSONme[0].money));
  updateElement("meSalary", JSONconfig[0].currency + displayNumbersWithCommas(JSONme[0].salary));
  updateElement("meDaysLeft", JSONme[0].daysLeft);
  updateElement("meDaysWorked", JSONme[0].daysWorked);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme[0].travelledDistance) + " " + JSONconfig[0].units);
  if (JSONlocation[0].locationCurrent == JSONlocation[0].locationPrevious) {
    //current location equals previous.. must be at the START.. or bugged!
    updateElement("meLocationPrevious", "");
  } else {
    updateElement("meLocationPrevious", JSONdestinations[JSONlocation[0].locationPrevious].name);
  }
  updateElement("meTravelledDays", JSONme[0].travelledDays);
} //function
