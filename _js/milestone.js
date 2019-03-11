
function milestoneCreate() {
  //creates milestones for the player to achieve

  var intDistance = 0;

  do {
    JSONgame[0].milestoneLuxury = Math.floor((Math.random()*JSONluxury.length)+1);
  } while (JSONgame[0].milestoneLuxury < (JSONluxury.length/2)/2); //TODO: difficulty offset?
  JSONconfig[0].BonusMilestoneLuxuryMoney = JSONgame[0].milestoneLuxury; //TODO
  JSONconfig[0].BonusMilestoneLuxuryHappiness = JSONgame[0].milestoneLuxury; //TODO

  for (d in JSONdestination) {
    intDistance += travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, JSONdestination[d].latitude, JSONdestination[d].longitude, JSONgame[0].measure);
  } //for
  JSONgame[0].milestoneDistance = intDistance; //total distance if travelled to all destinations
  JSONconfig[0].BonusMilestoneDistanceMoney = JSONgame[0].milestoneDistance; //TODO
  JSONconfig[0].BonusMilestoneDistanceHappiness = JSONgame[0].milestoneDistance; //TODO

  do {
    JSONgame[0].milestoneDestination = Math.floor((Math.random()*JSONdestination.length)+1);
  } while (JSONgame[0].milestoneDestination < (JSONdestination.length/2)/2); //TODO: difficulty offset?
  JSONconfig[0].BonusMilestoneDestinationMoney = JSONgame[0].milestoneDestination; //TODO
  JSONconfig[0].BonusMilestoneDestinationHappiness = JSONgame[0].milestoneDestination; //TODO

  do {
    JSONgame[0].milestoneCountryVisited = Math.floor((Math.random()*defRemoveDuplicatesArrayByPropertyName(JSONdestination, "country").length)+1);
  } while (JSONgame[0].milestoneCountryVisited < (defRemoveDuplicatesArrayByPropertyName(JSONdestination, "country").length/2)/2); //TODO: difficulty offset?
  JSONconfig[0].BonusMilestoneCountryVisitedMoney = JSONgame[0].milestoneCountryVisited; //TODO
  JSONconfig[0].BonusMilestoneCountryVisitedHappiness = JSONgame[0].milestoneCountryVisited; //TODO

} //function

function milestoneCheck() {
  //checks if player has achieved milestones

  var strTemp = "";
  var intTotal = "";

  if (JSONgame[0].milestoneLuxury != true) {
    if (JSONplayer[0].luxury.length >= JSONgame[0].milestoneLuxury) {
      JSONgame[0].milestoneLuxury = true;

      //MONEY
      intTotal = JSONplayer[0].money + JSONconfig[0].BonusMilestoneLuxuryMoney; //CALC
      JSONplayer[0].money = intTotal; //UPDATE
      //HAPPINESS
      intTotal = JSONplayer[0].happiness + JSONconfig[0].BonusMilestoneLuxuryHappiness; //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      strTemp = JSONconfig[0].txtMilestoneLuxury;
      strTemp += "<br><br>" + JSONgame[0].currency + defThousandsDelimiter(JSONconfig[0].BonusMilestoneLuxuryMoney);
      strTemp += "<br>" + defThousandsDelimiter(JSONconfig[0].BonusMilestoneLuxuryHappiness);
      guiDisplayMessage(strTemp);
    } //if
  } //if

  if (JSONgame[0].milestoneDistance != true) {
    if (JSONplayer[0].distanceTravelled >= JSONgame[0].milestoneDistance) {
      JSONgame[0].milestoneDistance = true;

      //MONEY
      intTotal = JSONplayer[0].money + JSONconfig[0].BonusMilestoneDistanceMoney; //CALC
      JSONplayer[0].money = intTotal; //UPDATE
      //HAPPINESS
      intTotal = JSONplayer[0].happiness + JSONconfig[0].BonusMilestoneDistanceHappiness; //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      strTemp = JSONconfig[0].txtMilestoneDistance;
      strTemp += "<br><br>" + JSONgame[0].currency + defThousandsDelimiter(JSONconfig[0].BonusMilestoneDistanceMoney);
      strTemp += "<br>" + defThousandsDelimiter(JSONconfig[0].BonusMilestoneDistanceHappiness);
      guiDisplayMessage(strTemp);
    } //if
  } //if

  if (JSONgame[0].milestoneDestination != true) {
    if (defRemoveDuplicatesArray(JSONplayer[0].destination).length >= JSONgame[0].milestoneDestination) {
      JSONgame[0].milestoneDestination = true;

      //MONEY
      intTotal = JSONplayer[0].money + JSONconfig[0].BonusMilestoneDestinationMoney; //CALC
      JSONplayer[0].money = intTotal; //UPDATE
      //HAPPINESS
      intTotal = JSONplayer[0].happiness + JSONconfig[0].BonusMilestoneDestinationHappiness; //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      strTemp = JSONconfig[0].txtMilestoneDestination;
      strTemp += "<br><br>" + JSONgame[0].currency + defThousandsDelimiter(JSONconfig[0].BonusMilestoneDestinationMoney);
      strTemp += "<br>" + defThousandsDelimiter(JSONconfig[0].BonusMilestoneDestinationHappiness);
      guiDisplayMessage(strTemp);
    } //if
  } //if

  if (JSONgame[0].milestoneCountryVisited != true) {
    if (defRemoveDuplicatesArray(defGetCountriesVisited()).length >= JSONgame[0].milestoneCountryVisited) {
      JSONgame[0].milestoneCountryVisited = true; //achieved so flag

      //MONEY
      intTotal = JSONplayer[0].money + JSONconfig[0].BonusMilestoneCountryVisitedMoney; //CALC
      JSONplayer[0].money = intTotal; //UPDATE
      //HAPPINESS
      intTotal = JSONplayer[0].happiness + JSONconfig[0].BonusMilestoneCountryVisitedHappiness; //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      strTemp = JSONconfig[0].txtMilestoneCountryVisited;
      strTemp += "<br><br>" + JSONgame[0].currency + defThousandsDelimiter(JSONconfig[0].BonusMilestoneCountryVisitedMoney);
      strTemp += "<br>" + defThousandsDelimiter(JSONconfig[0].BonusMilestoneCountryVisitedHappiness);
      guiDisplayMessage(strTemp);
    } //if
  } //if




} //function
