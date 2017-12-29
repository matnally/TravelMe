
function travel(intStartFlag) {

  if (intStartFlag == 0) {
    //START init

    //defaults
    JSONlocation["location"][0].locationCurrent = JSONconfig["config"][0].home; //make the destination the config default

    calcWork();

  } else {

    var index = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestination;

    JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
    JSONme["me"][0].daysLeft = parseInt(JSONme["me"][0].daysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDistance = parseInt(JSONme["me"][0].travelledDistance) + parseInt(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
    JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) + parseInt(calHappiness(JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDays,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelCosts,JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].locationDestinationTravelDistance, JSONconfig["config"][0].units));

    var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
        mapObject.clearSelectedMarkers();
        mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "#CCC"); //clear previous location
        JSONme["me"][0].locationPrevious = JSONlocation["location"][0].locationCurrent;
        JSONlocation["location"][0].locationCurrent = index; //update current location
        mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "green"); //display current location

  }

  resetDestination();
  displayCurrent(); //displays the user's details

}





function work() {


  JSONme["me"][0].daysLeft = parseInt(JSONme["me"][0].daysLeft) + JSONwork["work"][0].holidays;
  JSONme["me"][0].daysWorked = parseInt(JSONme["me"][0].daysWorked) + JSONwork["work"][0].holidays;

  JSONme["me"][0].money = parseInt(JSONme["me"][0].money) + JSONwork["work"][0].money;
  JSONme["me"][0].happiness = parseInt(JSONme["me"][0].happiness) - JSONwork["work"][0].happiness


  displayCurrent(); //displays the user's details

}
