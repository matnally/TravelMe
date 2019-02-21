
function resShowResult() {

// //GET COMPLETED COUNTRIES
// var arrCountriesCompleted = [];
// for (a in JSONdestination) {
//   if (travDestinationsInCountryVisited(a).length === travDestinationsInCountry(a).length) {
//     arrCountriesCompleted.push(JSONdestination[a].country);
//   } //if
// } //for
// arrCountriesCompleted = defRemoveDuplicatesArray(arrCountriesCompleted);
// for (c in arrCountriesCompleted) {
//   console.log("CountrieCompleted: " + arrCountriesCompleted[c]);
// } //for
// console.log("arrCountriesCompleted.length: " + arrCountriesCompleted.length);
// var arrTemp = [];
// arrTemp = defRemoveDuplicatesArray(JSONplayer[0].destination);
// console.log("Unique Destination visited: " + arrTemp.length);
// console.log("Destination completed: " + defCalcPercentage(arrTemp.length, JSONdestination.length).toFixed(0) + "%");
// arrTemp = defRemoveDuplicatesArrayByProperty(JSONdestination, "country");
// console.log("arrCountriesTotal.length: " + arrTemp.length);
// console.log("Destination Countries completed: " + defCalcPercentage(arrCountriesCompleted.length, arrTemp.length).toFixed(0) + "%");
// arrTemp = defFindMostFrequent(JSONplayer[0].destination);
// for (i in arrTemp) {
//   console.log("Most visited: " + JSONdestination[arrTemp[i]].name);
// } //for

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
intCountries = defRemoveDuplicatesArrayByProperty(JSONdestination, "country");
defUpdateElement("spnCountryVisitedTotal", intCountriesCompleted);
defUpdateElement("spnCountryTotal", intCountries.length);
defUpdateElement("spnCountryVisitedPercentage", defCalcPercentage(intCountriesCompleted, intCountries.length).toFixed(0) + "%");


defUpdateElement("spnCountryVisitedMost", "???");



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
defUpdateElement("spnLuxuryTotalHappiness", JSONgame[0].currency + defThousandsDelimiter(intLuxuryTotalHappiness));

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
    strWorkTravelPreference = "Dunno";
} //switch
defUpdateElement("spnPlayerLifeBalance", strWorkTravelPreference);




guiSectionShow("#secGameEnd");

} //function
