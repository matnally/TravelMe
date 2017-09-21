
function travel(intStartFlag) {

  if (intStartFlag == 0) {
    //START init

//Maybe show SETTINGS box?

  } else {

    //update distance
    var intTotalDistance = JSONme["me"][0].travelledDistance;
    var intDistance = calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0]
                                            ,JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1]
                                            ,JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[0]
                                            ,JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[1]
                                            ,JSONconfig["config"][0].units);
        intTotalDistance = parseInt(intTotalDistance) + parseInt(intDistance);
        JSONme["me"][0].travelledDistance = intTotalDistance;

    //update travel days
    var intTimeTaken = JSONme["me"][0].travelledDays;
        intTimeTaken = parseInt(intTimeTaken) + parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[1],JSONconfig["config"][0].units), JSONconfig["config"][0].units));
        JSONme["me"][0].travelledDays = intTimeTaken;

    //update days left
    var intDaysLeft = JSONme["me"][0].daysLeft;
        intDaysLeft = parseInt(intDaysLeft) - parseInt(calcTimeTakenToTravel(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[1],JSONconfig["config"][0].units), JSONconfig["config"][0].units));
        JSONme["me"][0].daysLeft = intDaysLeft;

    //update cost
    var intCost = JSONme["me"][0].money;
        intCost = intCost - parseInt(calcDistanceCost(calcDistance(JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].latLng[1],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[0],JSONdestinations["destinations"][JSONme["me"][0].locationDestination].latLng[1],JSONconfig["config"][0].units), JSONconfig["config"][0].units));
        JSONme["me"][0].money = intCost;

    //update destination location to current location
    JSONme["me"][0].locationCurrent = JSONme["me"][0].locationDestination;

  }

  //displays the user's details
  displayCurrent(JSONme["me"][0]);

}
