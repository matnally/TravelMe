
function travel(intStartFlag) {

  if (intStartFlag == 0) {
    //START init

    //defaults
    JSONlocation["location"][0].locationCurrent = JSONconfig["config"][0].home; //make the destination the config default

    calcWork();
    updateHistory("Started in " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name + "");

  } else {

    var index = JSONlocation["location"][0].locationDestination;
    JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
    JSONme["me"][0].daysLeft = parseInt(JSONme["me"][0].daysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDistance = parseInt(JSONme["me"][0].travelledDistance) + parseInt(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
    JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));

/*    var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
        mapObject.clearSelectedMarkers();
        mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "#CCC"); //clear previous location
        JSONme["me"][0].locationPrevious = JSONlocation["location"][0].locationCurrent;
        JSONlocation["location"][0].locationCurrent = index; //update current location
        mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "green"); //display current location
*/

updateElement("elemTurnDetails", displayTravelled(index));


    updateHistory("Travelled to " + JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].name + "");

    JSONlocation["location"][0].locationPrevious = JSONlocation["location"][0].locationCurrent;
    JSONlocation["location"][0].locationCurrent = index; //update current location // IMPORTANT! THIS NOW STATES WHERE YOU ARE!
    callEvent(JSONlocation["location"][0].locationCurrent);

//    resetDestination(); //DONT NEED AS NOT SHOWING IT???
updateMap();
elemHideShow("destinationTable", "Hide"); //click on a destination so show the details

//***************************** accordion panel go to
$('#accordion').accordion({active: 4});

  } //if

  displayCurrent(); //displays UPDATE? the user's details
  resetDestination();

}


function updateMap() {

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      mapObject.clearSelectedMarkers();
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("fill", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("stroke", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("r", 5);
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "blue");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("stroke", "#000");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("r", 10);

}


function displayTravelled(index) {
  //build up event text

  var strTemp = "";

      strTemp += "You are travelling from " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name + " to " + JSONdestinations["destinations"][JSONlocation["location"][0].locationDestination].name;
      strTemp += "\n";
      strTemp += "It'll cost " + JSONconfig["config"][0].currency + parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "It'll take " + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "You'll travelled " + parseInt(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units));
      strTemp += "\n";
      strTemp += "Your happiness will go up " + parseInt(calHappiness(JSONlocation["location"][0].locationDestinationTravelDays, JSONlocation["location"][0].locationDestinationTravelCosts, JSONlocation["location"][0].locationDestinationTravelDistance, JSONconfig["config"][0].units));


  return strTemp;

} //function


function updateHistory(strTemp) {

  var elem = document.getElementById("elemHistory");
      elem.value += strTemp + "\n";

}



function work() {

  JSONme["me"][0].daysLeft = parseFloat(JSONme["me"][0].daysLeft) + parseFloat(JSONwork["work"][0].holidays);
  JSONme["me"][0].daysWorked = parseInt(JSONme["me"][0].daysWorked) + parseInt(JSONwork["work"][0].days);
  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) + parseInt(JSONwork["work"][0].money);
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(JSONwork["work"][0].happiness);

  alert(displayWorked()); //B4 resetWork!
  updateHistory("Worked " + JSONwork["work"][0].days + " days");
  callEvent(JSONlocation["location"][0].locationCurrent);
  displayCurrent(); //displays the user's details
  resetWork();

  //***************************** accordion panel go to
  $('#accordion').accordion({active: 0});

}


function displayWorked() {
  //build up event text

  var strTemp = "";

      strTemp += "You gained " + JSONwork["work"][0].holidays + " day's hoilday";
      strTemp += "You worked " + JSONwork["work"][0].days + " days";
      strTemp += "You earned " + JSONconfig["config"][0].currency + JSONwork["work"][0].money;
      strTemp += "Your happiness was decreased by " + JSONwork["work"][0].happiness;

  return strTemp;

} //function



function chooseSomethingOut() {
  //get selected marker
  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");

  //check if something is actually selected
  if (mapObject.getSelectedMarkers() != "")
    displayDestination(parseInt(mapObject.getSelectedMarkers())); //display destination details

}
function chooseSomething(index) {

  displayDestination(index); //display destination details

  if (JSONlocation["location"][0].locationCurrent == index) {
    //clicked on current destination

    document.getElementById("butTravel").disabled = true;

//    elemHideShow("destinationTable", "Hide"); //click on a destination so show the details

//TODO: TREKS???
/*
get treks for region
if trek
*/

  } else {


  } //if

} //function




function resetWork() {

  document.getElementById("workChoice").selectedIndex = 0;

}
