
function updateHistoryDisplay() {

  //display the histroy from the JSON file

  var strTemp = "";

  for (i=0;i<JSONhistory.length;i++) {

    switch(JSONhistory[i].actionType) {
      case "work":
        strTemp = "WORKED in " + JSONhistory[i].to;
      break;
      case "flight":
        strTemp = "FLEW from " + JSONhistory[i].from + " to " + JSONhistory[i].to;
      break;
      case "trek":
        strTemp = "TREK in " + JSONhistory[i].to;
      break;
      case "walkAbout":
        strTemp = "TRAVELLED around " + JSONhistory[i].to;
      break;
      case "start":
        strTemp = "STARTED in " + JSONhistory[i].to;
      break;
      default:
        strTemp = "ERROR updateHistoryDisplay: How did you get here?";
    } //switch

  } //for

  var elem = document.getElementById("elemHistory");
      elem.value += strTemp + "\n";

} //function



function updateHistoryJSON() {

  JSONhistory.push({
      "actionType"  : JSONaction[0].actionType
      ,"from"       : JSONdestinations[JSONlocation[0].locationPrevious].name
      ,"to"         : JSONdestinations[JSONlocation[0].locationCurrent].name
  }); //push

} //function
