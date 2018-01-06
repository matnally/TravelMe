
//CreateJSON();

var map=[];
function createMap() {

   map = new Datamap({
    scope: 'world'
    ,element: document.getElementById('divDatamaps')
    ,fills: {
      country: 'yellow'
      ,destination:'black'
      ,defaultFill: '#ccc'
      ,chosenDestination: 'yellow'
//      ,visited: 'green'  //HOW CAN I CALL THIS?
     } //fills
//    ,data: destinationsZAPPA //country fills
    ,geographyConfig: {
      popupOnHover: true
      ,highlightOnHover: true
      ,borderColor: '#000'
      ,borderWidth: 1
    }, //geographyConfig

  }); //var map = new Datamap({

  map.bubbles(JSONdestinations["destinations"]); //variable from JSON file




//  done: function(datamap) {
    map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
alert("delete this func?");
    });
//s  }


//BUBBLE ONCLICK EVENT
map.svg.selectAll('.datamaps-bubble').on('click', function(e,data) {
  //console.log(e.name);
  //console.log(data);
  actionSelect('flight', data);

if (JSONlocation["location"][0].locationCurrent != data) {
  //not at current dest!

  //START draws arc
  arcCurrentToDestination=[];
  arcCurrentToDestination.push({
    origin: {
      latitude: JSONbubbles[JSONlocation["location"][0].locationCurrent].latitude
      ,longitude: JSONbubbles[JSONlocation["location"][0].locationCurrent].longitude
    },
    destination: {
      latitude: JSONbubbles[JSONlocation["location"][0].locationDestination].latitude
      ,longitude: JSONbubbles[JSONlocation["location"][0].locationDestination].longitude
    }
    ,strokeColor: 'blue'
    ,strokeWidth: 4
  });
  var c = Object.assign(arcHistory,arcCurrentToDestination); //ORDER OF PARAMS VERY IMPORTANT!
  map.arc(c);
  //END draws arc

} //if


  //START MAP COLOURS
  var m = {};//GLOBAL
  if ((intIClickedOn!="")&&(JSONbubbles[intIClickedOn].fillKey != "visited"))  //or visited!
    m[JSONbubbles[intIClickedOn].country] = "#ccc"; //reset

  if ((intIClickedOn!="")&&(JSONbubbles[intIClickedOn].fillKey == "visited"))  //or visited!
   m[JSONbubbles[intIClickedOn].country] = 'blue';

  intIClickedOn = JSONlocation["location"][0].locationDestination;
    m[JSONbubbles[JSONlocation["location"][0].locationDestination].country] = 'red';
    map.updateChoropleth(m);
    //END MAP COLOURS


}); //map.svg.selectAll('.datamaps-bubble').on('click', function(e,data) {




} //createMap

//TODO GLOBALS!!!
var arcCurrentToDestination = []; //init
var arcHistory = []; //init

var intIClickedOn=0;






function updateMap() {

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      mapObject.clearSelectedMarkers();
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("fill", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("stroke", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("r", 5);
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "blue");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("stroke", "#000");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("r", 10);

}


function updateMapCurrentLocation() {

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      mapObject.clearSelectedMarkers();
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("fill", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("stroke", "RED");
      mapObject.markers[JSONlocation["location"][0].locationPrevious].element.setStyle("r", 5);
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "blue");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("stroke", "#000");
      mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("r", 10);

}



function onMarkerOutUpdateMap() {
  //get selected marker
  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");

  //check if something is actually selected
  if (mapObject.getSelectedMarkers() != "") {
    travelObjectUpdate(parseInt(mapObject.getSelectedMarkers())); //display destination details
    travelObjectDisplay(parseInt(mapObject.getSelectedMarkers())); //display destination details
    travelButtonShowHide(mapObject.getSelectedMarkers());

    //TODO
    if (JSONlocation["location"][0].locationCurrent == mapObject.getSelectedMarkers()) {
      //same location as current!
      updateTurnDetails(""); //???
    } else {
      updateTurnDetails(travelGetTravelDetails()); //???
    }

  } else {
    travelObjectUpdate(parseInt(JSONlocation["location"][0].locationCurrent)); //display destination details
    travelObjectDisplay(parseInt(JSONlocation["location"][0].locationCurrent)); //display destination details
    travelButtonShowHide(JSONlocation["location"][0].locationCurrent);
    updateTurnDetails(""); //???
  } //if

}//function




function getRegionDetails(strRegion) {

var strTemp = "";

  //get array
  var arrTemp = JSONdestinations["destinations"];
  //loop through
  for (var i = 0; i < arrTemp.length; i++) {

    if (arrTemp[i].region == strRegion) {
// show details of the region
      strTemp += arrTemp[i].name;
      strTemp += "<br>";

    } //if

  }//for

return strTemp;

}
