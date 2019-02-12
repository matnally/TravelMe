
var map = []; //global

function mapCreate() {

  map = new Datamap({
    scope: 'world'
    ,projection: 'mercator'
    ,element: document.getElementById('divDatamaps')
    ,fills: {
      defaultFill: JSONconfig[0].mapCountryBackground
    } //fills
    ,geographyConfig: {
      popupOnHover: true
      ,highlightOnHover: false
      ,borderWidth: 1
      ,borderColor: JSONconfig[0].mapCountryOutline
    } //geographyConfig
    ,bubblesConfig: {
      popupOnHover: true
      ,radius: 7
      ,fillOpacity: 0.75
      ,animate: true
      ,borderWidth: 2
      ,borderOpacity: 1
      ,borderColor: JSONconfig[0].mapDestinationBorderColor
      ,highlightOnHover: true
      ,highlightFillColor: JSONconfig[0].mapDestinationHover
      ,highlightBorderColor: JSONconfig[0].mapDestinationBorderColor
      ,exitDelay: 100
      ,popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">'  + '<h1>' + data.name + '</h1>'
                                          + '<p>' + data.description + '</p>'

                                          + '<div class="divTable">'
                                          +   '<div class="divRow">'
                                          +     '<div class="divCell textRight"><p>Cost</p></div> <!-- divCell -->'
                                          +     '<div class="divCell"><p>' + JSONgame[0].currency + defThousandsDelimiter(data.cost) + '</p></div> <!-- divCell -->'
                                          +   '</div> <!-- divRow -->'
                                          +   '<div class="divRow">'
                                          +     '<div class="divCell textRight"><p>Happiness</p></div> <!-- divCell -->'
                                          +     '<div class="divCell"><p>' + data.happiness + '</p></div> <!-- divCell -->'
                                          +   '</div> <!-- divRow -->'
                                          +   '<div class="divRow">'
                                          +     '<div class="divCell textRight"><p>Days</p></div> <!-- divCell -->'
                                          +     '<div class="divCell"><p>' + data.days + '</p></div> <!-- divCell -->'
                                          +   '</div> <!-- divRow -->'
                                          + '</div> <!-- divTable -->'

                                          + '</div>';
      } //popupTemplate
    } //bubblesConfig
  }); //map = new Datamap({

  //load bubble data
  map.bubbles(JSONdestination); //variable from JSON file

  //bubble callback
  map.svg.selectAll('.datamaps-bubble').on('click', function(e, data) {
    travel(data);
  });

} //mapCreate

function mapUpdateCountryVisited(intDestination) {
  //updates map with country visited
  var m = [];
  m[JSONdestination[intDestination].country] = JSONconfig[0].mapCountryVisited; //set colour
  map.updateChoropleth(m);
} //function
