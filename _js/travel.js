
function travel(intDestination) {

  var intTotal = 0;

  if (plaCanAfford(JSONdestination[intDestination].cost)) {

    //MONEY
    intTotal = JSONplayer[0].money - JSONdestination[intDestination].cost; //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = JSONplayer[0].happiness + JSONdestination[intDestination].happiness; //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE
    //DISTANCE TRAVELLED
    intTotal = JSONplayer[0].distanceTravelled + travCalcDistance(JSONconfig[0].homeLatitude, JSONconfig[0].homeLongitude, JSONdestination[intDestination].latitude, JSONdestination[intDestination].longitude, JSONgame[0].measure); //CALC
    JSONplayer[0].distanceTravelled = JSONplayer[0].distanceTravelled + intTotal; //UPDATE
    //DAY / TURN
    intTotal = JSONgame[0].day + JSONdestination[intDestination].days; //CALC
    JSONgame[0].day = intTotal; //UPDATE

    alert(JSONconfig[0].txtDialogTravelTitle + "<br><br>" + JSONconfig[0].txtDialogTravelDestination
      + " " + JSONdestination[intDestination].name
      + "<br>" + JSONdestination[intDestination].description
      + "<br>" + JSONconfig[0].txtDialogTravelCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONdestination[intDestination].cost)
      + "<br>" + JSONconfig[0].txtDialogTravelDistance + " " + travCalcDistance(JSONconfig[0].homeLatitude, JSONconfig[0].homeLongitude, JSONdestination[intDestination].latitude, JSONdestination[intDestination].longitude, JSONgame[0].measure) + " " + JSONgame[0].measure
    );

    mapUpdateCountryVisited(intDestination);

    gameTurnEnd();

  } else {

    alert(JSONconfig[0].txtDialogTravelNotAfford + " " + JSONdestination[intDestination].name);

  } //if

} //function







function travCalcDistance(currentLat, currentLong, destinationLat, destinationLong, strUnit) {
  //Calculate distance from lat and long

  var intResult = 0 //Value to return

  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((destinationLat - currentLat) * p)/2 + c(currentLat * p) * c(destinationLat * p) * (1 - c((destinationLong - currentLong) * p))/2;

  var intKilometres = Math.round(12742 * Math.asin(Math.sqrt(a))).toFixed(0); // 2 * R; R = 6371 km
  var intMiles = Math.round(intKilometres * 0.621371).toFixed(0); // miles

  //determine what measure to display
  if (JSONgame[0].measure == "Imperial (Miles)") {
    intResult = intMiles;
  } else {
    intResult = intKilometres;
  } //if

  return parseInt(intResult);

} //function
