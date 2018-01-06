
function createJSON() {

  //loop through
  var strBubbleJSON = "";
  var strTemp = "";
  for (var x = 0; x < JSONdestinations["destinations"].length; x++) {
    if (!x==0) strBubbleJSON += ",";
    strBubbleJSON += "{";
    strBubbleJSON += "\n";
    var intTemp = 0;
    for (var key in JSONdestinations["destinations"][x]) {
      if (JSONdestinations["destinations"][x].hasOwnProperty(key)) {
        //CASE???
        if (!intTemp==0) { strBubbleJSON += "  ," } else { strBubbleJSON += "  " };
        intTemp++;

        switch (key) {
          case "latLng":
            var strTemp = JSONdestinations["destinations"][x][key].toString().split(",");
            strBubbleJSON += ("'latitude' : " + strTemp[0]);
            strBubbleJSON += "\n";
            strBubbleJSON += ("  ,'longitude' : " + strTemp[1]);
            strBubbleJSON += "\n";
          break;
          case "region":
            strBubbleJSON += ("'country' : '" + JSONdestinations["destinations"][x][key] + "'");
            strBubbleJSON += "\n";
          break;
          default:
            strBubbleJSON += ("'" + key + "' : '" + JSONdestinations["destinations"][x][key] + "'");
            strBubbleJSON += "\n";
        } //switch

      } //if
    } //for


    strBubbleJSON += ("  ,'radius' : '10'");
    strBubbleJSON += "\n";
    strBubbleJSON += ("  ,'fillKey' : 'destination'");
    strBubbleJSON += "\n";
/*
    strBubbleJSON += ("  ,'country' : 'blank'");
    strBubbleJSON += "\n";
    strBubbleJSON += ("  ,'blank' : 'blank'");
    strBubbleJSON += "\n";
    strBubbleJSON += ("  ,'blank' : 'blank'");
    strBubbleJSON += "\n";
    */
    strBubbleJSON += "}";
    strBubbleJSON += "\n";
  }//for
//  console.log(strBubbleJSON);
  alert(strBubbleJSON);
document.write(strBubbleJSON);

} //function





function initStart() {
  createMap();
  updateAndDisplayLocationObject("start", 0, JSONconfig["config"][0].home, 0);
  displayMeObject(); //displays UPDATE? the user's details
  trekPopulateLocationChoices();
  updateHistory("Started in " + JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent].name);
  //updateTurnDetails(""); //???
}
function turnStart() {
}
function turnEnd() {
//  createMap();
  updateTurnDetails(""); //???
//  updateMapCurrentLocation();
  trekPopulateLocationChoices();
  displayMeObject(); //displays the user's details
  //  travelButtonShowHide(JSONlocation["location"][0].locationCurrent); //if can afford

  //START draws arc
  arcHistory.push({
      origin: {
        latitude: JSONbubbles[JSONlocation["location"][0].locationPrevious].latitude
        ,longitude: JSONbubbles[JSONlocation["location"][0].locationPrevious].longitude
      },
      destination: {
        latitude: JSONbubbles[JSONlocation["location"][0].locationCurrent].latitude
        ,longitude: JSONbubbles[JSONlocation["location"][0].locationCurrent].longitude
      }
      ,strokeColor: 'green'
      ,strokeWidth: 2
  });
//  $("#container").datamaps(options);
//map.arc(arcCurrentToDestination);
var c = Object.assign(arcCurrentToDestination, arcHistory);
map.arc(c);
//END draws arc

//START MAP COLOURS
var m = {};//GLOBAL
m[JSONbubbles[JSONlocation["location"][0].locationCurrent].country] = 'blue';
//m[JSONbubbles[JSONlocation["location"][0].locationCurrent].fillKey] = 'visited';
JSONbubbles[JSONlocation["location"][0].locationCurrent].fillKey = 'visited';
//alert(JSONbubbles[JSONlocation["location"][0].locationCurrent].fillKey);
  map.updateChoropleth(m);
intIClickedOn="";
//END MAP COLOURS





turnReset();
  alert("turn ended!");
  // WORK OUT % OF COUNTRY YOU HAVE TREKKED?????
} //function
function turnReset() {
  $('#workChoice')[0].selectedIndex = 0;
  $('#walkAboutChoice')[0].selectedIndex = 0;
  //$('#trekChoice')[0].selectedIndex = 0;
//  document.getElementById("butTravel").disabled = true;
} //function

function elemHideShow(elemName, strAction) {

  var elem = document.getElementById(elemName);

  if (strAction == "Show") $(elem).show();
  else $(elem).hide();

}

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function
