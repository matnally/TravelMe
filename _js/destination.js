
function destCreateStats() {
  //create dynamic stats for destinations

  var intDistance = 0;
  var intDays = 0;
  var intHappiness = 0;
  var intCost = 0;

  for (d in JSONdestination) {

    intDistance = travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, JSONdestination[d].latitude, JSONdestination[d].longitude, JSONgame[0].measure);
    intDays = (intDistance / JSONconfig[0].JSONdestinationDaysOffset).toFixed(0);
    intHappiness = (intDistance / JSONconfig[0].JSONdestinationHappinessOffset).toFixed(0);
    intCost = (intDistance / JSONconfig[0].JSONdestinationCostOffset).toFixed(0);

    JSONdestination[d].cost = parseInt(intCost);
    JSONdestination[d].happiness = parseInt(intHappiness);
    JSONdestination[d].days = parseInt(intDays);

    //TODO: standardise Alpha2 and Alpha3
    if (JSONdestination[d].country.length == 2) {
      JSONdestination[d].description = mapGetCountryName(JSONcountryNames, JSONdestination[d].country);
    } else {
      JSONdestination[d].description = mapGetCountryName(JSONcountryNames, mapGetCountryCodeAlpha2Code(JSONcountryCodes, JSONdestination[d].country));
    } //if

  } //for

} //function
