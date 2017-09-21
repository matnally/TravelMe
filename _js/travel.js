
function travel(intStartFlag) {

  if (intStartFlag == 0) {
    //START init

//Maybe show SETTINGS box?

  } else {

    var index = JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].locationDestination;

    JSONme["me"][0].money = parseInt(JSONme["me"][0].money) - parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units), JSONconfig["config"][0].units));
    JSONme["me"][0].daysLeft = parseInt(JSONme["me"][0].daysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDistance = parseInt(JSONme["me"][0].travelledDistance) + parseInt(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1], JSONconfig["config"][0].units));
    JSONme["me"][0].travelledDays = parseInt(JSONme["me"][0].travelledDays) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0], JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1], JSONdestinations["destinations"][index].latLng[0], JSONdestinations["destinations"][index].latLng[1]), JSONconfig["config"][0].units));

    var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
        mapObject.clearSelectedMarkers();
        mapObject.markers[JSONme["me"][0].locationCurrent].element.setStyle("fill", "#CCC"); //clear previous location
        JSONme["me"][0].locationPrevious = JSONme["me"][0].locationCurrent;
        JSONme["me"][0].locationCurrent = index; //update current location
        mapObject.markers[JSONme["me"][0].locationCurrent].element.setStyle("fill", "green"); //display current location

  }

  resetDestination();
  displayCurrent(); //displays the user's details

}
