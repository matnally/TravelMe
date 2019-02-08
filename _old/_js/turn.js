
function initStart() {
  createMap();
  updateAndDisplayLocationObject("start", 0, JSONconfig[0].home, 0);
  displayMeObject(); //displays UPDATE? the user's details
  trekPopulateLocationChoices();

  updateHistoryJSON();
  updateHistoryDisplay();

  displayOpeningMessage();

}
function turnStart() {

  //alert("turn started!");
//  swal("Message title", "You have done an action!", "success");

}
function turnEnd() {

  callEvent(JSONlocation[0].locationCurrent, "travel");
  //updateTurnDetails(""); //???
  trekPopulateLocationChoices();
  displayMeObject(); //displays the user's details
  updateMap(); //draws lines if applicable
  turnReset();

  updateHistoryJSON();
  updateHistoryDisplay();

//  alert("turn ended!");
  // WORK OUT % OF COUNTRY YOU HAVE TREKKED?????

} //function
function turnReset() {
  $('#workChoice')[0].selectedIndex = 0;
  $('#walkAboutChoice')[0].selectedIndex = 0;
} //function

function elemHideShow(elemName, strAction) {

  var elem = document.getElementById(elemName);

  if (strAction == "Show") $(elem).show();
  else $(elem).hide();

}
