

var map=[];
function createMap() {

   map = new Datamap({
    scope: 'world'
    ,projection: 'mercator'
    ,element: document.getElementById('divDatamaps')
    ,fills: {
      country: 'yellow'
      ,destination:'black'
      ,defaultFill: '#ccc'
      ,chosenDestination: 'yellow'
     } //fills
    ,geographyConfig: {
      highlightOnHover: true,
      highlightFillColor: 'yellow',
      highlightBorderColor: 'black',
      highlightBorderWidth: 1,
      highlightBorderOpacity: 1,
/*
hideAntarctica: true,
borderWidth: 1,
borderOpacity: 1,
borderColor: '#FDFDFD',
popupTemplate: function(geography, data) { //this function should just return a string
  return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
},
popupOnHover: true, //disable the popup while hovering
*/
      popupOnHover: true
      ,highlightOnHover: true
      ,borderColor: '#000'
      ,borderWidth: 1
    }, //geographyConfig
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: null,
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo">ZAPPA1: <strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.75,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: 'yellow',
        highlightBorderColor: 'black',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        exitDelay: 100,
        //key: JSON.stringify
    },
    arcConfig: {
      strokeColor: 'blue',
      strokeWidth: 3,
      arcSharpness: 2,
      animationSpeed: 600
    },

  }); //var map = new Datamap({

  //load bubble data
  map.bubbles(JSONdestinations); //variable from JSON file

  //START COUNTRY CLICK
  map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

    //COUNTRY CLICK
    //map.svg.call(d3.behavior.zoom().on("zoom", redraw));
  });
  //END COUNTRY CLICK



//START BUBBLE CLICK
map.svg.selectAll('.datamaps-bubble').on('click', function(e,data) {
//  alert("bubble click");
  map.svg.call(d3.behavior.zoom().on("zoom", redraw));
  //console.log(e.name);
  //console.log(data);
  actionSelect('flight', data);

  if (JSONlocation[0].locationCurrent != data) {
    //not at current dest!

    //START draws arc
    arcCurrentToDestination=[];
    arcCurrentToDestination.push({
      origin: {
        latitude: JSONdestinations[JSONlocation[0].locationCurrent].latitude
        ,longitude: JSONdestinations[JSONlocation[0].locationCurrent].longitude
      },
      destination: {
        latitude: JSONdestinations[JSONlocation[0].locationDestination].latitude
        ,longitude: JSONdestinations[JSONlocation[0].locationDestination].longitude
      }
      ,strokeColor: 'yellow'
      ,strokeWidth: 4
    });
    var c = Object.assign(arcHistory,arcCurrentToDestination); //ORDER OF PARAMS VERY IMPORTANT!
    map.arc(c);
    //END draws arc

  } else {
    alert("Current location");
  } //if


  //START MAP COLOURS
  var m = {};//GLOBAL
  if ((intIClickedOn!="")&&(JSONdestinations[intIClickedOn].fillKey != "visited"))  //or visited!
    m[JSONdestinations[intIClickedOn].country] = "#ccc"; //reset

  if ((intIClickedOn!="")&&(JSONdestinations[intIClickedOn].fillKey == "visited"))  //or visited!
   m[JSONdestinations[intIClickedOn].country] = 'blue';

  intIClickedOn = JSONlocation[0].locationDestination;

  m[JSONdestinations[JSONlocation[0].locationDestination].country] = 'yellow';
  m[JSONdestinations[JSONlocation[0].locationCurrent].country] = 'green';

  map.updateChoropleth(m);
  //END MAP COLOURS


//highlightFillColor: 'yellow'
//    var m = {};//GLOBAL
//    m[JSONdestinations[data].highlightFillColor] = 'white';
//    map.updateChoropleth(m);


}); //map.svg.selectAll('.datamaps-bubble').on('click', function(e,data) {
//END BUBBLE CLICK




} //createMap


//  map.svg.call(d3.behavior.zoom().on("zoom", redraw));
  function redraw() {
  //  alert("redraw");
       map.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }




//TODO GLOBALS!!!
var arcCurrentToDestination = []; //init
var arcHistory = []; //init

var intIClickedOn=0;








function updateMap() {

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      mapObject.clearSelectedMarkers();
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("fill", "RED");
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("stroke", "RED");
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("r", 5);
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("fill", "blue");
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("stroke", "#000");
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("r", 10);

}


function updateMapCurrentLocation() {

  var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
      mapObject.clearSelectedMarkers();
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("fill", "RED");
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("stroke", "RED");
      mapObject.markers[JSONlocation[0].locationPrevious].element.setStyle("r", 5);
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("fill", "blue");
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("stroke", "#000");
      mapObject.markers[JSONlocation[0].locationCurrent].element.setStyle("r", 10);

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
    if (JSONlocation[0].locationCurrent == mapObject.getSelectedMarkers()) {
      //same location as current!
      updateTurnDetails(""); //???
    } else {
      updateTurnDetails(travelGetTravelDetails()); //???
    }

  } else {
    travelObjectUpdate(parseInt(JSONlocation[0].locationCurrent)); //display destination details
    travelObjectDisplay(parseInt(JSONlocation[0].locationCurrent)); //display destination details
    travelButtonShowHide(JSONlocation[0].locationCurrent);
    updateTurnDetails(""); //???
  } //if

}//function




function getRegionDetails(strRegion) {

var strTemp = "";

  //get array
  var arrTemp = JSONdestinations;
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




function updateMap() {

  //if (JSONlocation[0].locationCurrent == JSONlocation[0].locationPrevious) { //Current and Previous locations are the same, so have not moved! So don't update map
  if (JSONdestinations[JSONlocation[0].locationCurrent].destinationType == "trek") {
    //No need to update the map if is it a trek
  } else {

    //START MAP UPDATE
      //START draws arc
      arcHistory.push({
          origin: {
            latitude: JSONdestinations[JSONlocation[0].locationPrevious].latitude
            ,longitude: JSONdestinations[JSONlocation[0].locationPrevious].longitude
          },
          destination: {
            latitude: JSONdestinations[JSONlocation[0].locationCurrent].latitude
            ,longitude: JSONdestinations[JSONlocation[0].locationCurrent].longitude
          }
      //      ,strokeColor: 'green'
      //      ,strokeWidth: 2
      });
      //  $("#container").datamaps(options);
      //map.arc(arcCurrentToDestination);
      var c = Object.assign(arcCurrentToDestination, arcHistory);
      map.arc(c);
      //END draws arc

      //START MAP COLOURS
      var m = {};//GLOBAL
      m[JSONdestinations[JSONlocation[0].locationCurrent].country] = 'blue';
      //m[JSONdestinations[JSONlocation[0].locationCurrent].country] = 'green';
      JSONdestinations[JSONlocation[0].locationCurrent].fillKey = 'visited';

      map.updateChoropleth(m);
      intIClickedOn="";
      //END MAP COLOURS
    //END MAP UPDATE

  } //if

} //function
