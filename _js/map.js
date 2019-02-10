
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
      highlightFillColor: 'yellow'
      ,highlightBorderColor: 'black'
      ,highlightBorderWidth: 1
      ,highlightBorderOpacity: 1
      ,popupOnHover: true
      ,highlightOnHover: false
      ,borderColor: '#000'
      ,borderWidth: 1
    } //geographyConfig
    ,bubblesConfig: {
      borderWidth: 2
      ,borderOpacity: 1
      ,borderColor: '#000'
      ,popupOnHover: true
      ,radius: 7
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
  }); //var map = new Datamap({

  //load bubble data
  map.bubbles(JSONdestination); //variable from JSON file

  //bubble callback
  map.svg.selectAll('.datamaps-bubble').on('click', function(e, data) {
    //updates map with countries visited
    var m = [];
    m[JSONdestination[data].country] = "green";
    map.updateChoropleth(m);

    travel(data);

  });





} //mapCreate
