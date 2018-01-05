$(function(){
  $("#jvectormap").vectorMap({
    map: "world_mill"
    ,backgroundColor: "#fff"

    //******************************
    // START regions
    ,regionsSelectable: false
    ,regionStyle : {
      initial : {
        fill  : "#CCC"
        ,stroke: "#FFF"
      } //initial
      ,hover: {
          stroke: "#FFC107"
          ,"stroke-width": 2
          ,cursor: "pointer"
      }
      ,selected: {
          fill: "red"
      }
    } //regionStyle
    ,onRegionTipShow: function(event, element, index){
//      element.html(strTemp);
        //console.log(index);
    }
    ,onRegionClick: function(event, index) {
/*
var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
    mapObject.clearSelectedRegions();
    //$('#jvectormap').vectorMap('get','mapObject').setFocus({region: index, animate: true}); //zoom in
    mapObject.setFocus({ region: index, animate: true }); //zoom in

var config = {
    animate: true
    ,region: index
    ,stroke: "yellow"
    ,"stroke-width": 2
};
mapObject.setFocus(config);
*/

//TODO:
// display info about the country?
//displayRegionDetails(index);


    } //onRegionClick
    // END regions
    //******************************


    //******************************
    // START markers
    ,markersSelectable: true
    ,markers : JSONdestinations["destinations"] //Assign value from the JSON array
    ,markerStyle : {
      initial : {
        "name":"namMarkers",
        "fill"  : "#CCC"
        ,"stroke": "#000"
        ,"fill-opacity": 1
        ,"stroke-width": 1
        ,"stroke-opacity": 1
        ,r: 5
      } //initial
      ,hover: {
        "fill"  : "yellow"
        ,"stroke": "#000"
        ,"fill-opacity": 1
        ,"stroke-width": 1
        ,"stroke-opacity": 1
        ,r: 10
        ,cursor: "pointer"
      }
      ,selected: {
        "fill"  : "yellow"
        ,"stroke": "#000"
        ,"fill-opacity": 1
        ,"stroke-width": 1
        ,"stroke-opacity": 1
        ,r: 10
      }
    } //markerStyle

    ,onMarkerOver: function (event, index) {
      //travelSelect(index);
    } //onMarkerOver
    ,onMarkerOut: function (event, index) {
      //onMarkerOutUpdateMap();
    } //onMarkerOut
    ,onMarkerClick: function(event, index) {

      var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
          mapObject.clearSelectedMarkers();

actionSelect("flight", index);


    } //onMarkerClick

    ,onMarkerTipShow: function(event, element, index){
      var strTemp = "";
          strTemp += JSONdestinations["destinations"][index].name;

          if (JSONlocation["location"][0].locationCurrent == index) {
            //Same location
            strTemp += "<br>";
            strTemp += "You are here!";
          } else {
          }

      element.html(strTemp);
    }
    // END markers
    //******************************
  }); //$("#jvectormap").vectorMap({

    //?????
    updateMap();


  }); //$(function(){
