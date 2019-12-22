
function gameInit() {

  //create options for choosing game defaults
  defUpdateElement("spnSelCurrency", guiCreateHTMLComboBoxSettings(JSONconfig[0].currency, "selCurrency"));
  defUpdateElement("spnSelMeasure", guiCreateHTMLComboBoxSettings(JSONconfig[0].measure, "selMeasure"));
  defUpdateElement("spnSelDays", guiCreateHTMLComboBoxSettings(JSONconfig[0].days, "selDays"));
  defUpdateElement("spnSelHomeLocation", guiCreateHTMLComboBoxSettings(JSONconfig[0].homeLocation, "selHomeLocation"));

  defUpdateElement("spnSelMaps", guiCreateHTMLComboBoxSettings(JSONconfig[0].maps, "selMaps"));
  document.getElementById("selMaps").addEventListener("change",function(event){
    mapChoose(parseInt(this.value));
  }, { passive: true }); //addEventListener
  mapChoose(parseInt(document.getElementById("selMaps").value));

  defUpdateElement("spnSelDifficulty", guiCreateHTMLComboBoxSettings(JSONconfig[0].difficulty, "selDifficulty"));
  $("#selDifficulty [value='1']").attr("selected","selected"); //default to normal option for difficulty

  defUpdateElement("spnLuxury", guiCreateHTMLComboBox(JSONluxury, "selLuxury"));
  $("#selLuxury").html($('#selLuxury option').sort(function(x, y) { //sort dropdown
    return $(x).text() < $(y).text() ? -1 : 1; //for descending switch "<" for ">"
  })); //sort
  $('#selLuxury').prepend($("<option value='DEFAULT'>" + JSONconfig[0].txtLuxurySelectPrompt + "</option>")); //do after sort dropdown
  document.getElementById("selLuxury").addEventListener("change",function(event){
    guiUpdateHTMLLuxury(parseInt(this.value));
  }, { passive: true }); //addEventListener

  guiAddCelebrate(); //adds celebrate functionality to all buttons

  $("#btnStartGame").focus();
  guiSectionShow("#secSettings");

} //function

function gameStart() {

  var strJSONtoUse = JSONconfig[0].mapsJSON[document.getElementById("selMaps").value][document.getElementById("selDestinations").value][1];
  JSONdestination = window[strJSONtoUse];

  //create dynamic stats
  luxCreateStats();
  eventCreateStats();
  destCreateStats();

  gamApplyDefaults();
  milestoneCreate();

  gamSetGameText();
  guiUpdateAndReset();

  guiSectionShow("#secGame");

  mapCreate("divDatamapGame"); //will only render if at the end

  chartStatsUpdate(); //populates first value for chart
} //function

function gameEnd(strReason) {

  var strFail = "";

  switch (strReason) { //get appropiate message
    case "money":
      strFail = JSONconfig[0].gameEndReasonMoney;
    break;
    case "happiness":
      strFail = JSONconfig[0].gameEndReasonHappiness;
    break;
    case "days":
      strFail = JSONconfig[0].gameEndReasonDays;
    break;
    case "action":
      strFail = JSONconfig[0].gameEndReasonAction;
    break;
    default:
      guiDisplayMessage("gameEnd-ERROR: Forced Game End?");
  } //switch

  //TODO: something more substancial
  var strTemp = (JSONconfig[0].gameEnd
    + "\n\n" + strFail
  );
  guiDisplayMessage(strTemp);

  resShowResult(); //show end game stats

} //function

function gameTurnEnd(strAction, intDays) {
  //turn has happened (bought luxury, worked, travelled)

  switch (strAction) {
    case "work":
      jobPromotionCheck();
      eventCheck(strAction);
      if (JSONplayer[0].luxury.length > 0)
        luxBrokenCheck();
    break;
    case "travel":
      eventCheck(strAction);
      if (JSONplayer[0].luxury.length > 0)
        luxBrokenCheck();
    break;
    case "luxury":
      //do nothing
    break;
    default:
      guiDisplayMessage("gameTurnEnd-ERROR");
  } //switch

  //do common functions for all

  chartStatsUpdate();
  milestoneCheck();
  guiUpdateAndReset();
  gamCheckEndGame();

} //function

function gamCheckEndGame() {
  //check for any failing factors
  var strTemp = "";
  switch (true) { //if fail, send gameEnd appropiate factor
    case (JSONplayer[0].money <= 0):
      strTemp = "money";
    break;
    case (JSONplayer[0].happiness <= 0):
      strTemp = "happiness";
    break;
    case (JSONgame[0].day == JSONgame[0].days):
      strTemp = "days"; //reached max days
    break;
    case ((JSONplayer[0].happiness + JSONgame[0].workHappiness <= 0) && (JSONplayer[0].money - defGetCheapest(JSONdestination) <= 0) && (JSONplayer[0].money - defGetCheapest(JSONluxury) <= 0)):
      strTemp = "action"; //CANT GENERATE HAPPINESS & MONEY (i.e. can't perform an action)
    break;
    default:
      // guiDisplayMessage("gamCheckEndGame-: Forced Game End?");
      // strTemp = "action"; //default fail
  } //switch
  if (!strTemp == "")
    gameEnd(strTemp);
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gamApplyDefaults() {
  //apply defaults and player choices

  var tmpElem;
  var strSelMaps = 0;
  var strSelHomeLocation = 0;

  tmpElem = document.getElementById("selCurrency");
  JSONgame[0].currency = JSONconfig[0].currency[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selMeasure");
  JSONgame[0].measure = JSONconfig[0].measure[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selDays");
  JSONgame[0].days = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

  //sourced from chosen MAP and HOME
  strSelMaps = document.getElementById("selMaps").value;
  strSelHomeLocation = document.getElementById("selHomeLocation").value;
  JSONgame[0].homeLatitude = JSONconfig[0].mapsHomeLocationLatLong[strSelMaps][strSelHomeLocation][0];
  JSONgame[0].homeLongitude = JSONconfig[0].mapsHomeLocationLatLong[strSelMaps][strSelHomeLocation][1];

  JSONgame[0].day = JSONconfig[0].startingDay; //what day to begin with

  //set the max value of the work days input
  document.getElementById("inpWorkDays").max = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

  JSONgame[0].map = $("#selMaps option:selected").text().toLowerCase(); //map to use

  tmpElem = document.getElementById("selDifficulty");
  gameSetDifficultyDefaults(tmpElem.selectedIndex);

} //function

function gameSetDifficultyDefaults(intDifficulty) {

  //IMPORTANT
  JSONgame[0].difficultyOffset = parseInt(JSONconfig[0].difficultyOffset[intDifficulty]); // do first
  JSONgame[0].workHappiness = parseInt(JSONconfig[0].workHappiness / JSONgame[0].difficultyOffset);

  //PLAYER
  JSONplayer[0].money = parseInt(JSONconfig[0].money / JSONgame[0].difficultyOffset);
  JSONplayer[0].happiness = parseInt(JSONconfig[0].happiness * JSONgame[0].difficultyOffset);

  //OFFSETS
  ////////////////////////////////////////////////
  //DESTINATION
  JSONconfig[0].JSONdestinationCostOffset = parseInt(JSONconfig[0].JSONdestinationCostOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONdestinationHappinessOffset = parseInt(JSONconfig[0].JSONdestinationHappinessOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONdestinationDaysOffset = parseInt(JSONconfig[0].JSONdestinationDaysOffset / JSONgame[0].difficultyOffset);
  //LUXURY
  JSONconfig[0].JSONluxuryBaseValueMin = parseInt(JSONconfig[0].JSONluxuryBaseValueMin / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONluxuryBaseValueMax = parseInt(JSONconfig[0].JSONluxuryBaseValueMax / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONluxuryCostOffset = parseInt(JSONconfig[0].JSONluxuryCostOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONluxuryCostRepairOffset = parseInt(JSONconfig[0].JSONluxuryCostRepairOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONluxuryHappinessOffset = parseInt(JSONconfig[0].JSONluxuryHappinessOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONluxurySellOffset = parseInt(JSONconfig[0].JSONluxurySellOffset / JSONgame[0].difficultyOffset);
  //EVENT
  JSONconfig[0].JSONeventBaseValueMin = parseInt(JSONconfig[0].JSONeventBaseValueMin / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventBaseValueMax = parseInt(JSONconfig[0].JSONeventBaseValueMax / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventCostOffset = parseInt(JSONconfig[0].JSONeventCostOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventHappinessOffset = parseInt(JSONconfig[0].JSONeventHappinessOffset / JSONgame[0].difficultyOffset);

} //function

function gamSetGameText() {
  //text that will not change throughout game
  defUpdateElement("spnDayPrefix", JSONconfig[0].gameDayPrefix);
  defUpdateElement("spnDaysPrefix", JSONconfig[0].gameDaysPrefix);

  defUpdateElement("spnTotalDestinations", JSONdestination.length);
  defUpdateElement("spnTotalCountries", defRemoveDuplicatesArrayByPropertyName(JSONdestination, "country").length);

} //function
