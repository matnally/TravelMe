
function eventCheck() {

  var intRandomChancePercentage = 0;
  var intEvent = 0;
  var intTotal = 0;
  var strType = "";

  intRandomChancePercentage = Math.random() * 100;

  if (intRandomChancePercentage <= JSONconfig[0].eventCheckChancePercentage) {

    //get appropiate event type
    strType = eventGetEventType();
    do {
      //get an event related to the chosen event type
      intEvent = eventGetEventRandom();
    } //do
    while (JSONevent[intEvent].type == strType);

    //MONEY
    intTotal = (JSONplayer[0].money + JSONevent[intEvent].cost); //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = (JSONplayer[0].happiness + JSONevent[intEvent].happiness); //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE

    alert(JSONconfig[0].txtDialogEventTitle + "<br><br>" + JSONevent[intEvent].name
      + "<br>" + JSONevent[intEvent].description
      + "<br>" + JSONconfig[0].txtDialogEventCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONevent[intEvent].cost)
      + "<br>" + JSONconfig[0].txtDialogEventHappiness + " " + defThousandsDelimiter(JSONevent[intEvent].happiness)
    );

  } //if

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function eventGetEventRandom() {
  return Math.floor(Math.random() * (JSONevent.length - 1) + 0); //choose a random event
} //function

function eventGetEventType() {
  //IF WORK / TRAVEL A LOT, MAKE EVENT RELEVENT (breakdown, stress, tropical disease)

  // JSONplayer[0].distanceTravelled
  // JSONplayer[0].destination.length
  // JSONplayer[0].luxury.length
  return strType = "work";

} //function
