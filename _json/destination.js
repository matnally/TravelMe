
var JSONdestination = []; //main JSON variable to be used

/////////////////////////////////////////
/////////////////////////////////////////
var JSONcapitals = [
  {
  	"name": "King Edward Point",
  	"description": "South Georgia and the South Sandwich Islands",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "SGS",
  	"latitude": -54.283333,
  	"longitude": -36.5
  }, {
  	"name": "Port-aux-Francais",
  	"description": "French Southern Territories",
  	"cost": 614,
  	"happiness": 86,
  	"days": 9,
  	"country": "ATF",
  	"latitude": -49.35,
  	"longitude": 70.216667
  }, {
  	"name": "Jerusalem",
  	"description": "Palestinian Territories",
  	"cost": 366,
  	"happiness": 51,
  	"days": 5,
  	"country": "PSE",
  	"latitude": 31.76666667,
  	"longitude": 35.233333
  }, {
  	"name": "Yaren",
  	"description": "Nauru",
  	"cost": 1326,
  	"happiness": 186,
  	"days": 19,
  	"country": "NRU",
  	"latitude": -0.5477,
  	"longitude": 166.920867
  }, {
  	"name": "Atafu",
  	"description": "Tokelau",
  	"cost": 1332,
  	"happiness": 187,
  	"days": 19,
  	"country": "TKL",
  	"latitude": -9.166667,
  	"longitude": -171.833333
  }, {
  	"name": "El-AaiÃºn",
  	"description": "Western Sahara",
  	"cost": 238,
  	"happiness": 33,
  	"days": 3,
  	"country": "ESH",
  	"latitude": 27.153611,
  	"longitude": -13.203333
  }, {
  	"name": "Kabul",
  	"description": "Afghanistan",
  	"cost": 580,
  	"happiness": 81,
  	"days": 8,
  	"country": "AFG",
  	"latitude": 34.51666667,
  	"longitude": 69.183333
  }, {
  	"name": "Tirana",
  	"description": "Albania",
  	"cost": 358,
  	"happiness": 50,
  	"days": 5,
  	"country": "ALB",
  	"latitude": 41.31666667,
  	"longitude": 19.816667
  }, {
  	"name": "Algiers",
  	"description": "Algeria",
  	"cost": 293,
  	"happiness": 41,
  	"days": 4,
  	"country": "DZA",
  	"latitude": 36.75,
  	"longitude": 3.05
  }, {
  	"name": "Pago Pago",
  	"description": "American Samoa",
  	"cost": 1295,
  	"happiness": 181,
  	"days": 18,
  	"country": "ASM",
  	"latitude": -14.26666667,
  	"longitude": -170.7
  }, {
  	"name": "Andorra la Vella",
  	"description": "Andorra",
  	"cost": 338,
  	"happiness": 47,
  	"days": 5,
  	"country": "AND",
  	"latitude": 42.5,
  	"longitude": 1.516667
  }, {
  	"name": "Luanda",
  	"description": "Angola",
  	"cost": 126,
  	"happiness": 18,
  	"days": 2,
  	"country": "AGO",
  	"latitude": -8.833333333,
  	"longitude": 13.216667
  }, {
  	"name": "The Valley",
  	"description": "Anguilla",
  	"cost": 512,
  	"happiness": 72,
  	"days": 7,
  	"country": "AIA",
  	"latitude": 18.21666667,
  	"longitude": -63.05
  }, {
  	"name": "Saint John's",
  	"description": "Antigua and Barbuda",
  	"cost": 502,
  	"happiness": 70,
  	"days": 7,
  	"country": "ATG",
  	"latitude": 17.11666667,
  	"longitude": -61.85
  }, {
  	"name": "Buenos Aires",
  	"description": "Argentina",
  	"cost": 514,
  	"happiness": 72,
  	"days": 7,
  	"country": "ARG",
  	"latitude": -34.58333333,
  	"longitude": -58.666667
  }, {
  	"name": "Yerevan",
  	"description": "Armenia",
  	"cost": 453,
  	"happiness": 63,
  	"days": 6,
  	"country": "ARM",
  	"latitude": 40.16666667,
  	"longitude": 44.5
  }, {
  	"name": "Oranjestad",
  	"description": "Aruba",
  	"cost": 560,
  	"happiness": 78,
  	"days": 8,
  	"country": "ABW",
  	"latitude": 12.51666667,
  	"longitude": -70.033333
  }, {
  	"name": "Canberra",
  	"description": "Australia",
  	"cost": 1068,
  	"happiness": 150,
  	"days": 15,
  	"country": "AUS",
  	"latitude": -35.26666667,
  	"longitude": 149.133333
  }, {
  	"name": "Vienna",
  	"description": "Austria",
  	"cost": 399,
  	"happiness": 56,
  	"days": 6,
  	"country": "AUT",
  	"latitude": 48.2,
  	"longitude": 16.366667
  }, {
  	"name": "Baku",
  	"description": "Azerbaijan",
  	"cost": 481,
  	"happiness": 67,
  	"days": 7,
  	"country": "AZE",
  	"latitude": 40.38333333,
  	"longitude": 49.866667
  }, {
  	"name": "Nassau",
  	"description": "Bahamas",
  	"cost": 624,
  	"happiness": 87,
  	"days": 9,
  	"country": "BHS",
  	"latitude": 25.08333333,
  	"longitude": -77.35
  }, {
  	"name": "Manama",
  	"description": "Bahrain",
  	"cost": 439,
  	"happiness": 61,
  	"days": 6,
  	"country": "BHR",
  	"latitude": 26.23333333,
  	"longitude": 50.566667
  }, {
  	"name": "Dhaka",
  	"description": "Bangladesh",
  	"cost": 718,
  	"happiness": 100,
  	"days": 10,
  	"country": "BGD",
  	"latitude": 23.71666667,
  	"longitude": 90.4
  }, {
  	"name": "Bridgetown",
  	"description": "Barbados",
  	"cost": 480,
  	"happiness": 67,
  	"days": 7,
  	"country": "BRB",
  	"latitude": 13.1,
  	"longitude": -59.616667
  }, {
  	"name": "Minsk",
  	"description": "Belarus",
  	"cost": 465,
  	"happiness": 65,
  	"days": 7,
  	"country": "BLR",
  	"latitude": 53.9,
  	"longitude": 27.566667
  }, {
  	"name": "Brussels",
  	"description": "Belgium",
  	"cost": 405,
  	"happiness": 57,
  	"days": 6,
  	"country": "BEL",
  	"latitude": 50.83333333,
  	"longitude": 4.333333
  }, {
  	"name": "Belmopan",
  	"description": "Belize",
  	"cost": 706,
  	"happiness": 99,
  	"days": 10,
  	"country": "BLZ",
  	"latitude": 17.25,
  	"longitude": -88.766667
  }, {
  	"name": "Porto-Novo",
  	"description": "Benin",
  	"cost": 56,
  	"happiness": 8,
  	"days": 1,
  	"country": "BEN",
  	"latitude": 6.483333333,
  	"longitude": 2.616667
  }, {
  	"name": "Hamilton",
  	"description": "Bermuda",
  	"cost": 547,
  	"happiness": 77,
  	"days": 8,
  	"country": "BMU",
  	"latitude": 32.28333333,
  	"longitude": -64.783333
  }, {
  	"name": "Thimphu",
  	"description": "Bhutan",
  	"cost": 712,
  	"happiness": 100,
  	"days": 10,
  	"country": "BTN",
  	"latitude": 27.46666667,
  	"longitude": 89.633333
  }, {
  	"name": "La Paz",
  	"description": "Bolivia",
  	"cost": 549,
  	"happiness": 77,
  	"days": 8,
  	"country": "BOL",
  	"latitude": -16.5,
  	"longitude": -68.15
  }, {
  	"name": "Sarajevo",
  	"description": "Bosnia and Herzegovina",
  	"cost": 372,
  	"happiness": 52,
  	"days": 5,
  	"country": "BIH",
  	"latitude": 43.86666667,
  	"longitude": 18.416667
  }, {
  	"name": "Gaborone",
  	"description": "Botswana",
  	"cost": 279,
  	"happiness": 39,
  	"days": 4,
  	"country": "BWA",
  	"latitude": -24.63333333,
  	"longitude": 25.9
  }, {
  	"name": "Brasilia",
  	"description": "Brazil",
  	"cost": 396,
  	"happiness": 55,
  	"days": 6,
  	"country": "BRA",
  	"latitude": -15.78333333,
  	"longitude": -47.916667
  }, {
  	"name": "Road Town",
  	"description": "British Virgin Islands",
  	"cost": 524,
  	"happiness": 73,
  	"days": 7,
  	"country": "VGB",
  	"latitude": 18.41666667,
  	"longitude": -64.616667
  }, {
  	"name": "Bandar Seri Begawan",
  	"description": "Brunei",
  	"cost": 912,
  	"happiness": 128,
  	"days": 13,
  	"country": "BRN",
  	"latitude": 4.883333333,
  	"longitude": 114.933333
  }, {
  	"name": "Sofia",
  	"description": "Bulgaria",
  	"cost": 378,
  	"happiness": 53,
  	"days": 5,
  	"country": "BGR",
  	"latitude": 42.68333333,
  	"longitude": 23.316667
  }, {
  	"name": "Ouagadougou",
  	"description": "Burkina Faso",
  	"cost": 99,
  	"happiness": 14,
  	"days": 1,
  	"country": "BFA",
  	"latitude": 12.36666667,
  	"longitude": -1.516667
  }, {
  	"name": "Rangoon",
  	"description": "Myanmar [Burma]",
  	"cost": 762,
  	"happiness": 107,
  	"days": 11,
  	"country": "MMR",
  	"latitude": 16.8,
  	"longitude": 96.15
  }, {
  	"name": "Bujumbura",
  	"description": "Burundi",
  	"cost": 235,
  	"happiness": 33,
  	"days": 3,
  	"country": "BDI",
  	"latitude": -3.366666667,
  	"longitude": 29.35
  }, {
  	"name": "Phnom Penh",
  	"description": "Cambodia",
  	"cost": 831,
  	"happiness": 116,
  	"days": 12,
  	"country": "KHM",
  	"latitude": 11.55,
  	"longitude": 104.916667
  }, {
  	"name": "Yaounde",
  	"description": "Cameroon",
  	"cost": 96,
  	"happiness": 14,
  	"days": 1,
  	"country": "CMR",
  	"latitude": 3.866666667,
  	"longitude": 11.516667
  }, {
  	"name": "Ottawa",
  	"description": "Canada",
  	"cost": 636,
  	"happiness": 89,
  	"days": 9,
  	"country": "CAN",
  	"latitude": 45.41666667,
  	"longitude": -75.7
  }, {
  	"name": "Praia",
  	"description": "Cape Verde",
  	"cost": 219,
  	"happiness": 31,
  	"days": 3,
  	"country": "CPV",
  	"latitude": 14.91666667,
  	"longitude": -23.516667
  }, {
  	"name": "George Town",
  	"description": "Cayman Islands",
  	"cost": 650,
  	"happiness": 91,
  	"days": 9,
  	"country": "CYM",
  	"latitude": 19.3,
  	"longitude": -81.383333
  }, {
  	"name": "Bangui",
  	"description": "Central African Republic",
  	"cost": 152,
  	"happiness": 21,
  	"days": 2,
  	"country": "CAF",
  	"latitude": 4.366666667,
  	"longitude": 18.583333
  }, {
  	"name": "N'Djamena",
  	"description": "Chad",
  	"cost": 153,
  	"happiness": 21,
  	"days": 2,
  	"country": "TCD",
  	"latitude": 12.1,
  	"longitude": 15.033333
  }, {
  	"name": "Santiago",
  	"description": "Chile",
  	"cost": 588,
  	"happiness": 82,
  	"days": 8,
  	"country": "CHL",
  	"latitude": -33.45,
  	"longitude": -70.666667
  }, {
  	"name": "Beijing",
  	"description": "China",
  	"cost": 873,
  	"happiness": 122,
  	"days": 12,
  	"country": "CHN",
  	"latitude": 39.91666667,
  	"longitude": 116.383333
  }, {
  	"name": "The Settlement",
  	"description": "Christmas Island",
  	"cost": 838,
  	"happiness": 117,
  	"days": 12,
  	"country": "CXR",
  	"latitude": -10.41666667,
  	"longitude": 105.716667
  }, {
  	"name": "West Island",
  	"description": "Cocos [Keeling] Islands",
  	"cost": 768,
  	"happiness": 108,
  	"days": 11,
  	"country": "CCK",
  	"latitude": -12.16666667,
  	"longitude": 96.833333
  }, {
  	"name": "Bogota",
  	"description": "Colombia",
  	"cost": 589,
  	"happiness": 82,
  	"days": 8,
  	"country": "COL",
  	"latitude": 4.6,
  	"longitude": -74.083333
  }, {
  	"name": "Moroni",
  	"description": "Comoros",
  	"cost": 353,
  	"happiness": 49,
  	"days": 5,
  	"country": "COM",
  	"latitude": -11.7,
  	"longitude": 43.233333
  }, {
  	"name": "Kinshasa",
  	"description": "Congo [DRC]",
  	"cost": 126,
  	"happiness": 18,
  	"days": 2,
  	"country": "COD",
  	"latitude": -4.316666667,
  	"longitude": 15.3
  }, {
  	"name": "Brazzaville",
  	"description": "Congo [Republic]",
  	"cost": 126,
  	"happiness": 18,
  	"days": 2,
  	"country": "COG",
  	"latitude": -4.25,
  	"longitude": 15.283333
  }, {
  	"name": "Avarua",
  	"description": "Cook Islands",
  	"cost": 1200,
  	"happiness": 168,
  	"days": 17,
  	"country": "COK",
  	"latitude": -21.2,
  	"longitude": -159.766667
  }, {
  	"name": "San Jose",
  	"description": "Costa Rica",
  	"cost": 669,
  	"happiness": 94,
  	"days": 9,
  	"country": "CRI",
  	"latitude": 9.933333333,
  	"longitude": -84.083333
  }, {
  	"name": "Yamoussoukro",
  	"description": "Côte d'Ivoire",
  	"cost": 68,
  	"happiness": 10,
  	"days": 1,
  	"country": "CIV",
  	"latitude": 6.816666667,
  	"longitude": -5.266667
  }, {
  	"name": "Zagreb",
  	"description": "Croatia",
  	"cost": 381,
  	"happiness": 53,
  	"days": 5,
  	"country": "HRV",
  	"latitude": 45.8,
  	"longitude": 16
  }, {
  	"name": "Havana",
  	"description": "Cuba",
  	"cost": 659,
  	"happiness": 92,
  	"days": 9,
  	"country": "CUB",
  	"latitude": 23.11666667,
  	"longitude": -82.35
  }, {
  	"name": "Nicosia",
  	"description": "Cyprus",
  	"cost": 373,
  	"happiness": 52,
  	"days": 5,
  	"country": "CYP",
  	"latitude": 35.16666667,
  	"longitude": 33.366667
  }, {
  	"name": "Prague",
  	"description": "Czech Republic",
  	"cost": 410,
  	"happiness": 57,
  	"days": 6,
  	"country": "CZE",
  	"latitude": 50.08333333,
  	"longitude": 14.466667
  }, {
  	"name": "Copenhagen",
  	"description": "Denmark",
  	"cost": 450,
  	"happiness": 63,
  	"days": 6,
  	"country": "DNK",
  	"latitude": 55.66666667,
  	"longitude": 12.583333
  }, {
  	"name": "Djibouti",
  	"description": "Djibouti",
  	"cost": 353,
  	"happiness": 49,
  	"days": 5,
  	"country": "DJI",
  	"latitude": 11.58333333,
  	"longitude": 43.15
  }, {
  	"name": "Roseau",
  	"description": "Dominica",
  	"cost": 496,
  	"happiness": 70,
  	"days": 7,
  	"country": "DMA",
  	"latitude": 15.3,
  	"longitude": -61.4
  }, {
  	"name": "Santo Domingo",
  	"description": "Dominican Republic",
  	"cost": 564,
  	"happiness": 79,
  	"days": 8,
  	"country": "DOM",
  	"latitude": 18.46666667,
  	"longitude": -69.9
  }, {
  	"name": "Quito",
  	"description": "Ecuador",
  	"cost": 624,
  	"happiness": 87,
  	"days": 9,
  	"country": "ECU",
  	"latitude": -0.216666667,
  	"longitude": -78.5
  }, {
  	"name": "Cairo",
  	"description": "Egypt",
  	"cost": 336,
  	"happiness": 47,
  	"days": 5,
  	"country": "EGY",
  	"latitude": 30.05,
  	"longitude": 31.25
  }, {
  	"name": "San Salvador",
  	"description": "El Salvador",
  	"cost": 709,
  	"happiness": 99,
  	"days": 10,
  	"country": "SLV",
  	"latitude": 13.7,
  	"longitude": -89.2
  }, {
  	"name": "Malabo",
  	"description": "Equatorial Guinea",
  	"cost": 76,
  	"happiness": 11,
  	"days": 1,
  	"country": "GNQ",
  	"latitude": 3.75,
  	"longitude": 8.783333
  }, {
  	"name": "Asmara",
  	"description": "Eritrea",
  	"cost": 329,
  	"happiness": 46,
  	"days": 5,
  	"country": "ERI",
  	"latitude": 15.33333333,
  	"longitude": 38.933333
  }, {
  	"name": "Tallinn",
  	"description": "Estonia",
  	"cost": 496,
  	"happiness": 69,
  	"days": 7,
  	"country": "EST",
  	"latitude": 59.43333333,
  	"longitude": 24.716667
  }, {
  	"name": "Addis Ababa",
  	"description": "Ethiopia",
  	"cost": 314,
  	"happiness": 44,
  	"days": 4,
  	"country": "ETH",
  	"latitude": 9.033333333,
  	"longitude": 38.7
  }, {
  	"name": "Stanley",
  	"description": "Falkland Islands [Islas Malvinas]",
  	"cost": 562,
  	"happiness": 79,
  	"days": 8,
  	"country": "FLK",
  	"latitude": -51.7,
  	"longitude": -57.85
  }, {
  	"name": "Torshavn",
  	"description": "Faroe Islands",
  	"cost": 494,
  	"happiness": 69,
  	"days": 7,
  	"country": "FRO",
  	"latitude": 62,
  	"longitude": -6.766667
  }, {
  	"name": "Suva",
  	"description": "Fiji",
  	"cost": 1285,
  	"happiness": 180,
  	"days": 18,
  	"country": "FJI",
  	"latitude": -18.13333333,
  	"longitude": 178.416667
  }, {
  	"name": "Helsinki",
  	"description": "Finland",
  	"cost": 502,
  	"happiness": 70,
  	"days": 7,
  	"country": "FIN",
  	"latitude": 60.16666667,
  	"longitude": 24.933333
  }, {
  	"name": "Paris",
  	"description": "France",
  	"cost": 388,
  	"happiness": 54,
  	"days": 5,
  	"country": "FRA",
  	"latitude": 48.86666667,
  	"longitude": 2.333333
  }, {
  	"name": "Papeete",
  	"description": "French Polynesia",
  	"cost": 1154,
  	"happiness": 162,
  	"days": 16,
  	"country": "PYF",
  	"latitude": -17.53333333,
  	"longitude": -149.566667
  }, {
  	"name": "Libreville",
  	"description": "Gabon",
  	"cost": 75,
  	"happiness": 11,
  	"days": 1,
  	"country": "GAB",
  	"latitude": 0.383333333,
  	"longitude": 9.45
  }, {
  	"name": "Banjul",
  	"description": "Gambia",
  	"cost": 169,
  	"happiness": 24,
  	"days": 2,
  	"country": "GMB",
  	"latitude": 13.45,
  	"longitude": -16.566667
  }, {
  	"name": "Tbilisi",
  	"description": "Georgia",
  	"cost": 461,
  	"happiness": 65,
  	"days": 6,
  	"country": "GEO",
  	"latitude": 41.68333333,
  	"longitude": 44.833333
  }, {
  	"name": "Berlin",
  	"description": "Germany",
  	"cost": 427,
  	"happiness": 60,
  	"days": 6,
  	"country": "DEU",
  	"latitude": 52.51666667,
  	"longitude": 13.4
  }, {
  	"name": "Accra",
  	"description": "Ghana",
  	"cost": 44,
  	"happiness": 6,
  	"days": 1,
  	"country": "GHA",
  	"latitude": 5.55,
  	"longitude": -0.216667
  }, {
  	"name": "Gibraltar",
  	"description": "Gibraltar",
  	"cost": 290,
  	"happiness": 41,
  	"days": 4,
  	"country": "GIB",
  	"latitude": 36.13333333,
  	"longitude": -5.35
  }, {
  	"name": "Athens",
  	"description": "Greece",
  	"cost": 348,
  	"happiness": 49,
  	"days": 5,
  	"country": "GRC",
  	"latitude": 37.98333333,
  	"longitude": 23.733333
  }, {
  	"name": "Nuuk",
  	"description": "Greenland",
  	"cost": 591,
  	"happiness": 83,
  	"days": 8,
  	"country": "GRL",
  	"latitude": 64.18333333,
  	"longitude": -51.75
  }, {
  	"name": "Saint George's",
  	"description": "Grenada",
  	"cost": 496,
  	"happiness": 69,
  	"days": 7,
  	"country": "GRD",
  	"latitude": 12.05,
  	"longitude": -61.75
  }, {
  	"name": "Hagatna",
  	"description": "Guam",
  	"cost": 1132,
  	"happiness": 159,
  	"days": 16,
  	"country": "GUM",
  	"latitude": 13.46666667,
  	"longitude": 144.733333
  }, {
  	"name": "Guatemala City",
  	"description": "Guatemala",
  	"cost": 719,
  	"happiness": 101,
  	"days": 10,
  	"country": "GTM",
  	"latitude": 14.61666667,
  	"longitude": -90.516667
  }, {
  	"name": "Saint Peter Port",
  	"description": "Guernsey",
  	"cost": 393,
  	"happiness": 55,
  	"days": 6,
  	"country": "GGY",
  	"latitude": 49.45,
  	"longitude": -2.533333
  }, {
  	"name": "Conakry",
  	"description": "Guinea",
  	"cost": 132,
  	"happiness": 18,
  	"days": 2,
  	"country": "GIN",
  	"latitude": 9.5,
  	"longitude": -13.7
  }, {
  	"name": "Bissau",
  	"description": "Guinea-Bissau",
  	"cost": 155,
  	"happiness": 22,
  	"days": 2,
  	"country": "GNB",
  	"latitude": 11.85,
  	"longitude": -15.583333
  }, {
  	"name": "Georgetown",
  	"description": "Guyana",
  	"cost": 464,
  	"happiness": 65,
  	"days": 6,
  	"country": "GUY",
  	"latitude": 6.8,
  	"longitude": -58.15
  }, {
  	"name": "Port-au-Prince",
  	"description": "Haiti",
  	"cost": 582,
  	"happiness": 81,
  	"days": 8,
  	"country": "HTI",
  	"latitude": 18.53333333,
  	"longitude": -72.333333
  }, {
  	"name": "Vatican City",
  	"description": "Vatican City",
  	"cost": 345,
  	"happiness": 48,
  	"days": 5,
  	"country": "VAT",
  	"latitude": 41.9,
  	"longitude": 12.45
  }, {
  	"name": "Tegucigalpa",
  	"description": "Honduras",
  	"cost": 693,
  	"happiness": 97,
  	"days": 10,
  	"country": "HND",
  	"latitude": 14.1,
  	"longitude": -87.216667
  }, {
  	"name": "Budapest",
  	"description": "Hungary",
  	"cost": 400,
  	"happiness": 56,
  	"days": 6,
  	"country": "HUN",
  	"latitude": 47.5,
  	"longitude": 19.083333
  }, {
  	"name": "Reykjavik",
  	"description": "Iceland",
  	"cost": 525,
  	"happiness": 74,
  	"days": 7,
  	"country": "ISL",
  	"latitude": 64.15,
  	"longitude": -21.95
  }, {
  	"name": "New Delhi",
  	"description": "India",
  	"cost": 626,
  	"happiness": 88,
  	"days": 9,
  	"country": "IND",
  	"latitude": 28.6,
  	"longitude": 77.2
  }, {
  	"name": "Jakarta",
  	"description": "Indonesia",
  	"cost": 848,
  	"happiness": 119,
  	"days": 12,
  	"country": "IDN",
  	"latitude": -6.166666667,
  	"longitude": 106.816667
  }, {
  	"name": "Tehran",
  	"description": "Iran",
  	"cost": 473,
  	"happiness": 66,
  	"days": 7,
  	"country": "IRN",
  	"latitude": 35.7,
  	"longitude": 51.416667
  }, {
  	"name": "Baghdad",
  	"description": "Iraq",
  	"cost": 424,
  	"happiness": 59,
  	"days": 6,
  	"country": "IRQ",
  	"latitude": 33.33333333,
  	"longitude": 44.4
  }, {
  	"name": "Dublin",
  	"description": "Ireland",
  	"cost": 426,
  	"happiness": 60,
  	"days": 6,
  	"country": "IRL",
  	"latitude": 53.31666667,
  	"longitude": -6.233333
  }, {
  	"name": "Douglas",
  	"description": "Isle of Man",
  	"cost": 431,
  	"happiness": 60,
  	"days": 6,
  	"country": "IMN",
  	"latitude": 54.15,
  	"longitude": -4.483333
  }, {
  	"name": "Jerusalem",
  	"description": "Israel",
  	"cost": 366,
  	"happiness": 51,
  	"days": 5,
  	"country": "ISR",
  	"latitude": 31.76666667,
  	"longitude": 35.233333
  }, {
  	"name": "Rome",
  	"description": "Italy",
  	"cost": 345,
  	"happiness": 48,
  	"days": 5,
  	"country": "ITA",
  	"latitude": 41.9,
  	"longitude": 12.483333
  }, {
  	"name": "Kingston",
  	"description": "Jamaica",
  	"cost": 615,
  	"happiness": 86,
  	"days": 9,
  	"country": "JAM",
  	"latitude": 18,
  	"longitude": -76.8
  }, {
  	"name": "Tokyo",
  	"description": "Japan",
  	"cost": 1019,
  	"happiness": 143,
  	"days": 14,
  	"country": "JPN",
  	"latitude": 35.68333333,
  	"longitude": 139.75
  }, {
  	"name": "Saint Helier",
  	"description": "Jersey",
  	"cost": 391,
  	"happiness": 55,
  	"days": 5,
  	"country": "JEY",
  	"latitude": 49.18333333,
  	"longitude": -2.1
  }, {
  	"name": "Amman",
  	"description": "Jordan",
  	"cost": 370,
  	"happiness": 52,
  	"days": 5,
  	"country": "JOR",
  	"latitude": 31.95,
  	"longitude": 35.933333
  }, {
  	"name": "Astana",
  	"description": "Kazakhstan",
  	"cost": 623,
  	"happiness": 87,
  	"days": 9,
  	"country": "KAZ",
  	"latitude": 51.16666667,
  	"longitude": 71.416667
  }, {
  	"name": "Nairobi",
  	"description": "Kenya",
  	"cost": 293,
  	"happiness": 41,
  	"days": 4,
  	"country": "KEN",
  	"latitude": -1.283333333,
  	"longitude": 36.816667
  }, {
  	"name": "Tarawa",
  	"description": "Kiribati",
  	"cost": 1346,
  	"happiness": 188,
  	"days": 19,
  	"country": "KIR",
  	"latitude": -0.883333333,
  	"longitude": 169.533333
  }, {
  	"name": "Pyongyang",
  	"description": "North Korea",
  	"cost": 929,
  	"happiness": 130,
  	"days": 13,
  	"country": "PRK",
  	"latitude": 39.01666667,
  	"longitude": 125.75
  }, {
  	"name": "Seoul",
  	"description": "South Korea",
  	"cost": 941,
  	"happiness": 132,
  	"days": 13,
  	"country": "KOR",
  	"latitude": 37.55,
  	"longitude": 126.983333
  }, {
  	"name": "Kuwait City",
  	"description": "Kuwait",
  	"cost": 431,
  	"happiness": 60,
  	"days": 6,
  	"country": "KWT",
  	"latitude": 29.36666667,
  	"longitude": 47.966667
  }, {
  	"name": "Bishkek",
  	"description": "Kyrgyzstan",
  	"cost": 626,
  	"happiness": 88,
  	"days": 9,
  	"country": "KGZ",
  	"latitude": 42.86666667,
  	"longitude": 74.6
  }, {
  	"name": "Vientiane",
  	"description": "Laos",
  	"cost": 810,
  	"happiness": 113,
  	"days": 11,
  	"country": "LAO",
  	"latitude": 17.96666667,
  	"longitude": 102.6
  }, {
  	"name": "Riga",
  	"description": "Latvia",
  	"cost": 478,
  	"happiness": 67,
  	"days": 7,
  	"country": "LVA",
  	"latitude": 56.95,
  	"longitude": 24.1
  }, {
  	"name": "Beirut",
  	"description": "Lebanon",
  	"cost": 377,
  	"happiness": 53,
  	"days": 5,
  	"country": "LBN",
  	"latitude": 33.86666667,
  	"longitude": 35.5
  }, {
  	"name": "Maseru",
  	"description": "Lesotho",
  	"cost": 312,
  	"happiness": 44,
  	"days": 4,
  	"country": "LSO",
  	"latitude": -29.31666667,
  	"longitude": 27.483333
  }, {
  	"name": "Monrovia",
  	"description": "Liberia",
  	"cost": 99,
  	"happiness": 14,
  	"days": 1,
  	"country": "LBR",
  	"latitude": 6.3,
  	"longitude": -10.8
  }, {
  	"name": "Tripoli",
  	"description": "Libya",
  	"cost": 279,
  	"happiness": 39,
  	"days": 4,
  	"country": "LBY",
  	"latitude": 32.88333333,
  	"longitude": 13.166667
  }, {
  	"name": "Vaduz",
  	"description": "Liechtenstein",
  	"cost": 380,
  	"happiness": 53,
  	"days": 5,
  	"country": "LIE",
  	"latitude": 47.13333333,
  	"longitude": 9.516667
  }, {
  	"name": "Vilnius",
  	"description": "Lithuania",
  	"cost": 465,
  	"happiness": 65,
  	"days": 7,
  	"country": "LTU",
  	"latitude": 54.68333333,
  	"longitude": 25.316667
  }, {
  	"name": "Luxembourg",
  	"description": "Luxembourg",
  	"cost": 396,
  	"happiness": 55,
  	"days": 6,
  	"country": "LUX",
  	"latitude": 49.6,
  	"longitude": 6.116667
  }, {
  	"name": "Skopje",
  	"description": "Macedonia [FYROM]",
  	"cost": 367,
  	"happiness": 51,
  	"days": 5,
  	"country": "MKD",
  	"latitude": 42,
  	"longitude": 21.433333
  }, {
  	"name": "Antananarivo",
  	"description": "Madagascar",
  	"cost": 399,
  	"happiness": 56,
  	"days": 6,
  	"country": "MDG",
  	"latitude": -18.91666667,
  	"longitude": 47.516667
  }, {
  	"name": "Lilongwe",
  	"description": "Malawi",
  	"cost": 288,
  	"happiness": 40,
  	"days": 4,
  	"country": "MWI",
  	"latitude": -13.96666667,
  	"longitude": 33.783333
  }, {
  	"name": "Kuala Lumpur",
  	"description": "Malaysia",
  	"cost": 808,
  	"happiness": 113,
  	"days": 11,
  	"country": "MYS",
  	"latitude": 3.166666667,
  	"longitude": 101.7
  }, {
  	"name": "Male",
  	"description": "Maldives",
  	"cost": 584,
  	"happiness": 82,
  	"days": 8,
  	"country": "MDV",
  	"latitude": 4.166666667,
  	"longitude": 73.5
  }, {
  	"name": "Bamako",
  	"description": "Mali",
  	"cost": 119,
  	"happiness": 17,
  	"days": 2,
  	"country": "MLI",
  	"latitude": 12.65,
  	"longitude": -8
  }, {
  	"name": "Valletta",
  	"description": "Malta",
  	"cost": 305,
  	"happiness": 43,
  	"days": 4,
  	"country": "MLT",
  	"latitude": 35.88333333,
  	"longitude": 14.5
  }, {
  	"name": "Majuro",
  	"description": "Marshall Islands",
  	"cost": 1341,
  	"happiness": 188,
  	"days": 19,
  	"country": "MHL",
  	"latitude": 7.1,
  	"longitude": 171.383333
  }, {
  	"name": "Nouakchott",
  	"description": "Mauritania",
  	"cost": 190,
  	"happiness": 27,
  	"days": 3,
  	"country": "",
  	"latitude": 18.06666667,
  	"longitude": -15.966667
  }, {
  	"name": "Port Louis",
  	"description": "Mauritius",
  	"cost": 474,
  	"happiness": 66,
  	"days": 7,
  	"country": "MUS",
  	"latitude": -20.15,
  	"longitude": 57.483333
  }, {
  	"name": "Mexico City",
  	"description": "Mexico",
  	"cost": 783,
  	"happiness": 110,
  	"days": 11,
  	"country": "MEX",
  	"latitude": 19.43333333,
  	"longitude": -99.133333
  }, {
  	"name": "Palikir",
  	"description": "Micronesia",
  	"cost": 1248,
  	"happiness": 175,
  	"days": 17,
  	"country": "FSM",
  	"latitude": 6.916666667,
  	"longitude": 158.15
  }, {
  	"name": "Chisinau",
  	"description": "Moldova",
  	"cost": 424,
  	"happiness": 59,
  	"days": 6,
  	"country": "MDA",
  	"latitude": 47,
  	"longitude": 28.85
  }, {
  	"name": "Monaco",
  	"description": "Monaco",
  	"cost": 351,
  	"happiness": 49,
  	"days": 5,
  	"country": "MCO",
  	"latitude": 43.73333333,
  	"longitude": 7.416667
  }, {
  	"name": "Ulaanbaatar",
  	"description": "Mongolia",
  	"cost": 804,
  	"happiness": 113,
  	"days": 11,
  	"country": "MNG",
  	"latitude": 47.91666667,
  	"longitude": 106.916667
  }, {
  	"name": "Podgorica",
  	"description": "Montenegro",
  	"cost": 364,
  	"happiness": 51,
  	"days": 5,
  	"country": "MNE",
  	"latitude": 42.43333333,
  	"longitude": 19.266667
  }, {
  	"name": "Plymouth",
  	"description": "Montserrat",
  	"cost": 504,
  	"happiness": 71,
  	"days": 7,
  	"country": "MSR",
  	"latitude": 16.7,
  	"longitude": -62.216667
  }, {
  	"name": "Rabat",
  	"description": "Morocco",
  	"cost": 275,
  	"happiness": 38,
  	"days": 4,
  	"country": "MAR",
  	"latitude": 34.01666667,
  	"longitude": -6.816667
  }, {
  	"name": "Maputo",
  	"description": "Mozambique",
  	"cost": 324,
  	"happiness": 45,
  	"days": 5,
  	"country": "MOZ",
  	"latitude": -25.95,
  	"longitude": 32.583333
  }, {
  	"name": "Windhoek",
  	"description": "Namibia",
  	"cost": 223,
  	"happiness": 31,
  	"days": 3,
  	"country": "NAM",
  	"latitude": -22.56666667,
  	"longitude": 17.083333
  }, {
  	"name": "Kathmandu",
  	"description": "Nepal",
  	"cost": 682,
  	"happiness": 95,
  	"days": 10,
  	"country": "NPL",
  	"latitude": 27.71666667,
  	"longitude": 85.316667
  }, {
  	"name": "Amsterdam",
  	"description": "Netherlands",
  	"cost": 417,
  	"happiness": 58,
  	"days": 6,
  	"country": "NLD",
  	"latitude": 52.35,
  	"longitude": 4.916667
  }, {
  	"name": "Noumea",
  	"description": "New Caledonia",
  	"cost": 1224,
  	"happiness": 171,
  	"days": 17,
  	"country": "NCL",
  	"latitude": -22.26666667,
  	"longitude": 166.45
  }, {
  	"name": "Wellington",
  	"description": "New Zealand",
  	"cost": 1100,
  	"happiness": 154,
  	"days": 15,
  	"country": "NZL",
  	"latitude": -41.3,
  	"longitude": 174.783333
  }, {
  	"name": "Managua",
  	"description": "Nicaragua",
  	"cost": 686,
  	"happiness": 96,
  	"days": 10,
  	"country": "NIC",
  	"latitude": 12.13333333,
  	"longitude": -86.25
  }, {
  	"name": "Niamey",
  	"description": "Niger",
  	"cost": 109,
  	"happiness": 15,
  	"days": 2,
  	"country": "NER",
  	"latitude": 13.51666667,
  	"longitude": 2.116667
  }, {
  	"name": "Abuja",
  	"description": "Nigeria",
  	"cost": 94,
  	"happiness": 13,
  	"days": 1,
  	"country": "NGA",
  	"latitude": 9.083333333,
  	"longitude": 7.533333
  }, {
  	"name": "Alofi",
  	"description": "Niue",
  	"cost": 1259,
  	"happiness": 176,
  	"days": 18,
  	"country": "NIU",
  	"latitude": -19.01666667,
  	"longitude": -169.916667
  }, {
  	"name": "Kingston",
  	"description": "Norfolk Island",
  	"cost": 1182,
  	"happiness": 165,
  	"days": 17,
  	"country": "NFK",
  	"latitude": -29.05,
  	"longitude": 167.966667
  }, {
  	"name": "Saipan",
  	"description": "Northern Mariana Islands",
  	"cost": 1135,
  	"happiness": 159,
  	"days": 16,
  	"country": "MNP",
  	"latitude": 15.2,
  	"longitude": 145.75
  }, {
  	"name": "Oslo",
  	"description": "Norway",
  	"cost": 481,
  	"happiness": 67,
  	"days": 7,
  	"country": "NOR",
  	"latitude": 59.91666667,
  	"longitude": 10.75
  }, {
  	"name": "Muscat",
  	"description": "Oman",
  	"cost": 488,
  	"happiness": 68,
  	"days": 7,
  	"country": "OMN",
  	"latitude": 23.61666667,
  	"longitude": 58.583333
  }, {
  	"name": "Islamabad",
  	"description": "Pakistan",
  	"cost": 603,
  	"happiness": 84,
  	"days": 8,
  	"country": "PAK",
  	"latitude": 33.68333333,
  	"longitude": 73.05
  }, {
  	"name": "Melekeok",
  	"description": "Palau",
  	"cost": 1066,
  	"happiness": 149,
  	"days": 15,
  	"country": "PLW",
  	"latitude": 7.483333333,
  	"longitude": 134.633333
  }, {
  	"name": "Panama City",
  	"description": "Panama",
  	"cost": 633,
  	"happiness": 89,
  	"days": 9,
  	"country": "PAN",
  	"latitude": 8.966666667,
  	"longitude": -79.533333
  }, {
  	"name": "Port Moresby",
  	"description": "Papua New Guinea",
  	"cost": 1160,
  	"happiness": 162,
  	"days": 16,
  	"country": "PNG",
  	"latitude": -9.45,
  	"longitude": 147.183333
  }, {
  	"name": "Asuncion",
  	"description": "Paraguay",
  	"cost": 485,
  	"happiness": 68,
  	"days": 7,
  	"country": "PRY",
  	"latitude": -25.26666667,
  	"longitude": -57.666667
  }, {
  	"name": "Lima",
  	"description": "Peru",
  	"cost": 614,
  	"happiness": 86,
  	"days": 9,
  	"country": "PER",
  	"latitude": -12.05,
  	"longitude": -77.05
  }, {
  	"name": "Manila",
  	"description": "Philippines",
  	"cost": 952,
  	"happiness": 133,
  	"days": 13,
  	"country": "PHL",
  	"latitude": 14.6,
  	"longitude": 120.966667
  }, {
  	"name": "Adamstown",
  	"description": "Pitcairn Islands",
  	"cost": 998,
  	"happiness": 140,
  	"days": 14,
  	"country": "PCN",
  	"latitude": -25.06666667,
  	"longitude": -130.083333
  }, {
  	"name": "Warsaw",
  	"description": "Poland",
  	"cost": 438,
  	"happiness": 61,
  	"days": 6,
  	"country": "POL",
  	"latitude": 52.25,
  	"longitude": 21
  }, {
  	"name": "Lisbon",
  	"description": "Portugal",
  	"cost": 315,
  	"happiness": 44,
  	"days": 4,
  	"country": "PRT",
  	"latitude": 38.71666667,
  	"longitude": -9.133333
  }, {
  	"name": "San Juan",
  	"description": "Puerto Rico",
  	"cost": 535,
  	"happiness": 75,
  	"days": 7,
  	"country": "PRI",
  	"latitude": 18.46666667,
  	"longitude": -66.116667
  }, {
  	"name": "Doha",
  	"description": "Qatar",
  	"cost": 443,
  	"happiness": 62,
  	"days": 6,
  	"country": "QAT",
  	"latitude": 25.28333333,
  	"longitude": 51.533333
  }, {
  	"name": "Bucharest",
  	"description": "Romania",
  	"cost": 398,
  	"happiness": 56,
  	"days": 6,
  	"country": "ROU",
  	"latitude": 44.43333333,
  	"longitude": 26.1
  }, {
  	"name": "Moscow",
  	"description": "Russia",
  	"cost": 505,
  	"happiness": 71,
  	"days": 7,
  	"country": "RUS",
  	"latitude": 55.75,
  	"longitude": 37.6
  }, {
  	"name": "Kigali",
  	"description": "Rwanda",
  	"cost": 239,
  	"happiness": 33,
  	"days": 3,
  	"country": "RWA",
  	"latitude": -1.95,
  	"longitude": 30.05
  }, {
  	"name": "Jamestown",
  	"description": "Saint Helena",
  	"cost": 134,
  	"happiness": 19,
  	"days": 2,
  	"country": "SHN",
  	"latitude": -15.93333333,
  	"longitude": -5.716667
  }, {
  	"name": "Basseterre",
  	"description": "Saint Kitts and Nevis",
  	"cost": 509,
  	"happiness": 71,
  	"days": 7,
  	"country": "KNA",
  	"latitude": 17.3,
  	"longitude": -62.716667
  }, {
  	"name": "Castries",
  	"description": "Saint Lucia",
  	"cost": 492,
  	"happiness": 69,
  	"days": 7,
  	"country": "LCA",
  	"latitude": 14,
  	"longitude": -61
  }, {
  	"name": "Saint-Pierre",
  	"description": "Saint Pierre and Miquelon",
  	"cost": 537,
  	"happiness": 75,
  	"days": 8,
  	"country": "SPM",
  	"latitude": 46.76666667,
  	"longitude": -56.183333
  }, {
  	"name": "Kingstown",
  	"description": "Saint Vincent and the Grenadines",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "VCT",
  	"latitude": 13.13333333,
  	"longitude": -61.216667
  }, {
  	"name": "Apia",
  	"description": "Samoa",
  	"cost": 1302,
  	"happiness": 182,
  	"days": 18,
  	"country": "WSM",
  	"latitude": -13.81666667,
  	"longitude": -171.766667
  }, {
  	"name": "San Marino",
  	"description": "San Marino",
  	"cost": 360,
  	"happiness": 50,
  	"days": 5,
  	"country": "SMR",
  	"latitude": 43.93333333,
  	"longitude": 12.416667
  }, {
  	"name": "Sao Tome",
  	"description": "São Tomé and Príncipe",
  	"cost": 54,
  	"happiness": 8,
  	"days": 1,
  	"country": "STP",
  	"latitude": 0.333333333,
  	"longitude": 6.733333
  }, {
  	"name": "Riyadh",
  	"description": "Saudi Arabia",
  	"cost": 409,
  	"happiness": 57,
  	"days": 6,
  	"country": "SAU",
  	"latitude": 24.65,
  	"longitude": 46.7
  }, {
  	"name": "Dakar",
  	"description": "Senegal",
  	"cost": 181,
  	"happiness": 25,
  	"days": 3,
  	"country": "SEN",
  	"latitude": 14.73333333,
  	"longitude": -17.633333
  }, {
  	"name": "Belgrade",
  	"description": "Serbia",
  	"cost": 384,
  	"happiness": 54,
  	"days": 5,
  	"country": "SRB",
  	"latitude": 44.83333333,
  	"longitude": 20.5
  }, {
  	"name": "Victoria",
  	"description": "Seychelles",
  	"cost": 441,
  	"happiness": 62,
  	"days": 6,
  	"country": "SYC",
  	"latitude": -4.616666667,
  	"longitude": 55.45
  }, {
  	"name": "Freetown",
  	"description": "Sierra Leone",
  	"cost": 125,
  	"happiness": 17,
  	"days": 2,
  	"country": "SLE",
  	"latitude": 8.483333333,
  	"longitude": -13.233333
  }, {
  	"name": "Singapore",
  	"description": "Singapore",
  	"cost": 825,
  	"happiness": 115,
  	"days": 12,
  	"country": "SGP",
  	"latitude": 1.283333333,
  	"longitude": 103.85
  }, {
  	"name": "Bratislava",
  	"description": "Slovakia",
  	"cost": 400,
  	"happiness": 56,
  	"days": 6,
  	"country": "SVK",
  	"latitude": 48.15,
  	"longitude": 17.116667
  }, {
  	"name": "Ljubljana",
  	"description": "Slovenia",
  	"cost": 380,
  	"happiness": 53,
  	"days": 5,
  	"country": "SVN",
  	"latitude": 46.05,
  	"longitude": 14.516667
  }, {
  	"name": "Honiara",
  	"description": "Solomon Islands",
  	"cost": 1254,
  	"happiness": 176,
  	"days": 18,
  	"country": "SLB",
  	"latitude": -9.433333333,
  	"longitude": 159.95
  }, {
  	"name": "Mogadishu",
  	"description": "Somalia",
  	"cost": 360,
  	"happiness": 50,
  	"days": 5,
  	"country": "SOM",
  	"latitude": 2.066666667,
  	"longitude": 45.333333
  }, {
  	"name": "Pretoria",
  	"description": "South Africa",
  	"cost": 297,
  	"happiness": 42,
  	"days": 4,
  	"country": "ZAF",
  	"latitude": -25.7,
  	"longitude": 28.216667
  }, {
  	"name": "Madrid",
  	"description": "Spain",
  	"cost": 322,
  	"happiness": 45,
  	"days": 5,
  	"country": "ESP",
  	"latitude": 40.4,
  	"longitude": -3.683333
  }, {
  	"name": "Colombo",
  	"description": "Sri Lanka",
  	"cost": 635,
  	"happiness": 89,
  	"days": 9,
  	"country": "LKA",
  	"latitude": 6.916666667,
  	"longitude": 79.833333
  }, {
  	"name": "Khartoum",
  	"description": "Sudan",
  	"cost": 284,
  	"happiness": 40,
  	"days": 4,
  	"country": "SDN",
  	"latitude": 15.6,
  	"longitude": 32.533333
  }, {
  	"name": "Paramaribo",
  	"description": "Suriname",
  	"cost": 440,
  	"happiness": 62,
  	"days": 6,
  	"country": "SUR",
  	"latitude": 5.833333333,
  	"longitude": -55.166667
  }, {
  	"name": "Longyearbyen",
  	"description": "Svalbard and Jan Mayen",
  	"cost": 625,
  	"happiness": 87,
  	"days": 9,
  	"country": "SJM",
  	"latitude": 78.21666667,
  	"longitude": 15.633333
  }, {
  	"name": "Mbabane",
  	"description": "Swaziland",
  	"cost": 317,
  	"happiness": 44,
  	"days": 4,
  	"country": "SWZ",
  	"latitude": -26.31666667,
  	"longitude": 31.133333
  }, {
  	"name": "Stockholm",
  	"description": "Sweden",
  	"cost": 484,
  	"happiness": 68,
  	"days": 7,
  	"country": "SWE",
  	"latitude": 59.33333333,
  	"longitude": 18.05
  }, {
  	"name": "Bern",
  	"description": "Switzerland",
  	"cost": 376,
  	"happiness": 53,
  	"days": 5,
  	"country": "CHE",
  	"latitude": 46.91666667,
  	"longitude": 7.466667
  }, {
  	"name": "Damascus",
  	"description": "Syria",
  	"cost": 379,
  	"happiness": 53,
  	"days": 5,
  	"country": "SYR",
  	"latitude": 33.5,
  	"longitude": 36.3
  }, {
  	"name": "Taipei",
  	"description": "Taiwan",
  	"cost": 939,
  	"happiness": 132,
  	"days": 13,
  	"country": "TWN",
  	"latitude": 25.03333333,
  	"longitude": 121.516667
  }, {
  	"name": "Dushanbe",
  	"description": "Tajikistan",
  	"cost": 584,
  	"happiness": 82,
  	"days": 8,
  	"country": "TJK",
  	"latitude": 38.55,
  	"longitude": 68.766667
  }, {
  	"name": "Dar es Salaam",
  	"description": "Tanzania",
  	"cost": 316,
  	"happiness": 44,
  	"days": 4,
  	"country": "TZA",
  	"latitude": -6.8,
  	"longitude": 39.283333
  }, {
  	"name": "Bangkok",
  	"description": "Thailand",
  	"cost": 796,
  	"happiness": 111,
  	"days": 11,
  	"country": "THA",
  	"latitude": 13.75,
  	"longitude": 100.516667
  }, {
  	"name": "Dili",
  	"description": "Timor-Leste",
  	"cost": 994,
  	"happiness": 139,
  	"days": 14,
  	"country": "TLS",
  	"latitude": -8.583333333,
  	"longitude": 125.6
  }, {
  	"name": "Lome",
  	"description": "Togo",
  	"cost": 50,
  	"happiness": 7,
  	"days": 1,
  	"country": "TGO",
  	"latitude": 6.116666667,
  	"longitude": 1.216667
  }, {
  	"name": "Nuku'alofa",
  	"description": "Tonga",
  	"cost": 1258,
  	"happiness": 176,
  	"days": 18,
  	"country": "TON",
  	"latitude": -21.13333333,
  	"longitude": -175.2
  }, {
  	"name": "Port of Spain",
  	"description": "Trinidad and Tobago",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "TTO",
  	"latitude": 10.65,
  	"longitude": -61.516667
  }, {
  	"name": "Tunis",
  	"description": "Tunisia",
  	"cost": 302,
  	"happiness": 42,
  	"days": 4,
  	"country": "TUN",
  	"latitude": 36.8,
  	"longitude": 10.183333
  }, {
  	"name": "Ankara",
  	"description": "Turkey",
  	"cost": 396,
  	"happiness": 55,
  	"days": 6,
  	"country": "TUR",
  	"latitude": 39.93333333,
  	"longitude": 32.866667
  }, {
  	"name": "Ashgabat",
  	"description": "Turkmenistan",
  	"cost": 521,
  	"happiness": 73,
  	"days": 7,
  	"country": "TKM",
  	"latitude": 37.95,
  	"longitude": 58.383333
  }, {
  	"name": "Grand Turk",
  	"description": "Turks and Caicos Islands",
  	"cost": 576,
  	"happiness": 81,
  	"days": 8,
  	"country": "TCA",
  	"latitude": 21.46666667,
  	"longitude": -71.133333
  }, {
  	"name": "Funafuti",
  	"description": "Tuvalu",
  	"cost": 1362,
  	"happiness": 191,
  	"days": 19,
  	"country": "TUV",
  	"latitude": -8.516666667,
  	"longitude": 179.216667
  }, {
  	"name": "Kampala",
  	"description": "Uganda",
  	"cost": 259,
  	"happiness": 36,
  	"days": 4,
  	"country": "UGA",
  	"latitude": 0.316666667,
  	"longitude": 32.55
  }, {
  	"name": "Kyiv",
  	"description": "Ukraine",
  	"cost": 451,
  	"happiness": 63,
  	"days": 6,
  	"country": "UKR",
  	"latitude": 50.43333333,
  	"longitude": 30.516667
  }, {
  	"name": "Abu Dhabi",
  	"description": "United Arab Emirates",
  	"cost": 461,
  	"happiness": 64,
  	"days": 6,
  	"country": "ARE",
  	"latitude": 24.46666667,
  	"longitude": 54.366667
  }, {
  	"name": "London",
  	"description": "United Kingdom",
  	"cost": 409,
  	"happiness": 57,
  	"days": 6,
  	"country": "GBR",
  	"latitude": 51.5,
  	"longitude": -0.083333
  }, {
  	"name": "Washington",
  	"description": "United States",
  	"cost": 635,
  	"happiness": 89,
  	"days": 9,
  	"country": "USA",
  	"latitude": 38.883333,
  	"longitude": -77
  }, {
  	"name": "Montevideo",
  	"description": "Uruguay",
  	"cost": 499,
  	"happiness": 70,
  	"days": 7,
  	"country": "URY",
  	"latitude": -34.85,
  	"longitude": -56.166667
  }, {
  	"name": "Tashkent",
  	"description": "Uzbekistan",
  	"cost": 592,
  	"happiness": 83,
  	"days": 8,
  	"country": "UZB",
  	"latitude": 41.31666667,
  	"longitude": 69.25
  }, {
  	"name": "Port-Vila",
  	"description": "Vanuatu",
  	"cost": 1262,
  	"happiness": 177,
  	"days": 18,
  	"country": "VUT",
  	"latitude": -17.73333333,
  	"longitude": 168.316667
  }, {
  	"name": "Caracas",
  	"description": "Venezuela",
  	"cost": 534,
  	"happiness": 75,
  	"days": 7,
  	"country": "VEN",
  	"latitude": 10.48333333,
  	"longitude": -66.866667
  }, {
  	"name": "Hanoi",
  	"description": "Vietnam",
  	"cost": 832,
  	"happiness": 117,
  	"days": 12,
  	"country": "VNM",
  	"latitude": 21.03333333,
  	"longitude": 105.85
  }, {
  	"name": "Charlotte Amalie",
  	"description": "U.S. Virgin Islands",
  	"cost": 527,
  	"happiness": 74,
  	"days": 7,
  	"country": "VIR",
  	"latitude": 18.35,
  	"longitude": -64.933333
  }, {
  	"name": "Mata-Utu",
  	"description": "Wallis and Futuna",
  	"cost": 1302,
  	"happiness": 182,
  	"days": 18,
  	"country": "WLF",
  	"latitude": -13.95,
  	"longitude": -171.933333
  }, {
  	"name": "Sanaa",
  	"description": "Yemen",
  	"cost": 367,
  	"happiness": 51,
  	"days": 5,
  	"country": "YEM",
  	"latitude": 15.35,
  	"longitude": 44.2
  }, {
  	"name": "Lusaka",
  	"description": "Zambia",
  	"cost": 253,
  	"happiness": 35,
  	"days": 4,
  	"country": "ZMB",
  	"latitude": -15.41666667,
  	"longitude": 28.283333
  }, {
  	"name": "Harare",
  	"description": "Zimbabwe",
  	"cost": 281,
  	"happiness": 39,
  	"days": 4,
  	"country": "ZWE",
  	"latitude": -17.81666667,
  	"longitude": 31.033333
  }
];


/////////////////////////////////////////
/////////////////////////////////////////
var JSONRTWTrip = [
  // OCEANIA
  ////////////////////////////////////
  //Australia
  {
    "name"          : "Darwin"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "AUS"
    ,"latitude"     : -12.46344
    ,"longitude"    : 130.845642
  }
  ,{
    "name"          : "Sydney"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "AUS"
    ,"latitude"     : -33.8688
    ,"longitude"    : 151.2093
  }
  ,{
    "name"          : "Melbourne"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "AUS"
    ,"latitude"     : -37.8136
    ,"longitude"    : 144.9631
  }
  ,{
    "name"          : "Adelaide"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "AUS"
    ,"latitude"     : -34.9285
    ,"longitude"    : 138.6007
  }
  ,{
    "name"          : "Alice Springs"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "AUS"
    ,"latitude"     : -23.6980
    ,"longitude"    : 133.8807
  }

  // ASIA
  ////////////////////////////////////
  //South East Asia
  ,{
    "name"          : "Bangkok"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "THA"
    ,"latitude"     : 13.7563
    ,"longitude"    : 100.5018
  }
  ,{
    "name"          : "Hanoi"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "VNM"
    ,"latitude"     : 21.027764
    ,"longitude"    : 105.83416
  }
  ,{
    "name"          : "Siem Reap"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "KHM"
    ,"latitude"     : 13.367097
    ,"longitude"    : 103.844813
  }
  ,{
    "name"          : "Vientiane"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "LAO"
    ,"latitude"     : 17.975706
    ,"longitude"    : 102.633104
  }
  ,{
    "name"          : "Kuala Lumpur"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "MYS"
    ,"latitude"     : 3.139003
    ,"longitude"    : 101.686855
  }
  ,{
    "name"          : "Singapore City"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "SGP"
    ,"latitude"     : 1.352083
    ,"longitude"    : 103.819836
  }

  // AMERICAS
  ////////////////////////////////////
  //North America
  ,{
    "name"          : "Los Angeles, California"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "USA"
    ,"latitude"     : 34.052234
    ,"longitude"    : -118.243685
  }
  ,{
    "name"          : "San Francisco, California"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "USA"
    ,"latitude"     : 37.7749
    ,"longitude"    : -122.4194
  }
  ,{
    "name"          : "Las Vegas, Nevada"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "USA"
    ,"latitude"     : 36.1699
    ,"longitude"    : -115.1398
  }

  //Central America
  ,{
    "name"          : "Mexico city"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "MEX"
    ,"latitude"     : 19.432608
    ,"longitude"    : -99.133208
  }
  ,{
    "name"          : "Cancun"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "MEX"
    ,"latitude"     : 21.161908
    ,"longitude"    : -86.851528
  }
  ,{
    "name"          : "Guatemala City"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "GTM"
    ,"latitude"     : 14.6349
    ,"longitude"    : -90.5069
  }
  ,{
    "name"          : "Honduras"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "HND"
    ,"latitude"     : 15.2000
    ,"longitude"    : -86.2419
  }
  ,{
    "name"          : "Belize"
    ,"description"  : ""
    ,"cost"         : 0
    ,"happiness"    : 0
    ,"days"         : 0
    ,"country"      : "BLZ"
    ,"latitude"     : 17.1899
    ,"longitude"    : -88.4976
  }
];


/////////////////////////////////////////
/////////////////////////////////////////
var JSONcountries = [
  {
  	"name": "Andorra",
  	"description": "Andorra",
  	"cost": 338,
  	"happiness": 47,
  	"days": 5,
  	"country": "AND",
  	"latitude": 42.546245,
  	"longitude": 1.601554
  }, {
  	"name": "United Arab Emirates",
  	"description": "United Arab Emirates",
  	"cost": 455,
  	"happiness": 64,
  	"days": 6,
  	"country": "ARE",
  	"latitude": 23.424076,
  	"longitude": 53.847818
  }, {
  	"name": "Afghanistan",
  	"description": "Afghanistan",
  	"cost": 569,
  	"happiness": 80,
  	"days": 8,
  	"country": "AFG",
  	"latitude": 33.93911,
  	"longitude": 67.709953
  }, {
  	"name": "Antigua and Barbuda",
  	"description": "Antigua and Barbuda",
  	"cost": 502,
  	"happiness": 70,
  	"days": 7,
  	"country": "ATG",
  	"latitude": 17.060816,
  	"longitude": -61.796428
  }, {
  	"name": "Anguilla",
  	"description": "Anguilla",
  	"cost": 512,
  	"happiness": 72,
  	"days": 7,
  	"country": "AIA",
  	"latitude": 18.220554,
  	"longitude": -63.068615
  }, {
  	"name": "Albania",
  	"description": "Albania",
  	"cost": 358,
  	"happiness": 50,
  	"days": 5,
  	"country": "ALB",
  	"latitude": 41.153332,
  	"longitude": 20.168331
  }, {
  	"name": "Armenia",
  	"description": "Armenia",
  	"cost": 455,
  	"happiness": 64,
  	"days": 6,
  	"country": "ARM",
  	"latitude": 40.069099,
  	"longitude": 45.038189
  }, {
  	"name": "Netherlands Antilles",
  	"description": "Netherlands Antilles",
  	"cost": 552,
  	"happiness": 77,
  	"days": 8,
  	"country": "",
  	"latitude": 12.226079,
  	"longitude": -69.060087
  }, {
  	"name": "Angola",
  	"description": "Angola",
  	"cost": 167,
  	"happiness": 23,
  	"days": 2,
  	"country": "AGO",
  	"latitude": -11.202692,
  	"longitude": 17.873887
  }, {
  	"name": "Argentina",
  	"description": "Argentina",
  	"cost": 553,
  	"happiness": 77,
  	"days": 8,
  	"country": "ARG",
  	"latitude": -38.416097,
  	"longitude": -63.616672
  }, {
  	"name": "American Samoa",
  	"description": "American Samoa",
  	"cost": 1292,
  	"happiness": 181,
  	"days": 18,
  	"country": "ASM",
  	"latitude": -14.270972,
  	"longitude": -170.132217
  }, {
  	"name": "Austria",
  	"description": "Austria",
  	"cost": 391,
  	"happiness": 55,
  	"days": 5,
  	"country": "AUT",
  	"latitude": 47.516231,
  	"longitude": 14.550072
  }, {
  	"name": "Australia",
  	"description": "Australia",
  	"cost": 1022,
  	"happiness": 143,
  	"days": 14,
  	"country": "AUS",
  	"latitude": -25.274398,
  	"longitude": 133.775136
  }, {
  	"name": "Aruba",
  	"description": "Aruba",
  	"cost": 560,
  	"happiness": 78,
  	"days": 8,
  	"country": "ABW",
  	"latitude": 12.52111,
  	"longitude": -69.968338
  }, {
  	"name": "Azerbaijan",
  	"description": "Azerbaijan",
  	"cost": 468,
  	"happiness": 66,
  	"days": 7,
  	"country": "AZE",
  	"latitude": 40.143105,
  	"longitude": 47.576927
  }, {
  	"name": "Bosnia and Herzegovina",
  	"description": "Bosnia and Herzegovina",
  	"cost": 371,
  	"happiness": 52,
  	"days": 5,
  	"country": "BIH",
  	"latitude": 43.915886,
  	"longitude": 17.679076
  }, {
  	"name": "Barbados",
  	"description": "Barbados",
  	"cost": 480,
  	"happiness": 67,
  	"days": 7,
  	"country": "BRB",
  	"latitude": 13.193887,
  	"longitude": -59.543198
  }, {
  	"name": "Bangladesh",
  	"description": "Bangladesh",
  	"cost": 717,
  	"happiness": 100,
  	"days": 10,
  	"country": "BGD",
  	"latitude": 23.684994,
  	"longitude": 90.356331
  }, {
  	"name": "Belgium",
  	"description": "Belgium",
  	"cost": 402,
  	"happiness": 56,
  	"days": 6,
  	"country": "BEL",
  	"latitude": 50.503887,
  	"longitude": 4.469936
  }, {
  	"name": "Burkina Faso",
  	"description": "Burkina Faso",
  	"cost": 98,
  	"happiness": 14,
  	"days": 1,
  	"country": "BFA",
  	"latitude": 12.238333,
  	"longitude": -1.561593
  }, {
  	"name": "Bulgaria",
  	"description": "Bulgaria",
  	"cost": 385,
  	"happiness": 54,
  	"days": 5,
  	"country": "BGR",
  	"latitude": 42.733883,
  	"longitude": 25.48583
  }, {
  	"name": "Bahrain",
  	"description": "Bahrain",
  	"cost": 439,
  	"happiness": 61,
  	"days": 6,
  	"country": "BHR",
  	"latitude": 25.930414,
  	"longitude": 50.637772
  }, {
  	"name": "Burundi",
  	"description": "Burundi",
  	"cost": 239,
  	"happiness": 33,
  	"days": 3,
  	"country": "BDI",
  	"latitude": -3.373056,
  	"longitude": 29.918886
  }, {
  	"name": "Benin",
  	"description": "Benin",
  	"cost": 76,
  	"happiness": 11,
  	"days": 1,
  	"country": "BEN",
  	"latitude": 9.30769,
  	"longitude": 2.315834
  }, {
  	"name": "Bermuda",
  	"description": "Bermuda",
  	"cost": 547,
  	"happiness": 77,
  	"days": 8,
  	"country": "BMU",
  	"latitude": 32.321384,
  	"longitude": -64.75737
  }, {
  	"name": "Brunei",
  	"description": "Brunei",
  	"cost": 911,
  	"happiness": 127,
  	"days": 13,
  	"country": "BRN",
  	"latitude": 4.535277,
  	"longitude": 114.727669
  }, {
  	"name": "Bolivia",
  	"description": "Bolivia",
  	"cost": 514,
  	"happiness": 72,
  	"days": 7,
  	"country": "BOL",
  	"latitude": -16.290154,
  	"longitude": -63.588653
  }, {
  	"name": "Brazil",
  	"description": "Brazil",
  	"cost": 423,
  	"happiness": 59,
  	"days": 6,
  	"country": "BRA",
  	"latitude": -14.235004,
  	"longitude": -51.92528
  }, {
  	"name": "Bahamas",
  	"description": "Bahamas",
  	"cost": 624,
  	"happiness": 87,
  	"days": 9,
  	"country": "BHS",
  	"latitude": 25.03428,
  	"longitude": -77.39628
  }, {
  	"name": "Bhutan",
  	"description": "Bhutan",
  	"cost": 718,
  	"happiness": 101,
  	"days": 10,
  	"country": "BTN",
  	"latitude": 27.514162,
  	"longitude": 90.433601
  }, {
  	"name": "Bouvet Island",
  	"description": "Bouvet Island",
  	"cost": 433,
  	"happiness": 61,
  	"days": 6,
  	"country": "BVT",
  	"latitude": -54.423199,
  	"longitude": 3.413194
  }, {
  	"name": "Botswana",
  	"description": "Botswana",
  	"cost": 261,
  	"happiness": 36,
  	"days": 4,
  	"country": "BWA",
  	"latitude": -22.328474,
  	"longitude": 24.684866
  }, {
  	"name": "Belarus",
  	"description": "Belarus",
  	"cost": 464,
  	"happiness": 65,
  	"days": 7,
  	"country": "BLR",
  	"latitude": 53.709807,
  	"longitude": 27.953389
  }, {
  	"name": "Belize",
  	"description": "Belize",
  	"cost": 703,
  	"happiness": 98,
  	"days": 10,
  	"country": "BLZ",
  	"latitude": 17.189877,
  	"longitude": -88.49765
  }, {
  	"name": "Canada",
  	"description": "Canada",
  	"cost": 787,
  	"happiness": 110,
  	"days": 11,
  	"country": "CAN",
  	"latitude": 56.130366,
  	"longitude": -106.346771
  }, {
  	"name": "Cocos [Keeling] Islands",
  	"description": "Cocos [Keeling] Islands",
  	"cost": 768,
  	"happiness": 108,
  	"days": 11,
  	"country": "CCK",
  	"latitude": -12.164165,
  	"longitude": 96.870956
  }, {
  	"name": "Congo [DRC]",
  	"description": "Congo [DRC]",
  	"cost": 176,
  	"happiness": 25,
  	"days": 2,
  	"country": "COD",
  	"latitude": -4.038333,
  	"longitude": 21.758664
  }, {
  	"name": "Central African Republic",
  	"description": "Central African Republic",
  	"cost": 174,
  	"happiness": 24,
  	"days": 2,
  	"country": "CAF",
  	"latitude": 6.611111,
  	"longitude": 20.939444
  }, {
  	"name": "Congo [Republic]",
  	"description": "Congo [Republic]",
  	"cost": 126,
  	"happiness": 18,
  	"days": 2,
  	"country": "COG",
  	"latitude": -0.228021,
  	"longitude": 15.827659
  }, {
  	"name": "Switzerland",
  	"description": "Switzerland",
  	"cost": 376,
  	"happiness": 53,
  	"days": 5,
  	"country": "CHE",
  	"latitude": 46.818188,
  	"longitude": 8.227512
  }, {
  	"name": "Côte d'Ivoire",
  	"description": "Côte d'Ivoire",
  	"cost": 74,
  	"happiness": 10,
  	"days": 1,
  	"country": "CIV",
  	"latitude": 7.539989,
  	"longitude": -5.54708
  }, {
  	"name": "Cook Islands",
  	"description": "Cook Islands",
  	"cost": 1199,
  	"happiness": 168,
  	"days": 17,
  	"country": "COK",
  	"latitude": -21.236736,
  	"longitude": -159.777671
  }, {
  	"name": "Chile",
  	"description": "Chile",
  	"cost": 596,
  	"happiness": 84,
  	"days": 8,
  	"country": "CHL",
  	"latitude": -35.675147,
  	"longitude": -71.542969
  }, {
  	"name": "Cameroon",
  	"description": "Cameroon",
  	"cost": 114,
  	"happiness": 16,
  	"days": 2,
  	"country": "CMR",
  	"latitude": 7.369722,
  	"longitude": 12.354722
  }, {
  	"name": "China",
  	"description": "China",
  	"cost": 806,
  	"happiness": 113,
  	"days": 11,
  	"country": "CHN",
  	"latitude": 35.86166,
  	"longitude": 104.195397
  }, {
  	"name": "Colombia",
  	"description": "Colombia",
  	"cost": 591,
  	"happiness": 83,
  	"days": 8,
  	"country": "COL",
  	"latitude": 4.570868,
  	"longitude": -74.297333
  }, {
  	"name": "Costa Rica",
  	"description": "Costa Rica",
  	"cost": 666,
  	"happiness": 93,
  	"days": 9,
  	"country": "CRI",
  	"latitude": 9.748917,
  	"longitude": -83.753428
  }, {
  	"name": "Cuba",
  	"description": "Cuba",
  	"cost": 625,
  	"happiness": 87,
  	"days": 9,
  	"country": "CUB",
  	"latitude": 21.521757,
  	"longitude": -77.781167
  }, {
  	"name": "Cape Verde",
  	"description": "Cape Verde",
  	"cost": 227,
  	"happiness": 32,
  	"days": 3,
  	"country": "CPV",
  	"latitude": 16.002082,
  	"longitude": -24.013197
  }, {
  	"name": "Christmas Island",
  	"description": "Christmas Island",
  	"cost": 837,
  	"happiness": 117,
  	"days": 12,
  	"country": "CXR",
  	"latitude": -10.447525,
  	"longitude": 105.690449
  }, {
  	"name": "Cyprus",
  	"description": "Cyprus",
  	"cost": 373,
  	"happiness": 52,
  	"days": 5,
  	"country": "CYP",
  	"latitude": 35.126413,
  	"longitude": 33.429859
  }, {
  	"name": "Czech Republic",
  	"description": "Czech Republic",
  	"cost": 409,
  	"happiness": 57,
  	"days": 6,
  	"country": "CZE",
  	"latitude": 49.817492,
  	"longitude": 15.472962
  }, {
  	"name": "Germany",
  	"description": "Germany",
  	"cost": 412,
  	"happiness": 58,
  	"days": 6,
  	"country": "DEU",
  	"latitude": 51.165691,
  	"longitude": 10.451526
  }, {
  	"name": "Djibouti",
  	"description": "Djibouti",
  	"cost": 349,
  	"happiness": 49,
  	"days": 5,
  	"country": "DJI",
  	"latitude": 11.825138,
  	"longitude": 42.590275
  }, {
  	"name": "Denmark",
  	"description": "Denmark",
  	"cost": 451,
  	"happiness": 63,
  	"days": 6,
  	"country": "DNK",
  	"latitude": 56.26392,
  	"longitude": 9.501785
  }, {
  	"name": "Dominica",
  	"description": "Dominica",
  	"cost": 496,
  	"happiness": 69,
  	"days": 7,
  	"country": "DMA",
  	"latitude": 15.414999,
  	"longitude": -61.370976
  }, {
  	"name": "Dominican Republic",
  	"description": "Dominican Republic",
  	"cost": 566,
  	"happiness": 79,
  	"days": 8,
  	"country": "DOM",
  	"latitude": 18.735693,
  	"longitude": -70.162651
  }, {
  	"name": "Algeria",
  	"description": "Algeria",
  	"cost": 223,
  	"happiness": 31,
  	"days": 3,
  	"country": "DZA",
  	"latitude": 28.033886,
  	"longitude": 1.659626
  }, {
  	"name": "Ecuador",
  	"description": "Ecuador",
  	"cost": 621,
  	"happiness": 87,
  	"days": 9,
  	"country": "ECU",
  	"latitude": -1.831239,
  	"longitude": -78.183406
  }, {
  	"name": "Estonia",
  	"description": "Estonia",
  	"cost": 491,
  	"happiness": 69,
  	"days": 7,
  	"country": "EST",
  	"latitude": 58.595272,
  	"longitude": 25.013607
  }, {
  	"name": "Egypt",
  	"description": "Egypt",
  	"cost": 317,
  	"happiness": 44,
  	"days": 4,
  	"country": "EGY",
  	"latitude": 26.820553,
  	"longitude": 30.802498
  }, {
  	"name": "Western Sahara",
  	"description": "Western Sahara",
  	"cost": 216,
  	"happiness": 30,
  	"days": 3,
  	"country": "ESH",
  	"latitude": 24.215527,
  	"longitude": -12.885834
  }, {
  	"name": "Eritrea",
  	"description": "Eritrea",
  	"cost": 335,
  	"happiness": 47,
  	"days": 5,
  	"country": "ERI",
  	"latitude": 15.179384,
  	"longitude": 39.782334
  }, {
  	"name": "Spain",
  	"description": "Spain",
  	"cost": 323,
  	"happiness": 45,
  	"days": 5,
  	"country": "ESP",
  	"latitude": 40.463667,
  	"longitude": -3.74922
  }, {
  	"name": "Ethiopia",
  	"description": "Ethiopia",
  	"cost": 328,
  	"happiness": 46,
  	"days": 5,
  	"country": "ETH",
  	"latitude": 9.145,
  	"longitude": 40.489673
  }, {
  	"name": "Finland",
  	"description": "Finland",
  	"cost": 516,
  	"happiness": 72,
  	"days": 7,
  	"country": "FIN",
  	"latitude": 61.92411,
  	"longitude": 25.748151
  }, {
  	"name": "Fiji",
  	"description": "Fiji",
  	"cost": 1298,
  	"happiness": 182,
  	"days": 18,
  	"country": "FJI",
  	"latitude": -16.578193,
  	"longitude": 179.414413
  }, {
  	"name": "Falkland Islands [Islas Malvinas]",
  	"description": "Falkland Islands [Islas Malvinas]",
  	"cost": 570,
  	"happiness": 80,
  	"days": 8,
  	"country": "FLK",
  	"latitude": -51.796253,
  	"longitude": -59.523613
  }, {
  	"name": "Micronesia",
  	"description": "Micronesia",
  	"cost": 1189,
  	"happiness": 166,
  	"days": 17,
  	"country": "FSM",
  	"latitude": 7.425554,
  	"longitude": 150.550812
  }, {
  	"name": "Faroe Islands",
  	"description": "Faroe Islands",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "FRO",
  	"latitude": 61.892635,
  	"longitude": -6.911806
  }, {
  	"name": "France",
  	"description": "France",
  	"cost": 368,
  	"happiness": 51,
  	"days": 5,
  	"country": "FRA",
  	"latitude": 46.227638,
  	"longitude": 2.213749
  }, {
  	"name": "Gabon",
  	"description": "Gabon",
  	"cost": 92,
  	"happiness": 13,
  	"days": 1,
  	"country": "GAB",
  	"latitude": -0.803689,
  	"longitude": 11.609444
  }, {
  	"name": "United Kingdom",
  	"description": "United Kingdom",
  	"cost": 440,
  	"happiness": 62,
  	"days": 6,
  	"country": "GBR",
  	"latitude": 55.378051,
  	"longitude": -3.435973
  }, {
  	"name": "Grenada",
  	"description": "Grenada",
  	"cost": 495,
  	"happiness": 69,
  	"days": 7,
  	"country": "GRD",
  	"latitude": 12.262776,
  	"longitude": -61.604171
  }, {
  	"name": "Georgia",
  	"description": "Georgia",
  	"cost": 457,
  	"happiness": 64,
  	"days": 6,
  	"country": "GEO",
  	"latitude": 42.315407,
  	"longitude": 43.356892
  }, {
  	"name": "French Guiana",
  	"description": "French Guiana",
  	"cost": 423,
  	"happiness": 59,
  	"days": 6,
  	"country": "GUF",
  	"latitude": 3.933889,
  	"longitude": -53.125782
  }, {
  	"name": "Guernsey",
  	"description": "Guernsey",
  	"cost": 393,
  	"happiness": 55,
  	"days": 6,
  	"country": "GGY",
  	"latitude": 49.465691,
  	"longitude": -2.585278
  }, {
  	"name": "Ghana",
  	"description": "Ghana",
  	"cost": 64,
  	"happiness": 9,
  	"days": 1,
  	"country": "GHA",
  	"latitude": 7.946527,
  	"longitude": -1.023194
  }, {
  	"name": "Gibraltar",
  	"description": "Gibraltar",
  	"cost": 290,
  	"happiness": 41,
  	"days": 4,
  	"country": "GIB",
  	"latitude": 36.137741,
  	"longitude": -5.345374
  }, {
  	"name": "Greenland",
  	"description": "Greenland",
  	"cost": 609,
  	"happiness": 85,
  	"days": 9,
  	"country": "GRL",
  	"latitude": 71.706936,
  	"longitude": -42.604303
  }, {
  	"name": "Gambia",
  	"description": "Gambia",
  	"cost": 161,
  	"happiness": 23,
  	"days": 2,
  	"country": "GMB",
  	"latitude": 13.443182,
  	"longitude": -15.310139
  }, {
  	"name": "Guinea",
  	"description": "Guinea",
  	"cost": 110,
  	"happiness": 15,
  	"days": 2,
  	"country": "GIN",
  	"latitude": 9.945587,
  	"longitude": -9.696645
  }, {
  	"name": "Guadeloupe",
  	"description": "Guadeloupe",
  	"cost": 503,
  	"happiness": 70,
  	"days": 7,
  	"country": "GLP",
  	"latitude": 16.995971,
  	"longitude": -62.067641
  }, {
  	"name": "Equatorial Guinea",
  	"description": "Equatorial Guinea",
  	"cost": 83,
  	"happiness": 12,
  	"days": 1,
  	"country": "GNQ",
  	"latitude": 1.650801,
  	"longitude": 10.267895
  }, {
  	"name": "Greece",
  	"description": "Greece",
  	"cost": 349,
  	"happiness": 49,
  	"days": 5,
  	"country": "GRC",
  	"latitude": 39.074208,
  	"longitude": 21.824312
  }, {
  	"name": "South Georgia and the South Sandwich Islands",
  	"description": "South Georgia and the South Sandwich Islands",
  	"cost": 494,
  	"happiness": 69,
  	"days": 7,
  	"country": "SGS",
  	"latitude": -54.429579,
  	"longitude": -36.587909
  }, {
  	"name": "Guatemala",
  	"description": "Guatemala",
  	"cost": 717,
  	"happiness": 100,
  	"days": 10,
  	"country": "GTM",
  	"latitude": 15.783471,
  	"longitude": -90.230759
  }, {
  	"name": "Guam",
  	"description": "Guam",
  	"cost": 1133,
  	"happiness": 159,
  	"days": 16,
  	"country": "GUM",
  	"latitude": 13.444304,
  	"longitude": 144.793731
  }, {
  	"name": "Guinea-Bissau",
  	"description": "Guinea-Bissau",
  	"cost": 152,
  	"happiness": 21,
  	"days": 2,
  	"country": "GNB",
  	"latitude": 11.803749,
  	"longitude": -15.180413
  }, {
  	"name": "Guyana",
  	"description": "Guyana",
  	"cost": 469,
  	"happiness": 66,
  	"days": 7,
  	"country": "GUY",
  	"latitude": 4.860416,
  	"longitude": -58.93018
  }, {
  	"name": "Gaza Strip",
  	"description": "Gaza Strip",
  	"cost": 359,
  	"happiness": 50,
  	"days": 5,
  	"country": "",
  	"latitude": 31.354676,
  	"longitude": 34.308825
  }, {
  	"name": "Hong Kong",
  	"description": "Hong Kong",
  	"cost": 891,
  	"happiness": 125,
  	"days": 12,
  	"country": "HKG",
  	"latitude": 22.396428,
  	"longitude": 114.109497
  }, {
  	"name": "Heard Island and McDonald Islands",
  	"description": "Heard Island and McDonald Islands",
  	"cost": 637,
  	"happiness": 89,
  	"days": 9,
  	"country": "HMD",
  	"latitude": -53.08181,
  	"longitude": 73.504158
  }, {
  	"name": "Honduras",
  	"description": "Honduras",
  	"cost": 686,
  	"happiness": 96,
  	"days": 10,
  	"country": "HND",
  	"latitude": 15.199999,
  	"longitude": -86.241905
  }, {
  	"name": "Croatia",
  	"description": "Croatia",
  	"cost": 374,
  	"happiness": 52,
  	"days": 5,
  	"country": "HRV",
  	"latitude": 45.1,
  	"longitude": 15.2
  }, {
  	"name": "Haiti",
  	"description": "Haiti",
  	"cost": 582,
  	"happiness": 81,
  	"days": 8,
  	"country": "HTI",
  	"latitude": 18.971187,
  	"longitude": -72.285215
  }, {
  	"name": "Hungary",
  	"description": "Hungary",
  	"cost": 398,
  	"happiness": 56,
  	"days": 6,
  	"country": "HUN",
  	"latitude": 47.162494,
  	"longitude": 19.503304
  }, {
  	"name": "Indonesia",
  	"description": "Indonesia",
  	"cost": 905,
  	"happiness": 127,
  	"days": 13,
  	"country": "IDN",
  	"latitude": -0.789275,
  	"longitude": 113.921327
  }, {
  	"name": "Ireland",
  	"description": "Ireland",
  	"cost": 428,
  	"happiness": 60,
  	"days": 6,
  	"country": "IRL",
  	"latitude": 53.41291,
  	"longitude": -8.24389
  }, {
  	"name": "Israel",
  	"description": "Israel",
  	"cost": 360,
  	"happiness": 50,
  	"days": 5,
  	"country": "ISR",
  	"latitude": 31.046051,
  	"longitude": 34.851612
  }, {
  	"name": "Isle of Man",
  	"description": "Isle of Man",
  	"cost": 432,
  	"happiness": 60,
  	"days": 6,
  	"country": "IMN",
  	"latitude": 54.236107,
  	"longitude": -4.548056
  }, {
  	"name": "India",
  	"description": "India",
  	"cost": 633,
  	"happiness": 89,
  	"days": 9,
  	"country": "IND",
  	"latitude": 20.593684,
  	"longitude": 78.96288
  }, {
  	"name": "British Indian Ocean Territory",
  	"description": "British Indian Ocean Territory",
  	"cost": 572,
  	"happiness": 80,
  	"days": 8,
  	"country": "IOT",
  	"latitude": -6.343194,
  	"longitude": 71.876519
  }, {
  	"name": "Iraq",
  	"description": "Iraq",
  	"cost": 419,
  	"happiness": 59,
  	"days": 6,
  	"country": "IRQ",
  	"latitude": 33.223191,
  	"longitude": 43.679291
  }, {
  	"name": "Iran",
  	"description": "Iran",
  	"cost": 477,
  	"happiness": 67,
  	"days": 7,
  	"country": "IRN",
  	"latitude": 32.427908,
  	"longitude": 53.688046
  }, {
  	"name": "Iceland",
  	"description": "Iceland",
  	"cost": 528,
  	"happiness": 74,
  	"days": 7,
  	"country": "ISL",
  	"latitude": 64.963051,
  	"longitude": -19.020835
  }, {
  	"name": "Italy",
  	"description": "Italy",
  	"cost": 345,
  	"happiness": 48,
  	"days": 5,
  	"country": "ITA",
  	"latitude": 41.87194,
  	"longitude": 12.56738
  }, {
  	"name": "Jersey",
  	"description": "Jersey",
  	"cost": 391,
  	"happiness": 55,
  	"days": 5,
  	"country": "JEY",
  	"latitude": 49.214439,
  	"longitude": -2.13125
  }, {
  	"name": "Jamaica",
  	"description": "Jamaica",
  	"cost": 619,
  	"happiness": 87,
  	"days": 9,
  	"country": "JAM",
  	"latitude": 18.109581,
  	"longitude": -77.297508
  }, {
  	"name": "Jordan",
  	"description": "Jordan",
  	"cost": 366,
  	"happiness": 51,
  	"days": 5,
  	"country": "JOR",
  	"latitude": 30.585164,
  	"longitude": 36.238414
  }, {
  	"name": "Japan",
  	"description": "Japan",
  	"cost": 1009,
  	"happiness": 141,
  	"days": 14,
  	"country": "JPN",
  	"latitude": 36.204824,
  	"longitude": 138.252924
  }, {
  	"name": "Kenya",
  	"description": "Kenya",
  	"cost": 301,
  	"happiness": 42,
  	"days": 4,
  	"country": "KEN",
  	"latitude": -0.023559,
  	"longitude": 37.906193
  }, {
  	"name": "Kyrgyzstan",
  	"description": "Kyrgyzstan",
  	"cost": 624,
  	"happiness": 87,
  	"days": 9,
  	"country": "KGZ",
  	"latitude": 41.20438,
  	"longitude": 74.766098
  }, {
  	"name": "Cambodia",
  	"description": "Cambodia",
  	"cost": 831,
  	"happiness": 116,
  	"days": 12,
  	"country": "KHM",
  	"latitude": 12.565679,
  	"longitude": 104.990963
  }, {
  	"name": "Kiribati",
  	"description": "Kiribati",
  	"cost": 1336,
  	"happiness": 187,
  	"days": 19,
  	"country": "KIR",
  	"latitude": -3.370417,
  	"longitude": -168.734039
  }, {
  	"name": "Comoros",
  	"description": "Comoros",
  	"cost": 359,
  	"happiness": 50,
  	"days": 5,
  	"country": "COM",
  	"latitude": -11.875001,
  	"longitude": 43.872219
  }, {
  	"name": "Saint Kitts and Nevis",
  	"description": "Saint Kitts and Nevis",
  	"cost": 509,
  	"happiness": 71,
  	"days": 7,
  	"country": "KNA",
  	"latitude": 17.357822,
  	"longitude": -62.782998
  }, {
  	"name": "North Korea",
  	"description": "North Korea",
  	"cost": 934,
  	"happiness": 131,
  	"days": 13,
  	"country": "PRK",
  	"latitude": 40.339852,
  	"longitude": 127.510093
  }, {
  	"name": "South Korea",
  	"description": "South Korea",
  	"cost": 951,
  	"happiness": 133,
  	"days": 13,
  	"country": "KOR",
  	"latitude": 35.907757,
  	"longitude": 127.766922
  }, {
  	"name": "Kuwait",
  	"description": "Kuwait",
  	"cost": 428,
  	"happiness": 60,
  	"days": 6,
  	"country": "KWT",
  	"latitude": 29.31166,
  	"longitude": 47.481766
  }, {
  	"name": "Cayman Islands",
  	"description": "Cayman Islands",
  	"cost": 644,
  	"happiness": 90,
  	"days": 9,
  	"country": "CYM",
  	"latitude": 19.513469,
  	"longitude": -80.566956
  }, {
  	"name": "Kazakhstan",
  	"description": "Kazakhstan",
  	"cost": 594,
  	"happiness": 83,
  	"days": 8,
  	"country": "KAZ",
  	"latitude": 48.019573,
  	"longitude": 66.923684
  }, {
  	"name": "Laos",
  	"description": "Laos",
  	"cost": 808,
  	"happiness": 113,
  	"days": 11,
  	"country": "LAO",
  	"latitude": 19.85627,
  	"longitude": 102.495496
  }, {
  	"name": "Lebanon",
  	"description": "Lebanon",
  	"cost": 379,
  	"happiness": 53,
  	"days": 5,
  	"country": "LBN",
  	"latitude": 33.854721,
  	"longitude": 35.862285
  }, {
  	"name": "Saint Lucia",
  	"description": "Saint Lucia",
  	"cost": 492,
  	"happiness": 69,
  	"days": 7,
  	"country": "LCA",
  	"latitude": 13.909444,
  	"longitude": -60.978893
  }, {
  	"name": "Liechtenstein",
  	"description": "Liechtenstein",
  	"cost": 380,
  	"happiness": 53,
  	"days": 5,
  	"country": "LIE",
  	"latitude": 47.166,
  	"longitude": 9.555373
  }, {
  	"name": "Sri Lanka",
  	"description": "Sri Lanka",
  	"cost": 642,
  	"happiness": 90,
  	"days": 9,
  	"country": "LKA",
  	"latitude": 7.873054,
  	"longitude": 80.771797
  }, {
  	"name": "Liberia",
  	"description": "Liberia",
  	"cost": 91,
  	"happiness": 13,
  	"days": 1,
  	"country": "LBR",
  	"latitude": 6.428055,
  	"longitude": -9.429499
  }, {
  	"name": "Lesotho",
  	"description": "Lesotho",
  	"cost": 318,
  	"happiness": 44,
  	"days": 4,
  	"country": "LSO",
  	"latitude": -29.609988,
  	"longitude": 28.233608
  }, {
  	"name": "Lithuania",
  	"description": "Lithuania",
  	"cost": 465,
  	"happiness": 65,
  	"days": 7,
  	"country": "LTU",
  	"latitude": 55.169438,
  	"longitude": 23.881275
  }, {
  	"name": "Luxembourg",
  	"description": "Luxembourg",
  	"cost": 398,
  	"happiness": 56,
  	"days": 6,
  	"country": "LUX",
  	"latitude": 49.815273,
  	"longitude": 6.129583
  }, {
  	"name": "Latvia",
  	"description": "Latvia",
  	"cost": 478,
  	"happiness": 67,
  	"days": 7,
  	"country": "LVA",
  	"latitude": 56.879635,
  	"longitude": 24.603189
  }, {
  	"name": "Libya",
  	"description": "Libya",
  	"cost": 247,
  	"happiness": 35,
  	"days": 3,
  	"country": "LBY",
  	"latitude": 26.3351,
  	"longitude": 17.228331
  }, {
  	"name": "Morocco",
  	"description": "Morocco",
  	"cost": 258,
  	"happiness": 36,
  	"days": 4,
  	"country": "MAR",
  	"latitude": 31.791702,
  	"longitude": -7.09262
  }, {
  	"name": "Monaco",
  	"description": "Monaco",
  	"cost": 351,
  	"happiness": 49,
  	"days": 5,
  	"country": "MCO",
  	"latitude": 43.750298,
  	"longitude": 7.412841
  }, {
  	"name": "Moldova",
  	"description": "Moldova",
  	"cost": 425,
  	"happiness": 59,
  	"days": 6,
  	"country": "MDA",
  	"latitude": 47.411631,
  	"longitude": 28.369885
  }, {
  	"name": "Montenegro",
  	"description": "Montenegro",
  	"cost": 366,
  	"happiness": 51,
  	"days": 5,
  	"country": "MNE",
  	"latitude": 42.708678,
  	"longitude": 19.37439
  }, {
  	"name": "Madagascar",
  	"description": "Madagascar",
  	"cost": 394,
  	"happiness": 55,
  	"days": 6,
  	"country": "MDG",
  	"latitude": -18.766947,
  	"longitude": 46.869107
  }, {
  	"name": "Marshall Islands",
  	"description": "Marshall Islands",
  	"cost": 1340,
  	"happiness": 188,
  	"days": 19,
  	"country": "MHL",
  	"latitude": 7.131474,
  	"longitude": 171.184478
  }, {
  	"name": "Macedonia [FYROM]",
  	"description": "Macedonia [FYROM]",
  	"cost": 365,
  	"happiness": 51,
  	"days": 5,
  	"country": "MKD",
  	"latitude": 41.608635,
  	"longitude": 21.745275
  }, {
  	"name": "Mali",
  	"description": "Mali",
  	"cost": 143,
  	"happiness": 20,
  	"days": 2,
  	"country": "MLI",
  	"latitude": 17.570692,
  	"longitude": -3.996166
  }, {
  	"name": "Myanmar [Burma]",
  	"description": "Myanmar [Burma]",
  	"cost": 759,
  	"happiness": 106,
  	"days": 11,
  	"country": "MMR",
  	"latitude": 21.913965,
  	"longitude": 95.956223
  }, {
  	"name": "Mongolia",
  	"description": "Mongolia",
  	"cost": 790,
  	"happiness": 111,
  	"days": 11,
  	"country": "MNG",
  	"latitude": 46.862496,
  	"longitude": 103.846656
  }, {
  	"name": "Macau",
  	"description": "Macau",
  	"cost": 887,
  	"happiness": 124,
  	"days": 12,
  	"country": "MAC",
  	"latitude": 22.198745,
  	"longitude": 113.543873
  }, {
  	"name": "Northern Mariana Islands",
  	"description": "Northern Mariana Islands",
  	"cost": 1126,
  	"happiness": 158,
  	"days": 16,
  	"country": "MNP",
  	"latitude": 17.33083,
  	"longitude": 145.38469
  }, {
  	"name": "Martinique",
  	"description": "Martinique",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "MTQ",
  	"latitude": 14.641528,
  	"longitude": -61.024174
  }, {
  	"name": "Mauritania",
  	"description": "Mauritania",
  	"cost": 187,
  	"happiness": 26,
  	"days": 3,
  	"country": "",
  	"latitude": 21.00789,
  	"longitude": -10.940835
  }, {
  	"name": "Montserrat",
  	"description": "Montserrat",
  	"cost": 504,
  	"happiness": 71,
  	"days": 7,
  	"country": "MSR",
  	"latitude": 16.742498,
  	"longitude": -62.187366
  }, {
  	"name": "Malta",
  	"description": "Malta",
  	"cost": 305,
  	"happiness": 43,
  	"days": 4,
  	"country": "MLT",
  	"latitude": 35.937496,
  	"longitude": 14.375416
  }, {
  	"name": "Mauritius",
  	"description": "Mauritius",
  	"cost": 475,
  	"happiness": 66,
  	"days": 7,
  	"country": "MUS",
  	"latitude": -20.348404,
  	"longitude": 57.552152
  }, {
  	"name": "Maldives",
  	"description": "Maldives",
  	"cost": 582,
  	"happiness": 81,
  	"days": 8,
  	"country": "MDV",
  	"latitude": 3.202778,
  	"longitude": 73.22068
  }, {
  	"name": "Malawi",
  	"description": "Malawi",
  	"cost": 290,
  	"happiness": 41,
  	"days": 4,
  	"country": "MWI",
  	"latitude": -13.254308,
  	"longitude": 34.301525
  }, {
  	"name": "Mexico",
  	"description": "Mexico",
  	"cost": 806,
  	"happiness": 113,
  	"days": 11,
  	"country": "MEX",
  	"latitude": 23.634501,
  	"longitude": -102.552784
  }, {
  	"name": "Malaysia",
  	"description": "Malaysia",
  	"cost": 810,
  	"happiness": 113,
  	"days": 11,
  	"country": "MYS",
  	"latitude": 4.210484,
  	"longitude": 101.975766
  }, {
  	"name": "Mozambique",
  	"description": "Mozambique",
  	"cost": 314,
  	"happiness": 44,
  	"days": 4,
  	"country": "MOZ",
  	"latitude": -18.665695,
  	"longitude": 35.529562
  }, {
  	"name": "Namibia",
  	"description": "Namibia",
  	"cost": 232,
  	"happiness": 32,
  	"days": 3,
  	"country": "NAM",
  	"latitude": -22.95764,
  	"longitude": 18.49041
  }, {
  	"name": "New Caledonia",
  	"description": "New Caledonia",
  	"cost": 1230,
  	"happiness": 172,
  	"days": 17,
  	"country": "NCL",
  	"latitude": -20.904305,
  	"longitude": 165.618042
  }, {
  	"name": "Niger",
  	"description": "Niger",
  	"cost": 153,
  	"happiness": 21,
  	"days": 2,
  	"country": "NER",
  	"latitude": 17.607789,
  	"longitude": 8.081666
  }, {
  	"name": "Norfolk Island",
  	"description": "Norfolk Island",
  	"cost": 1182,
  	"happiness": 165,
  	"days": 17,
  	"country": "NFK",
  	"latitude": -29.040835,
  	"longitude": 167.954712
  }, {
  	"name": "Nigeria",
  	"description": "Nigeria",
  	"cost": 100,
  	"happiness": 14,
  	"days": 1,
  	"country": "NGA",
  	"latitude": 9.081999,
  	"longitude": 8.675277
  }, {
  	"name": "Nicaragua",
  	"description": "Nicaragua",
  	"cost": 678,
  	"happiness": 95,
  	"days": 9,
  	"country": "NIC",
  	"latitude": 12.865416,
  	"longitude": -85.207229
  }, {
  	"name": "Netherlands",
  	"description": "Netherlands",
  	"cost": 416,
  	"happiness": 58,
  	"days": 6,
  	"country": "NLD",
  	"latitude": 52.132633,
  	"longitude": 5.291266
  }, {
  	"name": "Norway",
  	"description": "Norway",
  	"cost": 483,
  	"happiness": 68,
  	"days": 7,
  	"country": "NOR",
  	"latitude": 60.472024,
  	"longitude": 8.468946
  }, {
  	"name": "Nepal",
  	"description": "Nepal",
  	"cost": 674,
  	"happiness": 94,
  	"days": 9,
  	"country": "NPL",
  	"latitude": 28.394857,
  	"longitude": 84.124008
  }, {
  	"name": "Nauru",
  	"description": "Nauru",
  	"cost": 1326,
  	"happiness": 186,
  	"days": 19,
  	"country": "NRU",
  	"latitude": -0.522778,
  	"longitude": 166.931503
  }, {
  	"name": "Niue",
  	"description": "Niue",
  	"cost": 1259,
  	"happiness": 176,
  	"days": 18,
  	"country": "NIU",
  	"latitude": -19.054445,
  	"longitude": -169.867233
  }, {
  	"name": "New Zealand",
  	"description": "New Zealand",
  	"cost": 1103,
  	"happiness": 154,
  	"days": 15,
  	"country": "NZL",
  	"latitude": -40.900557,
  	"longitude": 174.885971
  }, {
  	"name": "Oman",
  	"description": "Oman",
  	"cost": 465,
  	"happiness": 65,
  	"days": 7,
  	"country": "OMN",
  	"latitude": 21.512583,
  	"longitude": 55.923255
  }, {
  	"name": "Panama",
  	"description": "Panama",
  	"cost": 642,
  	"happiness": 90,
  	"days": 9,
  	"country": "PAN",
  	"latitude": 8.537981,
  	"longitude": -80.782127
  }, {
  	"name": "Peru",
  	"description": "Peru",
  	"cost": 597,
  	"happiness": 84,
  	"days": 8,
  	"country": "PER",
  	"latitude": -9.189967,
  	"longitude": -75.015152
  }, {
  	"name": "French Polynesia",
  	"description": "French Polynesia",
  	"cost": 1152,
  	"happiness": 161,
  	"days": 16,
  	"country": "PYF",
  	"latitude": -17.679742,
  	"longitude": -149.406843
  }, {
  	"name": "Papua New Guinea",
  	"description": "Papua New Guinea",
  	"cost": 1140,
  	"happiness": 160,
  	"days": 16,
  	"country": "PNG",
  	"latitude": -6.314993,
  	"longitude": 143.95555
  }, {
  	"name": "Philippines",
  	"description": "Philippines",
  	"cost": 960,
  	"happiness": 134,
  	"days": 13,
  	"country": "PHL",
  	"latitude": 12.879721,
  	"longitude": 121.774017
  }, {
  	"name": "Pakistan",
  	"description": "Pakistan",
  	"cost": 574,
  	"happiness": 80,
  	"days": 8,
  	"country": "PAK",
  	"latitude": 30.375321,
  	"longitude": 69.345116
  }, {
  	"name": "Poland",
  	"description": "Poland",
  	"cost": 432,
  	"happiness": 60,
  	"days": 6,
  	"country": "POL",
  	"latitude": 51.919438,
  	"longitude": 19.145136
  }, {
  	"name": "Saint Pierre and Miquelon",
  	"description": "Saint Pierre and Miquelon",
  	"cost": 538,
  	"happiness": 75,
  	"days": 8,
  	"country": "SPM",
  	"latitude": 46.941936,
  	"longitude": -56.27111
  }, {
  	"name": "Pitcairn Islands",
  	"description": "Pitcairn Islands",
  	"cost": 981,
  	"happiness": 137,
  	"days": 14,
  	"country": "PCN",
  	"latitude": -24.703615,
  	"longitude": -127.439308
  }, {
  	"name": "Puerto Rico",
  	"description": "Puerto Rico",
  	"cost": 539,
  	"happiness": 75,
  	"days": 8,
  	"country": "PRI",
  	"latitude": 18.220833,
  	"longitude": -66.590149
  }, {
  	"name": "Palestinian Territories",
  	"description": "Palestinian Territories",
  	"cost": 366,
  	"happiness": 51,
  	"days": 5,
  	"country": "PSE",
  	"latitude": 31.952162,
  	"longitude": 35.233154
  }, {
  	"name": "Portugal",
  	"description": "Portugal",
  	"cost": 319,
  	"happiness": 45,
  	"days": 4,
  	"country": "PRT",
  	"latitude": 39.399872,
  	"longitude": -8.224454
  }, {
  	"name": "Palau",
  	"description": "Palau",
  	"cost": 1065,
  	"happiness": 149,
  	"days": 15,
  	"country": "PLW",
  	"latitude": 7.51498,
  	"longitude": 134.58252
  }, {
  	"name": "Paraguay",
  	"description": "Paraguay",
  	"cost": 487,
  	"happiness": 68,
  	"days": 7,
  	"country": "PRY",
  	"latitude": -23.442503,
  	"longitude": -58.443832
  }, {
  	"name": "Qatar",
  	"description": "Qatar",
  	"cost": 441,
  	"happiness": 62,
  	"days": 6,
  	"country": "QAT",
  	"latitude": 25.354826,
  	"longitude": 51.183884
  }, {
  	"name": "Réunion",
  	"description": "Réunion",
  	"cost": 462,
  	"happiness": 65,
  	"days": 6,
  	"country": "REU",
  	"latitude": -21.115141,
  	"longitude": 55.536384
  }, {
  	"name": "Romania",
  	"description": "Romania",
  	"cost": 404,
  	"happiness": 57,
  	"days": 6,
  	"country": "ROU",
  	"latitude": 45.943161,
  	"longitude": 24.96676
  }, {
  	"name": "Serbia",
  	"description": "Serbia",
  	"cost": 380,
  	"happiness": 53,
  	"days": 5,
  	"country": "SRB",
  	"latitude": 44.016521,
  	"longitude": 21.005859
  }, {
  	"name": "Russia",
  	"description": "Russia",
  	"cost": 772,
  	"happiness": 108,
  	"days": 11,
  	"country": "RUS",
  	"latitude": 61.52401,
  	"longitude": 105.318756
  }, {
  	"name": "Rwanda",
  	"description": "Rwanda",
  	"cost": 238,
  	"happiness": 33,
  	"days": 3,
  	"country": "RWA",
  	"latitude": -1.940278,
  	"longitude": 29.873888
  }, {
  	"name": "Saudi Arabia",
  	"description": "Saudi Arabia",
  	"cost": 395,
  	"happiness": 55,
  	"days": 6,
  	"country": "SAU",
  	"latitude": 23.885942,
  	"longitude": 45.079162
  }, {
  	"name": "Solomon Islands",
  	"description": "Solomon Islands",
  	"cost": 1255,
  	"happiness": 176,
  	"days": 18,
  	"country": "SLB",
  	"latitude": -9.64571,
  	"longitude": 160.156194
  }, {
  	"name": "Seychelles",
  	"description": "Seychelles",
  	"cost": 442,
  	"happiness": 62,
  	"days": 6,
  	"country": "SYC",
  	"latitude": -4.679574,
  	"longitude": 55.491977
  }, {
  	"name": "Sudan",
  	"description": "Sudan",
  	"cost": 259,
  	"happiness": 36,
  	"days": 4,
  	"country": "SDN",
  	"latitude": 12.862807,
  	"longitude": 30.217636
  }, {
  	"name": "Sweden",
  	"description": "Sweden",
  	"cost": 491,
  	"happiness": 69,
  	"days": 7,
  	"country": "SWE",
  	"latitude": 60.128161,
  	"longitude": 18.643501
  }, {
  	"name": "Singapore",
  	"description": "Singapore",
  	"cost": 825,
  	"happiness": 115,
  	"days": 12,
  	"country": "SGP",
  	"latitude": 1.352083,
  	"longitude": 103.819836
  }, {
  	"name": "Saint Helena",
  	"description": "Saint Helena",
  	"cost": 207,
  	"happiness": 29,
  	"days": 3,
  	"country": "SHN",
  	"latitude": -24.143474,
  	"longitude": -10.030696
  }, {
  	"name": "Slovenia",
  	"description": "Slovenia",
  	"cost": 381,
  	"happiness": 53,
  	"days": 5,
  	"country": "SVN",
  	"latitude": 46.151241,
  	"longitude": 14.995463
  }, {
  	"name": "Svalbard and Jan Mayen",
  	"description": "Svalbard and Jan Mayen",
  	"cost": 624,
  	"happiness": 87,
  	"days": 9,
  	"country": "SJM",
  	"latitude": 77.553604,
  	"longitude": 23.670272
  }, {
  	"name": "Slovakia",
  	"description": "Slovakia",
  	"cost": 410,
  	"happiness": 57,
  	"days": 6,
  	"country": "SVK",
  	"latitude": 48.669026,
  	"longitude": 19.699024
  }, {
  	"name": "Sierra Leone",
  	"description": "Sierra Leone",
  	"cost": 115,
  	"happiness": 16,
  	"days": 2,
  	"country": "SLE",
  	"latitude": 8.460555,
  	"longitude": -11.779889
  }, {
  	"name": "San Marino",
  	"description": "San Marino",
  	"cost": 360,
  	"happiness": 50,
  	"days": 5,
  	"country": "SMR",
  	"latitude": 43.94236,
  	"longitude": 12.457777
  }, {
  	"name": "Senegal",
  	"description": "Senegal",
  	"cost": 162,
  	"happiness": 23,
  	"days": 2,
  	"country": "SEN",
  	"latitude": 14.497401,
  	"longitude": -14.452362
  }, {
  	"name": "Somalia",
  	"description": "Somalia",
  	"cost": 369,
  	"happiness": 52,
  	"days": 5,
  	"country": "SOM",
  	"latitude": 5.152149,
  	"longitude": 46.199616
  }, {
  	"name": "Suriname",
  	"description": "Suriname",
  	"cost": 446,
  	"happiness": 62,
  	"days": 6,
  	"country": "SUR",
  	"latitude": 3.919305,
  	"longitude": -56.027783
  }, {
  	"name": "São Tomé and Príncipe",
  	"description": "São Tomé and Príncipe",
  	"cost": 53,
  	"happiness": 7,
  	"days": 1,
  	"country": "STP",
  	"latitude": 0.18636,
  	"longitude": 6.613081
  }, {
  	"name": "El Salvador",
  	"description": "El Salvador",
  	"cost": 706,
  	"happiness": 99,
  	"days": 10,
  	"country": "SLV",
  	"latitude": 13.794185,
  	"longitude": -88.89653
  }, {
  	"name": "Syria",
  	"description": "Syria",
  	"cost": 400,
  	"happiness": 56,
  	"days": 6,
  	"country": "SYR",
  	"latitude": 34.802075,
  	"longitude": 38.996815
  }, {
  	"name": "Swaziland",
  	"description": "Swaziland",
  	"cost": 320,
  	"happiness": 45,
  	"days": 4,
  	"country": "SWZ",
  	"latitude": -26.522503,
  	"longitude": 31.465866
  }, {
  	"name": "Turks and Caicos Islands",
  	"description": "Turks and Caicos Islands",
  	"cost": 581,
  	"happiness": 81,
  	"days": 8,
  	"country": "TCA",
  	"latitude": 21.694025,
  	"longitude": -71.797928
  }, {
  	"name": "Chad",
  	"description": "Chad",
  	"cost": 192,
  	"happiness": 27,
  	"days": 3,
  	"country": "TCD",
  	"latitude": 15.454166,
  	"longitude": 18.732207
  }, {
  	"name": "French Southern Territories",
  	"description": "French Southern Territories",
  	"cost": 609,
  	"happiness": 85,
  	"days": 9,
  	"country": "ATF",
  	"latitude": -49.280366,
  	"longitude": 69.348557
  }, {
  	"name": "Togo",
  	"description": "Togo",
  	"cost": 69,
  	"happiness": 10,
  	"days": 1,
  	"country": "TGO",
  	"latitude": 8.619543,
  	"longitude": 0.824782
  }, {
  	"name": "Thailand",
  	"description": "Thailand",
  	"cost": 799,
  	"happiness": 112,
  	"days": 11,
  	"country": "THA",
  	"latitude": 15.870032,
  	"longitude": 100.992541
  }, {
  	"name": "Tajikistan",
  	"description": "Tajikistan",
  	"cost": 600,
  	"happiness": 84,
  	"days": 8,
  	"country": "TJK",
  	"latitude": 38.861034,
  	"longitude": 71.276093
  }, {
  	"name": "Tokelau",
  	"description": "Tokelau",
  	"cost": 1334,
  	"happiness": 187,
  	"days": 19,
  	"country": "TKL",
  	"latitude": -8.967363,
  	"longitude": -171.855881
  }, {
  	"name": "Timor-Leste",
  	"description": "Timor-Leste",
  	"cost": 995,
  	"happiness": 139,
  	"days": 14,
  	"country": "TLS",
  	"latitude": -8.874217,
  	"longitude": 125.727539
  }, {
  	"name": "Turkmenistan",
  	"description": "Turkmenistan",
  	"cost": 531,
  	"happiness": 74,
  	"days": 7,
  	"country": "TKM",
  	"latitude": 38.969719,
  	"longitude": 59.556278
  }, {
  	"name": "Tunisia",
  	"description": "Tunisia",
  	"cost": 278,
  	"happiness": 39,
  	"days": 4,
  	"country": "TUN",
  	"latitude": 33.886917,
  	"longitude": 9.537499
  }, {
  	"name": "Tonga",
  	"description": "Tonga",
  	"cost": 1257,
  	"happiness": 176,
  	"days": 18,
  	"country": "TON",
  	"latitude": -21.178986,
  	"longitude": -175.198242
  }, {
  	"name": "Turkey",
  	"description": "Turkey",
  	"cost": 402,
  	"happiness": 56,
  	"days": 6,
  	"country": "TUR",
  	"latitude": 38.963745,
  	"longitude": 35.243322
  }, {
  	"name": "Trinidad and Tobago",
  	"description": "Trinidad and Tobago",
  	"cost": 491,
  	"happiness": 69,
  	"days": 7,
  	"country": "TTO",
  	"latitude": 10.691803,
  	"longitude": -61.222503
  }, {
  	"name": "Tuvalu",
  	"description": "Tuvalu",
  	"cost": 1370,
  	"happiness": 192,
  	"days": 19,
  	"country": "TUV",
  	"latitude": -7.109535,
  	"longitude": 177.64933
  }, {
  	"name": "Taiwan",
  	"description": "Taiwan",
  	"cost": 938,
  	"happiness": 131,
  	"days": 13,
  	"country": "TWN",
  	"latitude": 23.69781,
  	"longitude": 120.960515
  }, {
  	"name": "Tanzania",
  	"description": "Tanzania",
  	"cost": 281,
  	"happiness": 39,
  	"days": 4,
  	"country": "TZA",
  	"latitude": -6.369028,
  	"longitude": 34.888822
  }, {
  	"name": "Ukraine",
  	"description": "Ukraine",
  	"cost": 440,
  	"happiness": 62,
  	"days": 6,
  	"country": "UKR",
  	"latitude": 48.379433,
  	"longitude": 31.16558
  }, {
  	"name": "Uganda",
  	"description": "Uganda",
  	"cost": 257,
  	"happiness": 36,
  	"days": 4,
  	"country": "UGA",
  	"latitude": 1.373333,
  	"longitude": 32.290275
  }, {
  	"name": "United States",
  	"description": "United States",
  	"cost": 751,
  	"happiness": 105,
  	"days": 11,
  	"country": "USA",
  	"latitude": 37.09024,
  	"longitude": -95.712891
  }, {
  	"name": "Uruguay",
  	"description": "Uruguay",
  	"cost": 490,
  	"happiness": 69,
  	"days": 7,
  	"country": "URY",
  	"latitude": -32.522779,
  	"longitude": -55.765835
  }, {
  	"name": "Uzbekistan",
  	"description": "Uzbekistan",
  	"cost": 566,
  	"happiness": 79,
  	"days": 8,
  	"country": "UZB",
  	"latitude": 41.377491,
  	"longitude": 64.585262
  }, {
  	"name": "Vatican City",
  	"description": "Vatican City",
  	"cost": 345,
  	"happiness": 48,
  	"days": 5,
  	"country": "VAT",
  	"latitude": 41.902916,
  	"longitude": 12.453389
  }, {
  	"name": "Saint Vincent and the Grenadines",
  	"description": "Saint Vincent and the Grenadines",
  	"cost": 493,
  	"happiness": 69,
  	"days": 7,
  	"country": "VCT",
  	"latitude": 12.984305,
  	"longitude": -61.287228
  }, {
  	"name": "Venezuela",
  	"description": "Venezuela",
  	"cost": 530,
  	"happiness": 74,
  	"days": 7,
  	"country": "VEN",
  	"latitude": 6.42375,
  	"longitude": -66.58973
  }, {
  	"name": "British Virgin Islands",
  	"description": "British Virgin Islands",
  	"cost": 524,
  	"happiness": 73,
  	"days": 7,
  	"country": "VGB",
  	"latitude": 18.420695,
  	"longitude": -64.639968
  }, {
  	"name": "U.S. Virgin Islands",
  	"description": "U.S. Virgin Islands",
  	"cost": 526,
  	"happiness": 74,
  	"days": 7,
  	"country": "VIR",
  	"latitude": 18.335765,
  	"longitude": -64.896335
  }, {
  	"name": "Vietnam",
  	"description": "Vietnam",
  	"cost": 856,
  	"happiness": 120,
  	"days": 12,
  	"country": "VNM",
  	"latitude": 14.058324,
  	"longitude": 108.277199
  }, {
  	"name": "Vanuatu",
  	"description": "Vanuatu",
  	"cost": 1270,
  	"happiness": 178,
  	"days": 18,
  	"country": "VUT",
  	"latitude": -15.376706,
  	"longitude": 166.959158
  }, {
  	"name": "Wallis and Futuna",
  	"description": "Wallis and Futuna",
  	"cost": 1318,
  	"happiness": 185,
  	"days": 18,
  	"country": "WLF",
  	"latitude": -13.768752,
  	"longitude": -177.156097
  }, {
  	"name": "Samoa",
  	"description": "Samoa",
  	"cost": 1304,
  	"happiness": 183,
  	"days": 18,
  	"country": "WSM",
  	"latitude": -13.759029,
  	"longitude": -172.104629
  }, {
  	"name": "Kosovo",
  	"description": "Kosovo",
  	"cost": 370,
  	"happiness": 52,
  	"days": 5,
  	"country": "XKX",
  	"latitude": 42.602636,
  	"longitude": 20.902977
  }, {
  	"name": "Yemen",
  	"description": "Yemen",
  	"cost": 400,
  	"happiness": 56,
  	"days": 6,
  	"country": "YEM",
  	"latitude": 15.552727,
  	"longitude": 48.516388
  }, {
  	"name": "Mayotte",
  	"description": "Mayotte",
  	"cost": 370,
  	"happiness": 52,
  	"days": 5,
  	"country": "MYT",
  	"latitude": -12.8275,
  	"longitude": 45.166244
  }, {
  	"name": "South Africa",
  	"description": "South Africa",
  	"cost": 298,
  	"happiness": 42,
  	"days": 4,
  	"country": "ZAF",
  	"latitude": -30.559482,
  	"longitude": 22.937506
  }, {
  	"name": "Zambia",
  	"description": "Zambia",
  	"cost": 243,
  	"happiness": 34,
  	"days": 3,
  	"country": "ZMB",
  	"latitude": -13.133897,
  	"longitude": 27.849332
  }, {
  	"name": "Zimbabwe",
  	"description": "Zimbabwe",
  	"cost": 273,
  	"happiness": 38,
  	"days": 4,
  	"country": "ZWE",
  	"latitude": -19.015438,
  	"longitude": 29.154857
  }
];
