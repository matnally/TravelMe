
function gameInit() {

  //create options to choose

} //function

function gameStart() {

  //Apply defaults
  gamApplyDefaults();
  plaApplyDefaults();

  mapCreate();
// create HTML and update DOM
// defUpdateElement("ELEM", guiCreateHTMLPlayer());

} //function

function gameEnd() {

} //function

function gameTurn() {

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gamApplyDefaults() {
  //Apply defaults and player choices

  JSONgame[0].currency = "";
  JSONgame[0].measure = "";
  JSONgame[0].days = "";

} //function
