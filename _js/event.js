
function eventCheck(strAction) {

  var intRandomChancePercentage = 0;
  var intEvent = 0;
  var intTotal = 0;
  // var strType = "";

  intRandomChancePercentage = Math.random() * 100;

  if (intRandomChancePercentage <= JSONconfig[0].eventCheckChancePercentage) {

    // strType = eventGetEventType(); //get appropiate event type
    do {
      intEvent = eventGetEventRandom(); //get event related to the chosen event type
    } while (JSONevent[intEvent].type != strAction);

    //MONEY
    intTotal = (JSONplayer[0].money + JSONevent[intEvent].cost); //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = (JSONplayer[0].happiness + JSONevent[intEvent].happiness); //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE

    var strTemp = (JSONconfig[0].txtDialogEventTitle
      + "\n\n" + JSONevent[intEvent].name
      + "\n" + JSONevent[intEvent].description
      + "\n\n" + JSONconfig[0].txtDialogEventCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONevent[intEvent].cost)
      + "\n" + JSONconfig[0].txtDialogEventHappiness + " " + defThousandsDelimiter(JSONevent[intEvent].happiness)
    );
    alert( $('<span/>').html(strTemp).text());
    //guiCreateDialog(JSONconfig[0].txtDialogEventTitle, strTemp);

  } //if

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function eventGetEventRandom() {
  return Math.round(Math.random() * (JSONevent.length - 1) + 0); //choose a random event
} //function

function eventGetEventType() {
//NEED ANYMORE????
  var strType = "";

  switch (true) {
    case (JSONplayer[0].destination.length  > (JSONdestination.length / JSONconfig[0].eventGetEventTypeOffsetDestination)):
      strType = "work";
    break;
    case (JSONplayer[0].distanceTravelled  > (travCalcDistanceTotal() / JSONconfig[0].eventGetEventTypeOffsetDistance)):
      strType = "travel";
    break;
    case ((JSONplayer[0].distanceTravelled  > (travCalcDistanceTotal() / JSONconfig[0].eventGetEventTypeOffsetDistance)) && (JSONplayer[0].destination.length  > (JSONdestination.length / JSONconfig[0].eventGetEventTypeOffsetDestination))):
      //both
      strType = "";
    break;
    default:
      alert("eventGetEventType-ERROR");
  } //switch

  return strType;

} //function

function eventCreateStats() {

  var intCost = 0;
  var intHappiness = 0;
  var intBaseValue = 0;

  for (e in JSONevent) {

    intBaseValue = Math.floor(Math.random() * (JSONconfig[0].JSONeventBaseValueMax) + JSONconfig[0].JSONeventBaseValueMin); //get random base value

    intCost = (intBaseValue / JSONconfig[0].JSONeventCostOffset).toFixed(0);
    intHappiness = (intBaseValue / JSONconfig[0].JSONeventHappinessOffset).toFixed(0);

    JSONevent[e].name = JSONevent[e].name + " " + e;
    JSONevent[e].cost = parseInt(intCost);
    JSONevent[e].happiness = parseInt(intHappiness);

  } //for

} //function
