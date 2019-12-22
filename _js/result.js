//MAP
function mapCreateResult() {
  mapCreate("divDatamapResult"); //will only render if at the end???
} //function

function mapCreateResultArcsReset() {
  map.arc([]);
} //function
function mapCreateResultArcs() {

  //ONLY UPDATES HERE??!?
  map.svg.selectAll('.datamaps-bubble').attr('r',1); //overrides of normal map

  var arrMapArcs = [];

  for (d in JSONplayer[0].destination) {
    arrMapArcs.push({
      origin: {
        latitude: JSONgame[0].homeLatitude
        ,longitude: JSONgame[0].homeLongitude
      }
      ,destination: {
        latitude: JSONdestination[JSONplayer[0].destination[d]].latitude
        ,longitude: JSONdestination[JSONplayer[0].destination[d]].longitude
      }
    }); //arrMapArcs.push
  } //for

  map.arc(arrMapArcs, {
    strokeColor:JSONconfig[0].mapArcColour
    ,strokeWidth: 4
    ,arcSharpness: 0.5
    ,animationSpeed: 9000
  }); //map.arc

  map.svg.selectAll('.datamaps-bubble').on('click', function(e, data) {
    guiDisplayMessage("nothing"); //override so don't travel
  }); //map.svg.selectAll

} //function












function resShowResult() {
  //TODO: clean up

  //WORK
  defUpdateElement("spnWorkTotalDays", defThousandsDelimiter(JSONplayer[0].daysWorked) + " ");
  var intWorkTotalPercentage = 0;
  intWorkTotalPercentage = defCalcPercentage(JSONplayer[0].daysWorked, JSONgame[0].days).toFixed(0);
  defUpdateElement("spnWorkTotalPercentage", intWorkTotalPercentage + "%");
  defUpdateElement("spnWorkPromoted", JSONplayer[0].job);
  var intWorkPromotedPercentage = 0;
  intWorkPromotedPercentage = defCalcPercentage(JSONplayer[0].job, JSONjob[0].length).toFixed(0);
  defUpdateElement("spnWorkPromotedPercentage", intWorkTotalPercentage + "%");
  defUpdateElement("spnWorkTotalHappiness", defThousandsDelimiter(JSONplayer[0].daysWorked * JSONgame[0].workHappiness));

  //TRAVEL
  var intTravelTotalPercentage = 0;
  intTravelTotalPercentage = defCalcPercentage(JSONplayer[0].daysTravelled, JSONgame[0].days).toFixed(0);
  defUpdateElement("spnTravelTotalPercentage", intTravelTotalPercentage + "%");
  defUpdateElement("spnTravelTotalDistance", defThousandsDelimiter(JSONplayer[0].distanceTravelled) + " " + JSONgame[0].measure);
  var intTravelTotalHappiness = 0;
  for (d in JSONplayer[0].destination) {
    intTravelTotalHappiness = (intTravelTotalHappiness + JSONdestination[JSONplayer[0].destination[d]].happiness);
  } //for
  defUpdateElement("spnTravelTotalHappiness", defThousandsDelimiter(intTravelTotalHappiness));
  var intTravelTotalSpent = 0;
  for (d in JSONplayer[0].destination) {
    intTravelTotalSpent = (intTravelTotalSpent + JSONdestination[JSONplayer[0].destination[d]].cost);
  } //for
  defUpdateElement("spnTravelTotalSpent", JSONgame[0].currency + defThousandsDelimiter(intTravelTotalSpent));

  //DESTINATIONS
  var arrDestinationVisitedUnique = [];
  arrDestinationVisitedUnique = defRemoveDuplicatesArray(JSONplayer[0].destination);
  var arrCountriesCompleted = [];
  for (a in JSONdestination) {
    if (travDestinationsInCountryVisited(a).length === travDestinationsInCountry(a).length) {
      arrCountriesCompleted.push(JSONdestination[a].country);
    } //if
  } //for
  arrCountriesCompleted = defRemoveDuplicatesArray(arrCountriesCompleted);
  var intDestinationVisitedPercentageUnique = 0;
  var arrDestinationVisitedTotalUnique = [];
  arrDestinationVisitedTotalUnique = defRemoveDuplicatesArray(JSONplayer[0].destination);
  intDestinationVisitedPercentageUnique = defCalcPercentage(arrCountriesCompleted.length, arrDestinationVisitedTotalUnique.length).toFixed(0);
  var intDestinationVisitedPercentage = 0;
  intDestinationVisitedPercentage = defCalcPercentage(arrDestinationVisitedUnique.length, JSONdestination.length).toFixed(0);
  defUpdateElement("spnDestinationVisitedTotal", JSONplayer[0].destination.length);
  defUpdateElement("spnDestinationVisitedTotalUnique", arrDestinationVisitedTotalUnique.length);
  defUpdateElement("spnDestinationVisitedPercentage", intDestinationVisitedPercentage + "%");
  var arrDestinationVisitedMost = [];
  arrDestinationVisitedMost = defFindMostFrequent(JSONplayer[0].destination);
  var strDestinationVisitedMost = "";
  for (i in arrDestinationVisitedMost) {
    if (i!=0)
      strDestinationVisitedMost += ", "
    strDestinationVisitedMost += JSONdestination[arrDestinationVisitedMost[i]].name;
  } //for
  defUpdateElement("spnDestinationVisitedMost", strDestinationVisitedMost);

  //COUNTRIES
  var arrCountriesCompleted = [];
  arrCountriesCompleted = travGetCountryComplete(JSONdestination);
  arrCountriesCompleted = defRemoveDuplicatesArray(arrCountriesCompleted);
  var intCountriesCompleted = 0;
  for (c in arrCountriesCompleted) {
    intCountriesCompleted++;
  } //for
  var intCountries = 0;
  intCountries = defRemoveDuplicatesArrayByPropertyName(JSONdestination, "country");
  defUpdateElement("spnCountryVisitedTotal", intCountriesCompleted);
  defUpdateElement("spnCountryTotal", intCountries.length);
  defUpdateElement("spnCountryVisitedPercentage", defCalcPercentage(intCountriesCompleted, intCountries.length).toFixed(0) + "%");
  var arrCountryVisitedMost = [];
  for (d in JSONplayer[0].destination) {
    arrCountryVisitedMost.push(JSONdestination[JSONplayer[0].destination[d]].country);
  } //for
  arrCountryVisitedMost = defFindMostFrequent(arrCountryVisitedMost);
  var strCountryVisitedMost = "";
  for (i in arrCountryVisitedMost) {
    if (i!=0)
      strCountryVisitedMost += ", "
    strCountryVisitedMost += arrCountryVisitedMost[i];
  } //for
  defUpdateElement("spnCountryVisitedMost", strCountryVisitedMost); //TODO: get country names

  //LUXURIES
  var intLuxuryTotalSpend = 0;
  for (l in JSONplayer[0].luxury) {
    intLuxuryTotalSpend = (intLuxuryTotalSpend + JSONluxury[JSONplayer[0].luxury[l]].cost);
  } //for
  defUpdateElement("spnLuxuryTotalSpend", JSONgame[0].currency + defThousandsDelimiter(intLuxuryTotalSpend));
  var intLuxuryTotalHappiness = 0;
  for (l in JSONplayer[0].luxury) {
    intLuxuryTotalHappiness = (intLuxuryTotalHappiness + JSONluxury[JSONplayer[0].luxury[l]].happiness);
  } //for
  defUpdateElement("spnLuxuryTotalHappiness", defThousandsDelimiter(intLuxuryTotalHappiness));

  //PLAYER
  var strWorkTravelPreference = "";
  switch (true) {
    case (JSONplayer[0].daysTravelled  > JSONplayer[0].daysWorked):
      strWorkTravelPreference = "Travelling";
    break;
    case (JSONplayer[0].daysWorked  > JSONplayer[0].daysTravelled):
      strWorkTravelPreference = "Working";
    break;
    case (JSONplayer[0].daysWorked  === JSONplayer[0].daysTravelled):
      strWorkTravelPreference = "Same!";
    break;
    default:
      guiDisplayMessage("strWorkTravelPreference-ERROR");
  } //switch
  defUpdateElement("spnPlayerLifeBalance", strWorkTravelPreference);
  defUpdateElement("spnPlayerTotalMoneySpent", JSONgame[0].currency + defThousandsDelimiter(intTravelTotalSpent + intLuxuryTotalSpend));
  defUpdateElement("spnPlayerTotalMoneyEarned", JSONgame[0].currency + defThousandsDelimiter(JSONplayer[0].moneyEarned));
  defUpdateElement("spnPlayerTotalHappiness", defThousandsDelimiter(intTravelTotalHappiness + intLuxuryTotalHappiness));

  //PLAYER ENDING
  defUpdateElement("spnPlayerEndingMoney", JSONgame[0].currency + defThousandsDelimiter(JSONplayer[0].money));
  defUpdateElement("spnPlayerEndingHappiness", defThousandsDelimiter(JSONplayer[0].happiness));
  defUpdateElement("spnPlayerEndingDaysWorked", defThousandsDelimiter(JSONplayer[0].daysWorked));
  defUpdateElement("spnPlayerEndingDaysTravelled", defThousandsDelimiter(JSONplayer[0].daysTravelled));
  defUpdateElement("spnPlayerEndingDistanceTravelled", defThousandsDelimiter(JSONplayer[0].distanceTravelled));
  defUpdateElement("spnPlayerEndingJob", JSONjob[JSONplayer[0].job].name);

  //EVENTS ?????

  //ENDGAME
  chartCreate(document.getElementById('selChart'));
  guiSectionShow("#secGameEnd");
  mapCreateResult(); //at the end to render

} //function
