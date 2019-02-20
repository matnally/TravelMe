
function gameInit() {

  //create options for choosing game defaults
  defUpdateElement("spnSelCurrency", guiCreateHTMLComboBoxSettings(JSONconfig[0].currency, "selCurrency"));
  defUpdateElement("spnSelMeasure", guiCreateHTMLComboBoxSettings(JSONconfig[0].measure, "selMeasure"));
  defUpdateElement("spnSelDays", guiCreateHTMLComboBoxSettings(JSONconfig[0].days, "selDays"));
  defUpdateElement("spnSelHomeLocation", guiCreateHTMLComboBoxSettings(JSONconfig[0].homeLocation, "selHomeLocation"));

  defUpdateElement("spnSelDestinations", guiCreateHTMLComboBoxSettings(JSONconfig[0].destinations, "selDestinations"));

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

  $("#btnStartGame").focus();

  guiSectionShow("#secSettings");

} //function

function gameStart() {

  var strJSONtoUse = JSONconfig[0].destinationsJSON[document.getElementById("selDestinations").value];
  JSONdestination = window[strJSONtoUse];

  //create dynamic stats
  luxCreateStats();
  eventCreateStats();
  destCreateStats();

  gamApplyDefaults();
  gamSetGameText();
  guiUpdateAndReset();

  guiSectionShow("#secGame");

  mapCreate(); //will only render if at the end

} //function

function gameEnd() {

  //TODO: something more substancial
  var strTemp = (JSONconfig[0].gameEnd
    + "\n"
  );
  alert( $('<span/>').html(strTemp).text());

  resShowResult(); //show end game stats

} //function

function gameTurnEnd() {

  jobPromotionCheck();
  eventCheck();

  if (JSONplayer[0].luxury.length > 0)
    luxBrokenCheck();

  guiUpdateAndReset();
  gamCheckEndGame();

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gamApplyDefaults() {
  //apply defaults and player choices

  var tmpElem;

  tmpElem = document.getElementById("selCurrency");
  JSONgame[0].currency = JSONconfig[0].currency[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selMeasure");
  JSONgame[0].measure = JSONconfig[0].measure[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selDays");
  JSONgame[0].days = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selHomeLocation");
  JSONgame[0].homeLatitude = JSONconfig[0].homeLocationLatLong[tmpElem[tmpElem.selectedIndex].value][0];
  JSONgame[0].homeLongitude = JSONconfig[0].homeLocationLatLong[tmpElem[tmpElem.selectedIndex].value][1];

  JSONgame[0].day = JSONconfig[0].startingDay; //what day to begin with

  //set the max value of the work days input
  document.getElementById("inpWorkDays").max = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selDifficulty");
  gameSetDifficultyDefaults(tmpElem.selectedIndex);

} //function

function gameSetDifficultyDefaults(intDifficulty) {

  //GAME
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
  //EVENT
  JSONconfig[0].JSONeventBaseValueMin = parseInt(JSONconfig[0].JSONeventBaseValueMin / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventBaseValueMax = parseInt(JSONconfig[0].JSONeventBaseValueMax / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventCostOffset = parseInt(JSONconfig[0].JSONeventCostOffset / JSONgame[0].difficultyOffset);
  JSONconfig[0].JSONeventHappinessOffset = parseInt(JSONconfig[0].JSONeventHappinessOffset / JSONgame[0].difficultyOffset);

// console.log(JSON.stringify(JSONconfig));

} //function

function gamCheckEndGame() {
  //check for any failing factors
  switch (true) {
    case (JSONplayer[0].money <= 0):
      gameEnd();
    break;
    case (JSONplayer[0].happiness <= 0):
      gameEnd();
    break;
    case (JSONgame[0].day == JSONgame[0].days):
      //reached max days
      gameEnd();
    break;
  } //switch
} //function

function gamSetGameText() {

  defUpdateElement("spnDayPrefix", JSONconfig[0].gameDayPrefix);
  defUpdateElement("spnDaysPrefix", JSONconfig[0].gameDaysPrefix);

} //function
