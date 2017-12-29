$(function(){
  $("#jvectormap").vectorMap({
    map: "world_mill"
    ,backgroundColor: "#fff"

    //******************************
    // START regions
    ,regionsSelectable: true
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

      var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
          mapObject.clearSelectedRegions();
          //$('#jvectormap').vectorMap('get','mapObject').setFocus({region: index, animate: true}); //zoom in
          mapObject.setFocus({ region: index, animate: true }); //zoom in

    } //onRegionClick
    // END regions
    //******************************
    //******************************
    // START markers
    ,markersSelectable: true
    ,markers : JSONdestinations["destinations"] //Assign value from the JSON array
    ,markerStyle : {
      initial : {
        fill  : "#CCC"
        ,stroke: "red"
      } //initial
      ,hover: {
          stroke: "#FFC107"
          ,"stroke-width": 2
          ,cursor: "pointer"
      }
      ,selected: {
          stroke: "#FFC107"
          ,fill: "red"
      }
    } //markerStyle
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
    ,onMarkerClick: function(event, index) {
      //alert(JSONdestinations["destinations"][index].latLng[0]);

      if (JSONlocation["location"][0].locationCurrent == index) {
        //click on current destination

      } else {

        var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
            mapObject.clearSelectedMarkers();
            mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "green");

        //getlocations
        var locationCurrent = JSONdestinations["destinations"][JSONlocation["location"][0].locationCurrent];
        var locationDestination = JSONdestinations["destinations"][index];

        displayDestination(index); //display destination details

      }


    } //onMarkerClick
    // END markers
    //******************************
  }); //$("#jvectormap").vectorMap({

    //Set starting colours
    //ONLY HAPPENS ONCE?
    var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
        mapObject.markers[JSONlocation["location"][0].locationCurrent].element.setStyle("fill", "green");
    //displayCurrent(JSONme["me"][0]);

}); //$(function(){
