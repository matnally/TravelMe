
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

//TRAVEL
var intTravelTotalPercentage = 0;
intTravelTotalPercentage = defCalcPercentage(JSONplayer[0].daysTravelled, JSONgame[0].days).toFixed(0);
defUpdateElement("spnTravelTotalPercentage", intTravelTotalPercentage + "%");
defUpdateElement("spnTravelTotalDistance", defThousandsDelimiter(JSONplayer[0].distanceTravelled) + " " + JSONgame[0].measure);

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



guiSectionShow("#secGameEnd");

} //function
