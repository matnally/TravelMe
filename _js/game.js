
function gameInit() {

  //create options for choosing game defaults
  defUpdateElement("spnSelCurrency", guiCreateHTMLComboBoxSettings(JSONconfig[0].currency, "selCurrency"));
  defUpdateElement("spnSelMeasure", guiCreateHTMLComboBoxSettings(JSONconfig[0].measure, "selMeasure"));
  defUpdateElement("spnSelDays", guiCreateHTMLComboBoxSettings(JSONconfig[0].days, "selDays"));

  defUpdateElement("spnLuxury", guiCreateHTMLComboBox(JSONluxury, "selLuxury"));
  $('#selLuxury').find('option').sort(function(x, y) {
    return $(x).text() > $(y).text() ? 1 : -1; //for descending switch "<" for ">"
  });
  $('#selLuxury').prepend($("<option value='DEFAULT'>Please Select</option>"));
  document.getElementById("selLuxury").addEventListener("change",function(event){
    guiUpdateHTMLLuxury(parseInt(this.value));
  }, { passive: true });

  guiSectionShow("#secSettings");

// gameStart(); //TODO: SAVES ME TIME

} //function

function gameStart() {

  //apply defaults
  gamApplyDefaults();
  plaApplyDefaults();

  //update the HTML
  guiUpdateHTMLPlayer();
  guiUpdateHTMLStats();

  guiReset();

  guiSectionShow("#secGame");

  mapCreate(); //only render if at the end

} //function

function gameEnd() {

  alert("You failed!");

} //function

function gameTurnEnd() {

  eventCheck();

  if (JSONplayer[0].luxury.length > 0)
    luxuryBrokenCheck();

  jobPromotionCheck();

  //update the HTML
  guiUpdateHTMLPlayer();
  guiUpdateHTMLStats();

  guiReset();

  gameCheckEndGame();

} //function

function gameCheckEndGame() {
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

//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gamApplyDefaults() {
  //apply defaults and player choices

  var tmpElem;

  JSONgame[0].day = 0; //what day to begin with

  tmpElem = document.getElementById("selCurrency");
  JSONgame[0].currency = JSONconfig[0].currency[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selMeasure");
  JSONgame[0].measure = JSONconfig[0].measure[tmpElem[tmpElem.selectedIndex].value];

  tmpElem = document.getElementById("selDays");
  JSONgame[0].days = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

  //set the max value of the work days input
  document.getElementById("inpWorkDays").max = JSONconfig[0].days[tmpElem[tmpElem.selectedIndex].value];

} //function
