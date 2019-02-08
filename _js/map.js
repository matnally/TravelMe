
function mapCreate() {

  var map = new Datamap({
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
      highlightOnHover: true
      ,highlightFillColor: 'yellow'
      ,highlightBorderColor: 'black'
      ,highlightBorderWidth: 1
      ,highlightBorderOpacity: 1
      ,popupOnHover: true
      ,highlightOnHover: true
      ,borderColor: '#000'
      ,borderWidth: 1
    } //geographyConfig
    ,bubblesConfig: {
      borderWidth: 2
      ,borderOpacity: 1
      ,borderColor: '#FFFFFF'
      ,popupOnHover: true
      ,radius: 10
      ,fillOpacity: 0.75
      ,animate: true
      ,highlightOnHover: true
      ,highlightFillColor: 'yellow'
      ,highlightBorderColor: 'black'
      ,highlightBorderWidth: 2
      ,highlightBorderOpacity: 1
      ,highlightFillOpacity: 0.85
      ,exitDelay: 100
      ,popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">ZAPPA1: <strong>' + data.name + '</strong></div>';
      } //popupTemplate
    } //bubblesConfig
  }); //var map = new Datamap({

  //load bubble data
  map.bubbles(JSONdestination); //variable from JSON file

} //mapCreate
