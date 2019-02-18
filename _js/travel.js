
function travel(intDestination) {

  var intTotal = 0;

  if (plaCanAfford(JSONplayer[0].money, JSONdestination[intDestination].cost)) {

    //MONEY
    intTotal = JSONplayer[0].money - JSONdestination[intDestination].cost; //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = JSONplayer[0].happiness + JSONdestination[intDestination].happiness; //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE
    //DISTANCE TRAVELLED
    intTotal = JSONplayer[0].distanceTravelled + travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, JSONdestination[intDestination].latitude, JSONdestination[intDestination].longitude, JSONgame[0].measure); //CALC
    JSONplayer[0].distanceTravelled = JSONplayer[0].distanceTravelled + intTotal; //UPDATE
    //DAY / TURN
    intTotal = JSONgame[0].day + JSONdestination[intDestination].days; //CALC
    JSONgame[0].day = intTotal; //UPDATE


    //TODO: if having FAVOURITE destination in RESULT then can't just count no of places
      //get country
      //get all NOs of destinations in country
      //check in if player'switch

    // if (!travAlreadyVisited(intDestination)) //check if player has already visited destination
    //   JSONplayer[0].destination.push(intDestination); //add destination to player

    if (travDestinationsInCountryPlayer(intDestination) == travDestinationsInCountry(intDestination).length) {
      //player has visited all the destinations in the country
      mapUpdateCountryVisited(intDestination); //update colour of country
    } //if


    var strTemp = (JSONconfig[0].txtDialogTravelTitle
      + "\n\n" + JSONconfig[0].txtDialogTravelDestination + " " + JSONdestination[intDestination].name
      + "\n" + JSONdestination[intDestination].description
      + "\n\n" + JSONdestination[intDestination].days + " " + JSONconfig[0].txtDialogTravelDays
      + "\n" + JSONconfig[0].txtDialogTravelCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONdestination[intDestination].cost)
      + "\n" + JSONconfig[0].txtDialogTravelDistance + " " + defThousandsDelimiter(travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, JSONdestination[intDestination].latitude, JSONdestination[intDestination].longitude, JSONgame[0].measure)) + " " + JSONgame[0].measure
    );
    alert( $('<span/>').html(strTemp).text());

    gameTurnEnd();

  } else {

    strTemp = (JSONconfig[0].txtDialogTravelNotAfford + " " + JSONdestination[intDestination].name);
    alert( $('<span/>').html(strTemp).text());

  } //if

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function travDestinationsInCountry(intDestination) {
  //count number of destinations in a country
  var arrTemp = [];
  for (d in JSONdestination) {
    if (JSONdestination[d].country == JSONdestination[intDestination].country) {
      alert(d);
      intTemp.push[JSONdestination[d]];
    } //if
  } //for
  return arrTemp;
} //function

function travDestinationsInCountryPlayer(intDestination) {
  //count number of destinations in a country player has visited
  var intTemp = 0;
  for (d in JSONplayer[0].destination) {
    if (JSONdestination[JSONplayer[0].destination[d]].country == JSONdestination[intDestination].country) {
      intTemp++;
    } //if
  } //for
  return intTemp;
} //function

function travAlreadyVisited(intDestination) {
  //check if player has already visited destination
  var boolVisited = false;
  for (d in JSONplayer[0].destination) {
    if (JSONplayer[0].destination[d] == intDestination)
      boolVisited = true;
  } //for
  return boolVisited;
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
  if (JSONgame[0].measure == "Miles") {
    intResult = intMiles;
  } else {
    intResult = intKilometres;
  } //if
  return parseInt(intResult);
} //function

function travCalcDistanceTotal() {
  //total distance can travel to all destinations (only once)
  var intTotalDistance = 0;
  for (d in JSONdestination) {
    intTotalDistance += travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, JSONdestination[d].latitude, JSONdestination[d].longitude, JSONgame[0].measure)
  } //for
  return intTotalDistance;
} //function
