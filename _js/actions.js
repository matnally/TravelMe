
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
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, "");
      var elem = document.getElementById("workChoice");
      intDays = elem.options[elem.selectedIndex].value;
      intMoney = calcMoney(intDays, JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving);
      intTravelledDistance = 0; //as working NOT travelling
      intHappiness = calHappiness(intDays, intMoney, 0, JSONconfig["config"][0].units);
      //holidays gained?!?!?!
      calcAfford(JSONme["me"][0].happiness, -intHappiness, "divActionHappiness");
    break;
    case "flight":
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, index);
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1]), JSONconfig["config"][0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
      intTravelledDistance = calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].latLng[1], JSONconfig["config"][0].units);
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig["config"][0].units);
      calcAfford(JSONme["me"][0].days, intDays, "divActionDays");
      calcAfford(JSONme["me"][0].money, intMoney, "divActionMoney");
    break;
    case "trek":
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, index);
      var elem = document.getElementById("trekChoice");
      var actionSelectIndex = elem.options[elem.selectedIndex].value;
      intDays = calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][actionSelectIndex].latLng[0], JSONdestinations["destinations"][actionSelectIndex].latLng[1]), JSONconfig["config"][0].units);
      intMoney = calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][actionSelectIndex].latLng[0], JSONdestinations["destinations"][actionSelectIndex].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units);
      intTravelledDistance = JSONdestinations["destinations"][actionSelectIndex].travelledDistance;
      intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig["config"][0].units);
      calcAfford(JSONme["me"][0].days, intDays, "divActionDays");
      calcAfford(JSONme["me"][0].money, intMoney, "divActionMoney");
    break;
    case "walkAbout":
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationPrevious, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination);
      var elem = document.getElementById("walkAboutChoice");
      intDays = elem.options[elem.selectedIndex].value;
      intMoney = calcMoney(parseInt(intDays), parseInt(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving));
      intTravelledDistance = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].travelledDistance; //put before happiness as needs the value
      intHappiness = -calHappiness(parseInt(intDays), parseInt(calcMoney(intDays,  parseInt(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].costOfLiving))), parseInt(JSONlocation["location"][0].travelledDistance), JSONconfig["config"][0].units); //adding the - to calHappiness below forces a positive
      calcAfford(JSONme["me"][0].daysLeft, intDays, "divActionDays");
      calcAfford(JSONme["me"][0].money, intMoney, "divActionMoney");
    break;
    default:
      alert("ERROR: actionSelect - Not an recognised action choice! How did you get here? : " + strAction);
  } //switch

  //UPDATE and DISPLAY object
  JSONaction["action"][0].days = intDays;
  JSONaction["action"][0].money = intMoney;
  JSONaction["action"][0].travelledDistance = intTravelledDistance;
  JSONaction["action"][0].happiness = intHappiness;
  updateElement("divActionDays", JSONaction["action"][0].days);
  updateElement("divActionMoney", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONaction["action"][0].money));
  updateElement("divActionTravelledDistance", displayNumbersWithCommas(JSONaction["action"][0].travelledDistance) + " " + JSONconfig["config"][0].units);
  updateElement("divActionHappiness", JSONaction["action"][0].happiness);
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

  intDays = parseInt(JSONaction["action"][0].days);
  intMoney = parseInt(JSONaction["action"][0].money);
  intTravelledDistance = parseInt(JSONaction["action"][0].travelledDistance);
  intHappiness = parseInt(JSONaction["action"][0].happiness);

  //do calculations
  switch (strAction) {
    case "work":
      updateAndDisplayLocationObject(strAction, "", "", "");
      intMoney = JSONme["me"][0].money + intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness - intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft + intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + intDays; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + 0;
    break;
    case "flight":
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination, "");
      trekPopulateLocationChoices();
      intMoney = JSONme["me"][0].money - intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness + intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft - intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + intDays;
    break;
    case "trek":
      updateAndDisplayLocationObject(strAction, JSONlocation["location"][0].locationCurrent, JSONlocation["location"][0].locationDestination, "");
      intMoney = JSONme["me"][0].money - intMoney;
      intTravelledDistance = JSONme["me"][0].travelledDistance + intTravelledDistance;
      intHappiness = JSONme["me"][0].happiness + intHappiness;
      intDaysLeft = JSONme["me"][0].daysLeft - intDays;
      intDaysWorked = JSONme["me"][0].daysWorked + 0; // + 0 as have not worked!
      intTravelledDays = JSONme["me"][0].travelledDays + intDays;
    break;
    case "walkAbout":
      updateAndDisplayLocationObject(strAction, "", "", "");
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

  //UPDATE and DISPLAY object
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
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme["me"][0].travelledDistance));

  turnEnd(); //finally do something

} //function



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




//UPDATE and DISPLAY object
function updateAndDisplayLocationObject(strAction, intPrevious, intCurrent, intDestination) {
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

//DISPLAY object
function displayMeObject() {
  //updates the display of the user's details
  updateElement("locationCurrentName", JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  updateElement("meHappiness", JSONme["me"][0].happiness);
  updateElement("meMoney", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONme["me"][0].money));
  updateElement("meSalary", JSONconfig["config"][0].currency + displayNumbersWithCommas(JSONme["me"][0].salary));
  updateElement("meDaysLeft", JSONme["me"][0].daysLeft);
  updateElement("meDaysWorked", JSONme["me"][0].daysWorked);
  updateElement("meTravelledDistance", displayNumbersWithCommas(JSONme["me"][0].travelledDistance) + " " + JSONconfig["config"][0].units);
  if (JSONlocation["location"][0].locationCurrent == JSONlocation["location"][0].locationPrevious) {
    //current location equals previous.. must be at the START.. or bugged!
    updateElement("meLocationPrevious", "");
  } else {
    updateElement("meLocationPrevious", JSONdestinations["destinations"][JSONlocation["location"][0].locationPrevious].name);
  }
  updateElement("meTravelledDays", JSONme["me"][0].travelledDays);
} //function
