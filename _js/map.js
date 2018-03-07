

var map = [];
function createMap() {

   map = new Datamap({
    scope: 'world'
    ,projection: 'mercator'
    ,element: document.getElementById('divDatamaps')
    ,fills: {
      country: 'yellow'
      ,destination:'black'
      ,defaultFill: 'white'
      ,chosenDestination: 'PURPLE'
     } //fills
    ,geographyConfig: {
      highlightOnHover: true,
      highlightFillColor: 'red',
      highlightBorderColor: 'black',
      highlightBorderWidth: 1,
      highlightBorderOpacity: 1,
      popupOnHover: true,
      highlightOnHover: true,
      borderColor: 'white',
      borderWidth: 1

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

  //apply fade style to chosenDestination
  makeBubbleSelectedFade(e.name);

  //zoom in on chosenDestination???
  map.svg.call(d3.behavior.zoom().on("zoom", redraw));

  //apply action function
  actionSelect('flight', data);



  if (JSONlocation[0].locationCurrent != data) {
    //not at current dest!

//setInterval(function() {

//  console.log("here");
//map.svg.selectAll('.datamaps-arc').remove();
//map.arc[1].remove();
  console.log("svg: " + map.svg.selectAll('.datamaps-arc').length);
  console.log("arc: " + map.arc.length);
// for (var i=0;i<=map.arc.length;i++) {
//     console.log(map.arc[i].toString());
// }



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
//}, 2000); //setInterval

  } else {
    alert("Current location");
  } //if


  //START MAP COLOURS
  var m = {};//GLOBAL
  if ((intIClickedOn!="")&&(JSONdestinations[intIClickedOn].fillKey != "visited"))  //or visited!
    m[JSONdestinations[intIClickedOn].country] = "#ccc"; //reset

  if ((intIClickedOn!="")&&(JSONdestinations[intIClickedOn].fillKey == "visited"))  //or visited!
  m[JSONdestinations[intIClickedOn].country] = "#ccc"; //reset
//   m[JSONdestinations[intIClickedOn].country] = 'blue';

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
//  if (JSONdestinations[JSONlocation[0].locationCurrent].destinationType == "trek") {
    //No need to update the map if is it a trek
  //} else {

    if (JSONaction[0].actionType == "flight") {

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



function makeBubbleSelectedFade(strBubbleSelected) {

  // add the fading bubbles plugin
  map.addPlugin('fadingBubbles', fadingBubbles);
  // fetch the data
  d3.json(JSONdestinations, function(error) {
      if (error) return console.warn(error);
      drawBubbles(JSONdestinations);
      var sleep = (JSONdestinations.length - 1) * 100;
      setInterval(function() {
          drawBubbles(JSONdestinations);
      }, sleep);
  });
  // draw the fading bubbles at staggered intervals
  drawBubbles = function(data) {
      data.forEach(function(datum, index) {
        if (datum.name == strBubbleSelected) { //get selected bubble
          setTimeout(function() {
              map.fadingBubbles([datum]);
          }, index * 0.1); //setTimeout(function() {
        } //if
      }); //data.forEach(function(datum, index) {
  } //drawBubbles = function(data) {

} //function
