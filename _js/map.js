
function mapChoose(intMap) {
  defUpdateElement("spnSelDestinations", guiCreateHTMLComboBoxMulti(JSONconfig[0].mapsJSON[intMap], "selDestinations"));
  defUpdateElement("spnSelHomeLocation", guiCreateHTMLComboBoxSettings(JSONconfig[0].mapsHomeJSON[intMap], "selHomeLocation"));
} //function




var map = []; //global so function as use MAP instance
var arrMapArcs = []; //global so maintain history

function mapCreate(strMapElem) {

  map = new Datamap({
    scope: JSONgame[0].map
    ,responsive: false
    ,projection: 'mercator'


// //Africa MAP
// ,setProjection: function(element) {
//   var projection = d3.geo.equirectangular()
//     .center([23, -3])
//     .rotate([4.4, 0])
//     .scale(400)
//     .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
//   var path = d3.geo.path()
//     .projection(projection);
//   return {path: path, projection: projection};
// } //setProjection


    // ,projection: 'orthographic'
    ,element: document.getElementById(strMapElem)
    ,fills: {
      defaultFill: JSONconfig[0].mapCountryBackground
    } //fills
    ,geographyConfig: {
      popupOnHover: true
      ,highlightOnHover: false
      ,borderWidth: 1
      ,borderColor: JSONconfig[0].mapCountryOutline
      ,popupTemplate: function(geography, data) {
        //Country popup

        var intTemp = "";
        var intVisited = 0;
        var intCountryDestinations = 0;
        intVisited = travGetNoOfDestinationsInCountryVisited(geography.id);
        intCountryDestinations = travGetNoOfDestinationsInCountryFromCountry(geography.id);
        if (intCountryDestinations > 0)
          intTemp = '<p>You have visited '+intVisited+' out of '+intCountryDestinations+' destinations</p>';

        return '<div class="hoverinfo">'  + '<h1>' + geography.properties.name + '</h1>'
                + intTemp
                + '</div> <!-- hoverinfo -->';

      } //popupTemplate
    } //geographyConfig
    ,bubblesConfig: {
      popupOnHover: true
      ,radius: 5
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
        //Bubble popup
        return '<div class="hoverinfo">'  + '<h1>' + data.name + '</h1>'
                                          + '<p>' + data.description + '</p>'

                                          + '<div class="divTable">'
                                          +   '<div class="divRow">'
                                          +     '<div class="divCell textRight"><p>Cost</p></div> <!-- divCell -->'
                                          +     '<div class="divCell"><p>' + JSONgame[0].currency + defThousandsDelimiter(data.cost) + '</p></div> <!-- divCell -->'
                                          +   '</div> <!-- divRow -->'
                                          +   '<div class="divRow">'
                                          +     '<div class="divCell textRight"><p>Distance</p></div> <!-- divCell -->'
                                          +     '<div class="divCell"><p>' + defThousandsDelimiter(travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, data.latitude, data.longitude, JSONgame[0].measure)) + ' ' + JSONgame[0].measure + '</p></div> <!-- divCell -->'
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

                                          + '</div> <!-- hoverinfo -->';
      } //popupTemplate
    } //bubblesConfig
    ,arcConfig: {
      strokeColor:JSONconfig[0].mapArcColour
      ,strokeWidth: 2
      ,arcSharpness: 0.5
      ,animationSpeed: 600
    } //arcConfig
  }); //map = new Datamap({

  //load bubble data
  map.bubbles(JSONdestination); //variable from JSON file

  //bubble callback
  map.svg.selectAll('.datamaps-bubble').on('click', function(e, data) {
    travel(data);
  });

  //country double click
  map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
    map.svg.call(d3.behavior.zoom().on("zoom", mapRedraw));
    // alert(data);
    // alert(geography.properties.name);
  });

} //function mapCreate


function mapArcAdd(intDestination) {
  arrMapArcs.push({
    origin: {
      latitude: JSONgame[0].homeLatitude
      ,longitude: JSONgame[0].homeLongitude
    }
    ,destination: {
      latitude: JSONdestination[intDestination].latitude
      ,longitude: JSONdestination[intDestination].longitude
    }
  });
  map.arc(arrMapArcs);
} //function




function mapRedraw() {
  var elem = document.getElementById("divDatamapGame");
  map.svg.selectAll("g").transition().duration(750).attr("transform", "translate(0, 0)scale(1." + intScale + ")");
} //function
// MAP CONTROLS
var intScale = 1; //TODO: why not increment?!
function mapZoomIn() {
  intScale++;
  mapRedraw();
} //function
function mapZoomOut() {
  intScale--;
  mapRedraw();
} //function
function mapReset() {
  intScale = 1;
  mapRedraw();
} //function
function mapGoTo(int1, int2) {
  map.svg.selectAll("g").transition().duration(750).attr("transform", "scale(1.5)translate(" + int1 + "," + int2 + ")");
} //function

function mapUpdateCountryVisited(intDestination) {
  //updates map with country visited
  var arrMapData = [];
  var strCountryCode = "";
  strCountryCode = JSONdestination[intDestination].country;
  arrMapData[strCountryCode] = JSONconfig[0].mapCountryVisited; //set colour
  map.updateChoropleth(arrMapData);
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function mapGetCountryName(JSONtoUse, strCountryCode) {
  //converts Alpha3 country codes to Alpha2
  var strTemp = "";
  Object.keys(JSONtoUse[0]).forEach(function(key) {
  if (JSONtoUse[0][key] == strCountryCode)
      strTemp = key;
  });
  return strTemp;
} //function


//JUST IN CASE YOU NEED...
function mapGetCountryCodeAlpha3Code(JSONtoUse, strCountryCode) {
  //converts Alpha2 country codes to Alpha3
  var strTemp = "";
  Object.keys(JSONtoUse[0]).forEach(function(key) {
    if (JSONtoUse[0][key] == strCountryCode)
      strTemp = key;
  });
  return strTemp;
} //function
function mapGetCountryCodeAlpha2Code(JSONtoUse, strCountryCode) {
  //converts Alpha3 country codes to Alpha2
  var strTemp = "";
  Object.keys(JSONtoUse[0]).forEach(function(key) {
    if (key == strCountryCode)
      strTemp = JSONtoUse[0][key];
  });
  return strTemp;
} //function

var JSONcountryNames = [{"Andorra":"AND","United Arab Emirates":"ARE","Afghanistan":"AFG","Antigua and Barbuda":"ATG","Anguilla":"AIA","Albania":"ALB","Armenia":"ARM","Netherlands Antilles":"","Angola":"AGO","Antarctica":"ATA","Argentina":"ARG","American Samoa":"ASM","Austria":"AUT","Australia":"AUS","Aruba":"ABW","Azerbaijan":"AZE","Bosnia and Herzegovina":"BIH","Barbados":"BRB","Bangladesh":"BGD","Belgium":"BEL","Burkina Faso":"BFA","Bulgaria":"BGR","Bahrain":"BHR","Burundi":"BDI","Benin":"BEN","Bermuda":"BMU","Brunei":"BRN","Bolivia":"BOL","Brazil":"BRA","Bahamas":"BHS","Bhutan":"BTN","Bouvet Island":"BVT","Botswana":"BWA","Belarus":"BLR","Belize":"BLZ","Canada":"CAN","Cocos [Keeling] Islands":"CCK","Congo [DRC]":"COD","Central African Republic":"CAF","Congo [Republic]":"COG","Switzerland":"CHE","Côte d'Ivoire":"CIV","Cook Islands":"COK","Chile":"CHL","Cameroon":"CMR","China":"CHN","Colombia":"COL","Costa Rica":"CRI","Cuba":"CUB","Cape Verde":"CPV","Christmas Island":"CXR","Cyprus":"CYP","Czech Republic":"CZE","Germany":"DEU","Djibouti":"DJI","Denmark":"DNK","Dominica":"DMA","Dominican Republic":"DOM","Algeria":"DZA","Ecuador":"ECU","Estonia":"EST","Egypt":"EGY","Western Sahara":"ESH","Eritrea":"ERI","Spain":"ESP","Ethiopia":"ETH","Finland":"FIN","Fiji":"FJI","Falkland Islands [Islas Malvinas]":"FLK","Micronesia":"FSM","Faroe Islands":"FRO","France":"FRA","Gabon":"GAB","United Kingdom":"GBR","Grenada":"GRD","Georgia":"GEO","French Guiana":"GUF","Guernsey":"GGY","Ghana":"GHA","Gibraltar":"GIB","Greenland":"GRL","Gambia":"GMB","Guinea":"GIN","Guadeloupe":"GLP","Equatorial Guinea":"GNQ","Greece":"GRC","South Georgia and the South Sandwich Islands":"SGS","Guatemala":"GTM","Guam":"GUM","Guinea-Bissau":"GNB","Guyana":"GUY","Gaza Strip":"","Hong Kong":"HKG","Heard Island and McDonald Islands":"HMD","Honduras":"HND","Croatia":"HRV","Haiti":"HTI","Hungary":"HUN","Indonesia":"IDN","Ireland":"IRL","Israel":"ISR","Isle of Man":"IMN","India":"IND","British Indian Ocean Territory":"IOT","Iraq":"IRQ","Iran":"IRN","Iceland":"ISL","Italy":"ITA","Jersey":"JEY","Jamaica":"JAM","Jordan":"JOR","Japan":"JPN","Kenya":"KEN","Kyrgyzstan":"KGZ","Cambodia":"KHM","Kiribati":"KIR","Comoros":"COM","Saint Kitts and Nevis":"KNA","North Korea":"PRK","South Korea":"KOR","Kuwait":"KWT","Cayman Islands":"CYM","Kazakhstan":"KAZ","Laos":"LAO","Lebanon":"LBN","Saint Lucia":"LCA","Liechtenstein":"LIE","Sri Lanka":"LKA","Liberia":"LBR","Lesotho":"LSO","Lithuania":"LTU","Luxembourg":"LUX","Latvia":"LVA","Libya":"LBY","Morocco":"MAR","Monaco":"MCO","Moldova":"MDA","Montenegro":"MNE","Madagascar":"MDG","Marshall Islands":"MHL","Macedonia [FYROM]":"MKD","Mali":"MLI","Myanmar [Burma]":"MMR","Mongolia":"MNG","Macau":"MAC","Northern Mariana Islands":"MNP","Martinique":"MTQ","Mauritania":"","Montserrat":"MSR","Malta":"MLT","Mauritius":"MUS","Maldives":"MDV","Malawi":"MWI","Mexico":"MEX","Malaysia":"MYS","Mozambique":"MOZ","Namibia":"NAM","New Caledonia":"NCL","Niger":"NER","Norfolk Island":"NFK","Nigeria":"NGA","Nicaragua":"NIC","Netherlands":"NLD","Norway":"NOR","Nepal":"NPL","Nauru":"NRU","Niue":"NIU","New Zealand":"NZL","Oman":"OMN","Panama":"PAN","Peru":"PER","French Polynesia":"PYF","Papua New Guinea":"PNG","Philippines":"PHL","Pakistan":"PAK","Poland":"POL","Saint Pierre and Miquelon":"SPM","Pitcairn Islands":"PCN","Puerto Rico":"PRI","Palestinian Territories":"PSE","Portugal":"PRT","Palau":"PLW","Paraguay":"PRY","Qatar":"QAT","Réunion":"REU","Romania":"ROU","Serbia":"SRB","Russia":"RUS","Rwanda":"RWA","Saudi Arabia":"SAU","Solomon Islands":"SLB","Seychelles":"SYC","Sudan":"SDN","Sweden":"SWE","Singapore":"SGP","Saint Helena":"SHN","Slovenia":"SVN","Svalbard and Jan Mayen":"SJM","Slovakia":"SVK","Sierra Leone":"SLE","San Marino":"SMR","Senegal":"SEN","Somalia":"SOM","Suriname":"SUR","São Tomé and Príncipe":"STP","El Salvador":"SLV","Syria":"SYR","Swaziland":"SWZ","Turks and Caicos Islands":"TCA","Chad":"TCD","French Southern Territories":"ATF","Togo":"TGO","Thailand":"THA","Tajikistan":"TJK","Tokelau":"TKL","Timor-Leste":"TLS","Turkmenistan":"TKM","Tunisia":"TUN","Tonga":"TON","Turkey":"TUR","Trinidad and Tobago":"TTO","Tuvalu":"TUV","Taiwan":"TWN","Tanzania":"TZA","Ukraine":"UKR","Uganda":"UGA","U.S. Minor Outlying Islands":"UMI","United States":"USA","Uruguay":"URY","Uzbekistan":"UZB","Vatican City":"VAT","Saint Vincent and the Grenadines":"VCT","Venezuela":"VEN","British Virgin Islands":"VGB","U.S. Virgin Islands":"VIR","Vietnam":"VNM","Vanuatu":"VUT","Wallis and Futuna":"WLF","Samoa":"WSM","Kosovo":"XKX","Yemen":"YEM","Mayotte":"MYT","South Africa":"ZAF","Zambia":"ZMB","Zimbabwe":"ZWE"}];

// Alpha2 and Alpha3 country codes equivalents (Alpha2=2 digits, Alpha3=3 digits)
// var JSONcountryCodes = [{"BGD":"BD","BEL":"BE","BFA":"BF","BGR":"BG","BIH":"BA","BRB":"BB","WLF":"WF","BLM":"BL","BMU":"BM","BRN":"BN","BOL":"BO","BHR":"BH","BDI":"BI","BEN":"BJ","BTN":"BT","JAM":"JM","BVT":"BV","BWA":"BW","WSM":"WS","BES":"BQ","BRA":"BR","BHS":"BS","JEY":"JE","BLR":"BY","BLZ":"BZ","RUS":"RU","RWA":"RW","SRB":"RS","TLS":"TL","REU":"RE","TKM":"TM","TJK":"TJ","ROU":"RO","TKL":"TK","GNB":"GW","GUM":"GU","GTM":"GT","SGS":"GS","GRC":"GR","GNQ":"GQ","GLP":"GP","JPN":"JP","GUY":"GY","GGY":"GG","GUF":"GF","GEO":"GE","GRD":"GD","GBR":"GB","GAB":"GA","SLV":"SV","GIN":"GN","GMB":"GM","GRL":"GL","GIB":"GI","GHA":"GH","OMN":"OM","TUN":"TN","JOR":"JO","HRV":"HR","HTI":"HT","HUN":"HU","HKG":"HK","HND":"HN","HMD":"HM","VEN":"VE","PRI":"PR","PSE":"PS","PLW":"PW","PRT":"PT","SJM":"SJ","PRY":"PY","IRQ":"IQ","PAN":"PA","PYF":"PF","PNG":"PG","PER":"PE","PAK":"PK","PHL":"PH","PCN":"PN","POL":"PL","SPM":"PM","ZMB":"ZM","ESH":"EH","EST":"EE","EGY":"EG","ZAF":"ZA","ECU":"EC","ITA":"IT","VNM":"VN","SLB":"SB","ETH":"ET","SOM":"SO","ZWE":"ZW","SAU":"SA","ESP":"ES","ERI":"ER","MNE":"ME","MDA":"MD","MDG":"MG","MAF":"MF","MAR":"MA","MCO":"MC","UZB":"UZ","MMR":"MM","MLI":"ML","MAC":"MO","MNG":"MN","MHL":"MH","MKD":"MK","MUS":"MU","MLT":"MT","MWI":"MW","MDV":"MV","MTQ":"MQ","MNP":"MP","MSR":"MS","SEÑMRT":"OR","IMN":"IM","UGA":"UG","TZA":"TZ","MYS":"MY","MEX":"MX","ISR":"IL","FRA":"FR","IOT":"IO","SHN":"SH","FIN":"FI","FJI":"FJ","FLK":"FK","FSM":"FM","FRO":"FO","NIC":"NI","NLD":"NL","NOR":"NO","NAM":"NA","VUT":"VU","NCL":"NC","NER":"NE","NFK":"NF","NGA":"NG","NZL":"NZ","NPL":"NP","NRU":"NR","NIU":"NU","COK":"CK","XKX":"XK","CIV":"CI","CHE":"CH","COL":"CO","CHN":"CN","CMR":"CM","CHL":"CL","CCK":"CC","CAN":"CA","COG":"CG","CAF":"CF","COD":"CD","CZE":"CZ","CYP":"CY","CXR":"CX","CRI":"CR","CUW":"CW","CPV":"CV","CUB":"CU","SWZ":"SZ","SYR":"SY","SXM":"SX","KGZ":"KG","KEN":"KE","SSD":"SS","SUR":"SR","KIR":"KI","KHM":"KH","KNA":"KN","COM":"KM","STP":"ST","SVK":"SK","KOR":"KR","SVN":"SI","PRK":"KP","KWT":"KW","SEN":"SN","SMR":"SM","SLE":"SL","SYC":"SC","KAZ":"KZ","CYM":"KY","SGP":"SG","SWE":"SE","SDN":"SD","DOM":"DO","DMA":"DM","DJI":"DJ","DNK":"DK","VGB":"VG","DEU":"DE","YEM":"YE","DZA":"DZ","USA":"US","URY":"UY","MYT":"YT","UMI":"UM","LBN":"LB","LCA":"LC","LAO":"LA","TUV":"TV","TWN":"TW","TTO":"TT","TUR":"TR","LKA":"LK","LIE":"LI","LVA":"LV","TON":"TO","LTU":"LT","LUX":"LU","LBR":"LR","LSO":"LS","THA":"TH","ATF":"TF","TGO":"TG","TCD":"TD","TCA":"TC","LBY":"LY","VAT":"VA","VCT":"VC","ARE":"AE","AND":"AD","ATG":"AG","AFG":"AF","AIA":"AI","VIR":"VI","ISL":"IS","IRN":"IR","ARM":"AM","ALB":"AL","AGO":"AO","ATA":"AQ","ASM":"AS","ARG":"AR","AUS":"AU","AUT":"AT","ABW":"AW","IND":"IN","ALA":"AX","AZE":"AZ","IRL":"IE","IDN":"ID","UKR":"UA","QAT":"QA","MOZ":"MZ"}];
