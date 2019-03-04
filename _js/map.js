
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
        return '<div class="hoverinfo">'  + '<h1>' + geography.properties.name + '</h1>'
                                          //
                                          // + '<div class="divTable">'
                                          // +   '<div class="divRow">'
                                          // +     '<div class="divCell textRight"><p>Cost</p></div> <!-- divCell -->'
                                          // +     '<div class="divCell"><p>' + JSONgame[0].currency + defThousandsDelimiter(data.cost) + '</p></div> <!-- divCell -->'
                                          // +   '</div> <!-- divRow -->'
                                          // +   '<div class="divRow">'
                                          // +     '<div class="divCell textRight"><p>Distance</p></div> <!-- divCell -->'
                                          // +     '<div class="divCell"><p>' + defThousandsDelimiter(travCalcDistance(JSONgame[0].homeLatitude, JSONgame[0].homeLongitude, data.latitude, data.longitude, JSONgame[0].measure)) + ' ' + JSONgame[0].measure + '</p></div> <!-- divCell -->'
                                          // +   '</div> <!-- divRow -->'
                                          // +   '<div class="divRow">'
                                          // +     '<div class="divCell textRight"><p>Happiness</p></div> <!-- divCell -->'
                                          // +     '<div class="divCell"><p>' + data.happiness + '</p></div> <!-- divCell -->'
                                          // +   '</div> <!-- divRow -->'
                                          // +   '<div class="divRow">'
                                          // +     '<div class="divCell textRight"><p>Days</p></div> <!-- divCell -->'
                                          // +     '<div class="divCell"><p>' + data.days + '</p></div> <!-- divCell -->'
                                          // +   '</div> <!-- divRow -->'
                                          // + '</div> <!-- divTable -->'

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
  //check if need to convert Alpha3 country codes to Alpha2
  if (strCountryCode.length == 2) //TODO: standardise Alpha2 and Alpha3
    strCountryCode = mapGetCountryCodeAlpha3Code(JSONcountryCodes, strCountryCode); //datamaps uses Alpha3
  arrMapData[strCountryCode] = JSONconfig[0].mapCountryVisited; //set colour
  map.updateChoropleth(arrMapData);
} //function






//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

//TODO: standardise Alpha2 and Alpha3
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

function mapGetCountryName(JSONtoUse, strCountryCode) {
  //converts Alpha3 country codes to Alpha2
  var strTemp = "";
  Object.keys(JSONtoUse[0]).forEach(function(key) {
  if (JSONtoUse[0][key] == strCountryCode)
      strTemp = key;
  });
  return strTemp;
} //function

//Alpha2 and Alpha3 country codes equivalents (Alpha2=2 digits, Alpha3=3 digits)
var JSONcountryCodes = [{"BGD":"BD","BEL":"BE","BFA":"BF","BGR":"BG","BIH":"BA","BRB":"BB","WLF":"WF","BLM":"BL","BMU":"BM","BRN":"BN","BOL":"BO","BHR":"BH","BDI":"BI","BEN":"BJ","BTN":"BT","JAM":"JM","BVT":"BV","BWA":"BW","WSM":"WS","BES":"BQ","BRA":"BR","BHS":"BS","JEY":"JE","BLR":"BY","BLZ":"BZ","RUS":"RU","RWA":"RW","SRB":"RS","TLS":"TL","REU":"RE","TKM":"TM","TJK":"TJ","ROU":"RO","TKL":"TK","GNB":"GW","GUM":"GU","GTM":"GT","SGS":"GS","GRC":"GR","GNQ":"GQ","GLP":"GP","JPN":"JP","GUY":"GY","GGY":"GG","GUF":"GF","GEO":"GE","GRD":"GD","GBR":"GB","GAB":"GA","SLV":"SV","GIN":"GN","GMB":"GM","GRL":"GL","GIB":"GI","GHA":"GH","OMN":"OM","TUN":"TN","JOR":"JO","HRV":"HR","HTI":"HT","HUN":"HU","HKG":"HK","HND":"HN","HMD":"HM","VEN":"VE","PRI":"PR","PSE":"PS","PLW":"PW","PRT":"PT","SJM":"SJ","PRY":"PY","IRQ":"IQ","PAN":"PA","PYF":"PF","PNG":"PG","PER":"PE","PAK":"PK","PHL":"PH","PCN":"PN","POL":"PL","SPM":"PM","ZMB":"ZM","ESH":"EH","EST":"EE","EGY":"EG","ZAF":"ZA","ECU":"EC","ITA":"IT","VNM":"VN","SLB":"SB","ETH":"ET","SOM":"SO","ZWE":"ZW","SAU":"SA","ESP":"ES","ERI":"ER","MNE":"ME","MDA":"MD","MDG":"MG","MAF":"MF","MAR":"MA","MCO":"MC","UZB":"UZ","MMR":"MM","MLI":"ML","MAC":"MO","MNG":"MN","MHL":"MH","MKD":"MK","MUS":"MU","MLT":"MT","MWI":"MW","MDV":"MV","MTQ":"MQ","MNP":"MP","MSR":"MS","SEÑMRT":"OR","IMN":"IM","UGA":"UG","TZA":"TZ","MYS":"MY","MEX":"MX","ISR":"IL","FRA":"FR","IOT":"IO","SHN":"SH","FIN":"FI","FJI":"FJ","FLK":"FK","FSM":"FM","FRO":"FO","NIC":"NI","NLD":"NL","NOR":"NO","NAM":"NA","VUT":"VU","NCL":"NC","NER":"NE","NFK":"NF","NGA":"NG","NZL":"NZ","NPL":"NP","NRU":"NR","NIU":"NU","COK":"CK","XKX":"XK","CIV":"CI","CHE":"CH","COL":"CO","CHN":"CN","CMR":"CM","CHL":"CL","CCK":"CC","CAN":"CA","COG":"CG","CAF":"CF","COD":"CD","CZE":"CZ","CYP":"CY","CXR":"CX","CRI":"CR","CUW":"CW","CPV":"CV","CUB":"CU","SWZ":"SZ","SYR":"SY","SXM":"SX","KGZ":"KG","KEN":"KE","SSD":"SS","SUR":"SR","KIR":"KI","KHM":"KH","KNA":"KN","COM":"KM","STP":"ST","SVK":"SK","KOR":"KR","SVN":"SI","PRK":"KP","KWT":"KW","SEN":"SN","SMR":"SM","SLE":"SL","SYC":"SC","KAZ":"KZ","CYM":"KY","SGP":"SG","SWE":"SE","SDN":"SD","DOM":"DO","DMA":"DM","DJI":"DJ","DNK":"DK","VGB":"VG","DEU":"DE","YEM":"YE","DZA":"DZ","USA":"US","URY":"UY","MYT":"YT","UMI":"UM","LBN":"LB","LCA":"LC","LAO":"LA","TUV":"TV","TWN":"TW","TTO":"TT","TUR":"TR","LKA":"LK","LIE":"LI","LVA":"LV","TON":"TO","LTU":"LT","LUX":"LU","LBR":"LR","LSO":"LS","THA":"TH","ATF":"TF","TGO":"TG","TCD":"TD","TCA":"TC","LBY":"LY","VAT":"VA","VCT":"VC","ARE":"AE","AND":"AD","ATG":"AG","AFG":"AF","AIA":"AI","VIR":"VI","ISL":"IS","IRN":"IR","ARM":"AM","ALB":"AL","AGO":"AO","ATA":"AQ","ASM":"AS","ARG":"AR","AUS":"AU","AUT":"AT","ABW":"AW","IND":"IN","ALA":"AX","AZE":"AZ","IRL":"IE","IDN":"ID","UKR":"UA","QAT":"QA","MOZ":"MZ"}];

var JSONcountryNames =
[{"Andorra":"AD","United Arab Emirates":"AE","Afghanistan":"AF","Antigua and Barbuda":"AG","Anguilla":"AI","Albania":"AL","Armenia":"AM","Netherlands Antilles":"AN","Angola":"AO","Antarctica":"AQ","Argentina":"AR","American Samoa":"AS","Austria":"AT","Australia":"AU","Aruba":"AW","Azerbaijan":"AZ","Bosnia and Herzegovina":"BA","Barbados":"BB","Bangladesh":"BD","Belgium":"BE","Burkina Faso":"BF","Bulgaria":"BG","Bahrain":"BH","Burundi":"BI","Benin":"BJ","Bermuda":"BM","Brunei":"BN","Bolivia":"BO","Brazil":"BR","Bahamas":"BS","Bhutan":"BT","Bouvet Island":"BV","Botswana":"BW","Belarus":"BY","Belize":"BZ","Canada":"CA","Cocos [Keeling] Islands":"CC","Congo [DRC]":"CD","Central African Republic":"CF","Congo [Republic]":"CG","Switzerland":"CH","Côte d'Ivoire":"CI","Cook Islands":"CK","Chile":"CL","Cameroon":"CM","China":"CN","Colombia":"CO","Costa Rica":"CR","Cuba":"CU","Cape Verde":"CV","Christmas Island":"CX","Cyprus":"CY","Czech Republic":"CZ","Germany":"DE","Djibouti":"DJ","Denmark":"DK","Dominica":"DM","Dominican Republic":"DO","Algeria":"DZ","Ecuador":"EC","Estonia":"EE","Egypt":"EG","Western Sahara":"EH","Eritrea":"ER","Spain":"ES","Ethiopia":"ET","Finland":"FI","Fiji":"FJ","Falkland Islands [Islas Malvinas]":"FK","Micronesia":"FM","Faroe Islands":"FO","France":"FR","Gabon":"GA","United Kingdom":"GB","Grenada":"GD","Georgia":"GE","French Guiana":"GF","Guernsey":"GG","Ghana":"GH","Gibraltar":"GI","Greenland":"GL","Gambia":"GM","Guinea":"GN","Guadeloupe":"GP","Equatorial Guinea":"GQ","Greece":"GR","South Georgia and the South Sandwich Islands":"GS","Guatemala":"GT","Guam":"GU","Guinea-Bissau":"GW","Guyana":"GY","Gaza Strip":"GZ","Hong Kong":"HK","Heard Island and McDonald Islands":"HM","Honduras":"HN","Croatia":"HR","Haiti":"HT","Hungary":"HU","Indonesia":"ID","Ireland":"IE","Israel":"IL","Isle of Man":"IM","India":"IN","British Indian Ocean Territory":"IO","Iraq":"IQ","Iran":"IR","Iceland":"IS","Italy":"IT","Jersey":"JE","Jamaica":"JM","Jordan":"JO","Japan":"JP","Kenya":"KE","Kyrgyzstan":"KG","Cambodia":"KH","Kiribati":"KI","Comoros":"KM","Saint Kitts and Nevis":"KN","North Korea":"KP","South Korea":"KR","Kuwait":"KW","Cayman Islands":"KY","Kazakhstan":"KZ","Laos":"LA","Lebanon":"LB","Saint Lucia":"LC","Liechtenstein":"LI","Sri Lanka":"LK","Liberia":"LR","Lesotho":"LS","Lithuania":"LT","Luxembourg":"LU","Latvia":"LV","Libya":"LY","Morocco":"MA","Monaco":"MC","Moldova":"MD","Montenegro":"ME","Madagascar":"MG","Marshall Islands":"MH","Macedonia [FYROM]":"MK","Mali":"ML","Myanmar [Burma]":"MM","Mongolia":"MN","Macau":"MO","Northern Mariana Islands":"MP","Martinique":"MQ","Mauritania":"MR","Montserrat":"MS","Malta":"MT","Mauritius":"MU","Maldives":"MV","Malawi":"MW","Mexico":"MX","Malaysia":"MY","Mozambique":"MZ","Namibia":"NA","New Caledonia":"NC","Niger":"NE","Norfolk Island":"NF","Nigeria":"NG","Nicaragua":"NI","Netherlands":"NL","Norway":"NO","Nepal":"NP","Nauru":"NR","Niue":"NU","New Zealand":"NZ","Oman":"OM","Panama":"PA","Peru":"PE","French Polynesia":"PF","Papua New Guinea":"PG","Philippines":"PH","Pakistan":"PK","Poland":"PL","Saint Pierre and Miquelon":"PM","Pitcairn Islands":"PN","Puerto Rico":"PR","Palestinian Territories":"PS","Portugal":"PT","Palau":"PW","Paraguay":"PY","Qatar":"QA","Réunion":"RE","Romania":"RO","Serbia":"RS","Russia":"RU","Rwanda":"RW","Saudi Arabia":"SA","Solomon Islands":"SB","Seychelles":"SC","Sudan":"SD","Sweden":"SE","Singapore":"SG","Saint Helena":"SH","Slovenia":"SI","Svalbard and Jan Mayen":"SJ","Slovakia":"SK","Sierra Leone":"SL","San Marino":"SM","Senegal":"SN","Somalia":"SO","Suriname":"SR","São Tomé and Príncipe":"ST","El Salvador":"SV","Syria":"SY","Swaziland":"SZ","Turks and Caicos Islands":"TC","Chad":"TD","French Southern Territories":"TF","Togo":"TG","Thailand":"TH","Tajikistan":"TJ","Tokelau":"TK","Timor-Leste":"TL","Turkmenistan":"TM","Tunisia":"TN","Tonga":"TO","Turkey":"TR","Trinidad and Tobago":"TT","Tuvalu":"TV","Taiwan":"TW","Tanzania":"TZ","Ukraine":"UA","Uganda":"UG","U.S. Minor Outlying Islands":"UM","United States":"US","Uruguay":"UY","Uzbekistan":"UZ","Vatican City":"VA","Saint Vincent and the Grenadines":"VC","Venezuela":"VE","British Virgin Islands":"VG","U.S. Virgin Islands":"VI","Vietnam":"VN","Vanuatu":"VU","Wallis and Futuna":"WF","Samoa":"WS","Kosovo":"XK","Yemen":"YE","Mayotte":"YT","South Africa":"ZA","Zambia":"ZM","Zimbabwe":"ZW"}];

// [{"AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AN":"Netherlands Antilles","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos [Keeling] Islands","CD":"Congo [DRC]","CF":"Central African Republic","CG":"Congo [Republic]","CH":"Switzerland","CI":"Côte d'Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CX":"Christmas Island","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands [Islas Malvinas]","FM":"Micronesia","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","GZ":"Gaza Strip","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MG":"Madagascar","MH":"Marshall Islands","MK":"Macedonia [FYROM]","ML":"Mali","MM":"Myanmar [Burma]","MN":"Mongolia","MO":"Macau","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn Islands","PR":"Puerto Rico","PS":"Palestinian Territories","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","ST":"São Tomé and Príncipe","SV":"El Salvador","SY":"Syria","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"U.S. Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatican City","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"}];
