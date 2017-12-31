function callEvent(index) {
  // calls events

  //get array of events
  var arrTemp = JSONdestinations["destinations"][index].events;
  //loop through events
  for (var i = 0; i < arrTemp.length; i++) {

    if (calcEventChance(arrTemp[i]) == true) {
      //event happened!
      executeEvent(arrTemp[i]);
    } //if

  }//for

} //function


function calcEventChance(index) {
  // calc changce of event happen

  var strTemp = JSONevent["event"][index].eventType
  var intChance = 0;

  switch (strTemp) {
    case "rare":
      intChance = 10;
      break;
    case "common":
      intChance = 50;
      break;
    default:
      intChance = 1;
  } //switch

  // uses chancejs lib
  return chance.bool({likelihood: intChance});

} //function


function executeEvent(index) {

  alert(displayEventFactors(index)); //display
  executeEventFactors(index); //take away
  displayCurrent(); //displays the user's details

}

function executeEventFactors(index) {

  var objEvent = JSONevent["event"][index];

  updateHistory("*" + objEvent.name);

  executeFactor("happiness", objEvent.happiness);
  executeFactor("money", objEvent.money);
  executeFactor("salary", objEvent.salary);
  executeFactor("daysLeft", objEvent.daysLeft);
  executeFactor("daysWorked", objEvent.daysWorked);
  executeFactor("travelledDistance", objEvent.travelledDistance);
  executeFactor("travelledDays", objEvent.travelledDays);


}

function executeFactor(strProperty, intFactor) {
  //add or take away the factor

  if (intFactor != 0) {
    JSONme["me"][0][strProperty] = parseInt(JSONme["me"][0][strProperty]) + parseInt(intFactor);
    updateHistory("*" + strProperty + " " + intFactor);
  }

} //function


function displayEventFactors(index) {
  //build up event text

  var objEvent = JSONevent["event"][index];
  var strTemp = "";

      strTemp += objEvent.name + "\n";
      strTemp += objEvent.description + "\n";
      strTemp += objEvent.eventCategory + "\n";
      strTemp += objEvent.eventType + "\n";

      strTemp += displayFactor("happiness", objEvent.happiness);
      strTemp += displayFactor("money", objEvent.money);
      strTemp += displayFactor("salary", objEvent.salary);
      strTemp += displayFactor("daysLeft", objEvent.daysLeft);
      strTemp += displayFactor("daysWorked", objEvent.daysWorked);
      strTemp += displayFactor("travelledDistance", objEvent.travelledDistance);
      strTemp += displayFactor("travelledDays", objEvent.travelledDays);

  return strTemp;

} //function


function displayFactor(strProperty, intFactor) {
  //check for individual factors

  var strTemp = "";

  if (intFactor != 0) {
    strTemp = "Plus or Add : " + intFactor + " to " + strProperty  + "\n";
  }

  return strTemp;

} //function
