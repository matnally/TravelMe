
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
