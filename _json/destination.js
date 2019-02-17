
var JSONdestination = []; //main JSON variable to be used

/////////////////////////////////////////
/////////////////////////////////////////
var JSONcapitals = [
  {
  	"name": "King Edward Point",
  	"description": "South Georgia and South Sandwich Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GS",
  	"latitude": -54.283333,
  	"longitude": -36.5
  },{
  	"name": "Port-aux-Francais",
  	"description": "French Southern and Antarctic Lands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TF",
  	"latitude": -49.35,
  	"longitude": 70.216667
  },{
  	"name": "Jerusalem",
  	"description": "Palestine",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PS",
  	"latitude": 31.76666667,
  	"longitude": 35.233333
  },{
  	"name": "Yaren",
  	"description": "Nauru",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NR",
  	"latitude": -0.5477,
  	"longitude": 166.920867
  },{
  	"name": "Atafu",
  	"description": "Tokelau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TK",
  	"latitude": -9.166667,
  	"longitude": -171.833333
  },{
  	"name": "El-AaiÃºn",
  	"description": "Western Sahara",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EH",
  	"latitude": 27.153611,
  	"longitude": -13.203333
  },{
  	"name": "Kabul",
  	"description": "Afghanistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AF",
  	"latitude": 34.51666667,
  	"longitude": 69.183333
  },{
  	"name": "Tirana",
  	"description": "Albania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AL",
  	"latitude": 41.31666667,
  	"longitude": 19.816667
  },{
  	"name": "Algiers",
  	"description": "Algeria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DZ",
  	"latitude": 36.75,
  	"longitude": 3.05
  },{
  	"name": "Pago Pago",
  	"description": "American Samoa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AS",
  	"latitude": -14.26666667,
  	"longitude": -170.7
  },{
  	"name": "Andorra la Vella",
  	"description": "Andorra",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AD",
  	"latitude": 42.5,
  	"longitude": 1.516667
  },{
  	"name": "Luanda",
  	"description": "Angola",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AO",
  	"latitude": -8.833333333,
  	"longitude": 13.216667
  },{
  	"name": "The Valley",
  	"description": "Anguilla",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AI",
  	"latitude": 18.21666667,
  	"longitude": -63.05
  },{
  	"name": "Saint John's",
  	"description": "Antigua and Barbuda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AG",
  	"latitude": 17.11666667,
  	"longitude": -61.85
  },{
  	"name": "Buenos Aires",
  	"description": "Argentina",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AR",
  	"latitude": -34.58333333,
  	"longitude": -58.666667
  },{
  	"name": "Yerevan",
  	"description": "Armenia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AM",
  	"latitude": 40.16666667,
  	"longitude": 44.5
  },{
  	"name": "Oranjestad",
  	"description": "Aruba",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AW",
  	"latitude": 12.51666667,
  	"longitude": -70.033333
  },{
  	"name": "Canberra",
  	"description": "Australia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AU",
  	"latitude": -35.26666667,
  	"longitude": 149.133333
  },{
  	"name": "Vienna",
  	"description": "Austria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AT",
  	"latitude": 48.2,
  	"longitude": 16.366667
  },{
  	"name": "Baku",
  	"description": "Azerbaijan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AZ",
  	"latitude": 40.38333333,
  	"longitude": 49.866667
  },{
  	"name": "Nassau",
  	"description": "Bahamas",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BS",
  	"latitude": 25.08333333,
  	"longitude": -77.35
  },{
  	"name": "Manama",
  	"description": "Bahrain",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BH",
  	"latitude": 26.23333333,
  	"longitude": 50.566667
  },{
  	"name": "Dhaka",
  	"description": "Bangladesh",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BD",
  	"latitude": 23.71666667,
  	"longitude": 90.4
  },{
  	"name": "Bridgetown",
  	"description": "Barbados",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BB",
  	"latitude": 13.1,
  	"longitude": -59.616667
  },{
  	"name": "Minsk",
  	"description": "Belarus",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BY",
  	"latitude": 53.9,
  	"longitude": 27.566667
  },{
  	"name": "Brussels",
  	"description": "Belgium",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BE",
  	"latitude": 50.83333333,
  	"longitude": 4.333333
  },{
  	"name": "Belmopan",
  	"description": "Belize",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BZ",
  	"latitude": 17.25,
  	"longitude": -88.766667
  },{
  	"name": "Porto-Novo",
  	"description": "Benin",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BJ",
  	"latitude": 6.483333333,
  	"longitude": 2.616667
  },{
  	"name": "Hamilton",
  	"description": "Bermuda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BM",
  	"latitude": 32.28333333,
  	"longitude": -64.783333
  },{
  	"name": "Thimphu",
  	"description": "Bhutan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BT",
  	"latitude": 27.46666667,
  	"longitude": 89.633333
  },{
  	"name": "La Paz",
  	"description": "Bolivia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BO",
  	"latitude": -16.5,
  	"longitude": -68.15
  },{
  	"name": "Sarajevo",
  	"description": "Bosnia and Herzegovina",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BA",
  	"latitude": 43.86666667,
  	"longitude": 18.416667
  },{
  	"name": "Gaborone",
  	"description": "Botswana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BW",
  	"latitude": -24.63333333,
  	"longitude": 25.9
  },{
  	"name": "Brasilia",
  	"description": "Brazil",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BR",
  	"latitude": -15.78333333,
  	"longitude": -47.916667
  },{
  	"name": "Road Town",
  	"description": "British Virgin Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VG",
  	"latitude": 18.41666667,
  	"longitude": -64.616667
  },{
  	"name": "Bandar Seri Begawan",
  	"description": "Brunei Darussalam",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BN",
  	"latitude": 4.883333333,
  	"longitude": 114.933333
  },{
  	"name": "Sofia",
  	"description": "Bulgaria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BG",
  	"latitude": 42.68333333,
  	"longitude": 23.316667
  },{
  	"name": "Ouagadougou",
  	"description": "Burkina Faso",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BF",
  	"latitude": 12.36666667,
  	"longitude": -1.516667
  },{
  	"name": "Rangoon",
  	"description": "Myanmar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MM",
  	"latitude": 16.8,
  	"longitude": 96.15
  },{
  	"name": "Bujumbura",
  	"description": "Burundi",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BI",
  	"latitude": -3.366666667,
  	"longitude": 29.35
  },{
  	"name": "Phnom Penh",
  	"description": "Cambodia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KH",
  	"latitude": 11.55,
  	"longitude": 104.916667
  },{
  	"name": "Yaounde",
  	"description": "Cameroon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CM",
  	"latitude": 3.866666667,
  	"longitude": 11.516667
  },{
  	"name": "Ottawa",
  	"description": "Canada",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CA",
  	"latitude": 45.41666667,
  	"longitude": -75.7
  },{
  	"name": "Praia",
  	"description": "Cape Verde",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CV",
  	"latitude": 14.91666667,
  	"longitude": -23.516667
  },{
  	"name": "George Town",
  	"description": "Cayman Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KY",
  	"latitude": 19.3,
  	"longitude": -81.383333
  },{
  	"name": "Bangui",
  	"description": "Central African Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CF",
  	"latitude": 4.366666667,
  	"longitude": 18.583333
  },{
  	"name": "N'Djamena",
  	"description": "Chad",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TD",
  	"latitude": 12.1,
  	"longitude": 15.033333
  },{
  	"name": "Santiago",
  	"description": "Chile",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CL",
  	"latitude": -33.45,
  	"longitude": -70.666667
  },{
  	"name": "Beijing",
  	"description": "China",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CN",
  	"latitude": 39.91666667,
  	"longitude": 116.383333
  },{
  	"name": "The Settlement",
  	"description": "Christmas Island",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CX",
  	"latitude": -10.41666667,
  	"longitude": 105.716667
  },{
  	"name": "West Island",
  	"description": "Cocos Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CC",
  	"latitude": -12.16666667,
  	"longitude": 96.833333
  },{
  	"name": "Bogota",
  	"description": "Colombia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CO",
  	"latitude": 4.6,
  	"longitude": -74.083333
  },{
  	"name": "Moroni",
  	"description": "Comoros",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KM",
  	"latitude": -11.7,
  	"longitude": 43.233333
  },{
  	"name": "Kinshasa",
  	"description": "Democratic Republic of the Congo",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CD",
  	"latitude": -4.316666667,
  	"longitude": 15.3
  },{
  	"name": "Brazzaville",
  	"description": "Republic of Congo",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CG",
  	"latitude": -4.25,
  	"longitude": 15.283333
  },{
  	"name": "Avarua",
  	"description": "Cook Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CK",
  	"latitude": -21.2,
  	"longitude": -159.766667
  },{
  	"name": "San Jose",
  	"description": "Costa Rica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CR",
  	"latitude": 9.933333333,
  	"longitude": -84.083333
  },{
  	"name": "Yamoussoukro",
  	"description": "Cote d'Ivoire",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CI",
  	"latitude": 6.816666667,
  	"longitude": -5.266667
  },{
  	"name": "Zagreb",
  	"description": "Croatia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HR",
  	"latitude": 45.8,
  	"longitude": 16
  },{
  	"name": "Havana",
  	"description": "Cuba",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CU",
  	"latitude": 23.11666667,
  	"longitude": -82.35
  },{
  	"name": "Nicosia",
  	"description": "Cyprus",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CY",
  	"latitude": 35.16666667,
  	"longitude": 33.366667
  },{
  	"name": "Prague",
  	"description": "Czech Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CZ",
  	"latitude": 50.08333333,
  	"longitude": 14.466667
  },{
  	"name": "Copenhagen",
  	"description": "Denmark",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DK",
  	"latitude": 55.66666667,
  	"longitude": 12.583333
  },{
  	"name": "Djibouti",
  	"description": "Djibouti",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DJ",
  	"latitude": 11.58333333,
  	"longitude": 43.15
  },{
  	"name": "Roseau",
  	"description": "Dominica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DM",
  	"latitude": 15.3,
  	"longitude": -61.4
  },{
  	"name": "Santo Domingo",
  	"description": "Dominican Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DO",
  	"latitude": 18.46666667,
  	"longitude": -69.9
  },{
  	"name": "Quito",
  	"description": "Ecuador",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EC",
  	"latitude": -0.216666667,
  	"longitude": -78.5
  },{
  	"name": "Cairo",
  	"description": "Egypt",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EG",
  	"latitude": 30.05,
  	"longitude": 31.25
  },{
  	"name": "San Salvador",
  	"description": "El Salvador",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SV",
  	"latitude": 13.7,
  	"longitude": -89.2
  },{
  	"name": "Malabo",
  	"description": "Equatorial Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GQ",
  	"latitude": 3.75,
  	"longitude": 8.783333
  },{
  	"name": "Asmara",
  	"description": "Eritrea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ER",
  	"latitude": 15.33333333,
  	"longitude": 38.933333
  },{
  	"name": "Tallinn",
  	"description": "Estonia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EE",
  	"latitude": 59.43333333,
  	"longitude": 24.716667
  },{
  	"name": "Addis Ababa",
  	"description": "Ethiopia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ET",
  	"latitude": 9.033333333,
  	"longitude": 38.7
  },{
  	"name": "Stanley",
  	"description": "Falkland Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FK",
  	"latitude": -51.7,
  	"longitude": -57.85
  },{
  	"name": "Torshavn",
  	"description": "Faroe Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FO",
  	"latitude": 62,
  	"longitude": -6.766667
  },{
  	"name": "Suva",
  	"description": "Fiji",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FJ",
  	"latitude": -18.13333333,
  	"longitude": 178.416667
  },{
  	"name": "Helsinki",
  	"description": "Finland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FI",
  	"latitude": 60.16666667,
  	"longitude": 24.933333
  },{
  	"name": "Paris",
  	"description": "France",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FR",
  	"latitude": 48.86666667,
  	"longitude": 2.333333
  },{
  	"name": "Papeete",
  	"description": "French Polynesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PF",
  	"latitude": -17.53333333,
  	"longitude": -149.566667
  },{
  	"name": "Libreville",
  	"description": "Gabon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GA",
  	"latitude": 0.383333333,
  	"longitude": 9.45
  },{
  	"name": "Banjul",
  	"description": "The Gambia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GM",
  	"latitude": 13.45,
  	"longitude": -16.566667
  },{
  	"name": "Tbilisi",
  	"description": "Georgia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GE",
  	"latitude": 41.68333333,
  	"longitude": 44.833333
  },{
  	"name": "Berlin",
  	"description": "Germany",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DE",
  	"latitude": 52.51666667,
  	"longitude": 13.4
  },{
  	"name": "Accra",
  	"description": "Ghana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GH",
  	"latitude": 5.55,
  	"longitude": -0.216667
  },{
  	"name": "Gibraltar",
  	"description": "Gibraltar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GI",
  	"latitude": 36.13333333,
  	"longitude": -5.35
  },{
  	"name": "Athens",
  	"description": "Greece",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GR",
  	"latitude": 37.98333333,
  	"longitude": 23.733333
  },{
  	"name": "Nuuk",
  	"description": "Greenland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GL",
  	"latitude": 64.18333333,
  	"longitude": -51.75
  },{
  	"name": "Saint George's",
  	"description": "Grenada",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GD",
  	"latitude": 12.05,
  	"longitude": -61.75
  },{
  	"name": "Hagatna",
  	"description": "Guam",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GU",
  	"latitude": 13.46666667,
  	"longitude": 144.733333
  },{
  	"name": "Guatemala City",
  	"description": "Guatemala",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GT",
  	"latitude": 14.61666667,
  	"longitude": -90.516667
  },{
  	"name": "Saint Peter Port",
  	"description": "Guernsey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GG",
  	"latitude": 49.45,
  	"longitude": -2.533333
  },{
  	"name": "Conakry",
  	"description": "Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GN",
  	"latitude": 9.5,
  	"longitude": -13.7
  },{
  	"name": "Bissau",
  	"description": "Guinea-Bissau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GW",
  	"latitude": 11.85,
  	"longitude": -15.583333
  },{
  	"name": "Georgetown",
  	"description": "Guyana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GY",
  	"latitude": 6.8,
  	"longitude": -58.15
  },{
  	"name": "Port-au-Prince",
  	"description": "Haiti",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HT",
  	"latitude": 18.53333333,
  	"longitude": -72.333333
  },{
  	"name": "Vatican City",
  	"description": "Vatican City",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VA",
  	"latitude": 41.9,
  	"longitude": 12.45
  },{
  	"name": "Tegucigalpa",
  	"description": "Honduras",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HN",
  	"latitude": 14.1,
  	"longitude": -87.216667
  },{
  	"name": "Budapest",
  	"description": "Hungary",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HU",
  	"latitude": 47.5,
  	"longitude": 19.083333
  },{
  	"name": "Reykjavik",
  	"description": "Iceland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IS",
  	"latitude": 64.15,
  	"longitude": -21.95
  },{
  	"name": "New Delhi",
  	"description": "India",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IN",
  	"latitude": 28.6,
  	"longitude": 77.2
  },{
  	"name": "Jakarta",
  	"description": "Indonesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ID",
  	"latitude": -6.166666667,
  	"longitude": 106.816667
  },{
  	"name": "Tehran",
  	"description": "Iran",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IR",
  	"latitude": 35.7,
  	"longitude": 51.416667
  },{
  	"name": "Baghdad",
  	"description": "Iraq",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IQ",
  	"latitude": 33.33333333,
  	"longitude": 44.4
  },{
  	"name": "Dublin",
  	"description": "Ireland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IE",
  	"latitude": 53.31666667,
  	"longitude": -6.233333
  },{
  	"name": "Douglas",
  	"description": "Isle of Man",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IM",
  	"latitude": 54.15,
  	"longitude": -4.483333
  },{
  	"name": "Jerusalem",
  	"description": "Israel",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IL",
  	"latitude": 31.76666667,
  	"longitude": 35.233333
  },{
  	"name": "Rome",
  	"description": "Italy",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IT",
  	"latitude": 41.9,
  	"longitude": 12.483333
  },{
  	"name": "Kingston",
  	"description": "Jamaica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JM",
  	"latitude": 18,
  	"longitude": -76.8
  },{
  	"name": "Tokyo",
  	"description": "Japan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JP",
  	"latitude": 35.68333333,
  	"longitude": 139.75
  },{
  	"name": "Saint Helier",
  	"description": "Jersey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JE",
  	"latitude": 49.18333333,
  	"longitude": -2.1
  },{
  	"name": "Amman",
  	"description": "Jordan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JO",
  	"latitude": 31.95,
  	"longitude": 35.933333
  },{
  	"name": "Astana",
  	"description": "Kazakhstan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KZ",
  	"latitude": 51.16666667,
  	"longitude": 71.416667
  },{
  	"name": "Nairobi",
  	"description": "Kenya",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KE",
  	"latitude": -1.283333333,
  	"longitude": 36.816667
  },{
  	"name": "Tarawa",
  	"description": "Kiribati",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KI",
  	"latitude": -0.883333333,
  	"longitude": 169.533333
  },{
  	"name": "Pyongyang",
  	"description": "North Korea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KP",
  	"latitude": 39.01666667,
  	"longitude": 125.75
  },{
  	"name": "Seoul",
  	"description": "South Korea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KR",
  	"latitude": 37.55,
  	"longitude": 126.983333
  },{
  	"name": "Kuwait City",
  	"description": "Kuwait",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KW",
  	"latitude": 29.36666667,
  	"longitude": 47.966667
  },{
  	"name": "Bishkek",
  	"description": "Kyrgyzstan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KG",
  	"latitude": 42.86666667,
  	"longitude": 74.6
  },{
  	"name": "Vientiane",
  	"description": "Laos",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LA",
  	"latitude": 17.96666667,
  	"longitude": 102.6
  },{
  	"name": "Riga",
  	"description": "Latvia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LV",
  	"latitude": 56.95,
  	"longitude": 24.1
  },{
  	"name": "Beirut",
  	"description": "Lebanon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LB",
  	"latitude": 33.86666667,
  	"longitude": 35.5
  },{
  	"name": "Maseru",
  	"description": "Lesotho",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LS",
  	"latitude": -29.31666667,
  	"longitude": 27.483333
  },{
  	"name": "Monrovia",
  	"description": "Liberia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LR",
  	"latitude": 6.3,
  	"longitude": -10.8
  },{
  	"name": "Tripoli",
  	"description": "Libya",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LY",
  	"latitude": 32.88333333,
  	"longitude": 13.166667
  },{
  	"name": "Vaduz",
  	"description": "Liechtenstein",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LI",
  	"latitude": 47.13333333,
  	"longitude": 9.516667
  },{
  	"name": "Vilnius",
  	"description": "Lithuania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LT",
  	"latitude": 54.68333333,
  	"longitude": 25.316667
  },{
  	"name": "Luxembourg",
  	"description": "Luxembourg",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LU",
  	"latitude": 49.6,
  	"longitude": 6.116667
  },{
  	"name": "Skopje",
  	"description": "Macedonia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MK",
  	"latitude": 42,
  	"longitude": 21.433333
  },{
  	"name": "Antananarivo",
  	"description": "Madagascar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MG",
  	"latitude": -18.91666667,
  	"longitude": 47.516667
  },{
  	"name": "Lilongwe",
  	"description": "Malawi",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MW",
  	"latitude": -13.96666667,
  	"longitude": 33.783333
  },{
  	"name": "Kuala Lumpur",
  	"description": "Malaysia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MY",
  	"latitude": 3.166666667,
  	"longitude": 101.7
  },{
  	"name": "Male",
  	"description": "Maldives",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MV",
  	"latitude": 4.166666667,
  	"longitude": 73.5
  },{
  	"name": "Bamako",
  	"description": "Mali",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ML",
  	"latitude": 12.65,
  	"longitude": -8
  },{
  	"name": "Valletta",
  	"description": "Malta",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MT",
  	"latitude": 35.88333333,
  	"longitude": 14.5
  },{
  	"name": "Majuro",
  	"description": "Marshall Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MH",
  	"latitude": 7.1,
  	"longitude": 171.383333
  },{
  	"name": "Nouakchott",
  	"description": "Mauritania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MR",
  	"latitude": 18.06666667,
  	"longitude": -15.966667
  },{
  	"name": "Port Louis",
  	"description": "Mauritius",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MU",
  	"latitude": -20.15,
  	"longitude": 57.483333
  },{
  	"name": "Mexico City",
  	"description": "Mexico",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MX",
  	"latitude": 19.43333333,
  	"longitude": -99.133333
  },{
  	"name": "Palikir",
  	"description": "Federated States of Micronesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FM",
  	"latitude": 6.916666667,
  	"longitude": 158.15
  },{
  	"name": "Chisinau",
  	"description": "Moldova",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MD",
  	"latitude": 47,
  	"longitude": 28.85
  },{
  	"name": "Monaco",
  	"description": "Monaco",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MC",
  	"latitude": 43.73333333,
  	"longitude": 7.416667
  },{
  	"name": "Ulaanbaatar",
  	"description": "Mongolia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MN",
  	"latitude": 47.91666667,
  	"longitude": 106.916667
  },{
  	"name": "Podgorica",
  	"description": "Montenegro",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ME",
  	"latitude": 42.43333333,
  	"longitude": 19.266667
  },{
  	"name": "Plymouth",
  	"description": "Montserrat",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MS",
  	"latitude": 16.7,
  	"longitude": -62.216667
  },{
  	"name": "Rabat",
  	"description": "Morocco",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MA",
  	"latitude": 34.01666667,
  	"longitude": -6.816667
  },{
  	"name": "Maputo",
  	"description": "Mozambique",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MZ",
  	"latitude": -25.95,
  	"longitude": 32.583333
  },{
  	"name": "Windhoek",
  	"description": "Namibia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NA",
  	"latitude": -22.56666667,
  	"longitude": 17.083333
  },{
  	"name": "Kathmandu",
  	"description": "Nepal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NP",
  	"latitude": 27.71666667,
  	"longitude": 85.316667
  },{
  	"name": "Amsterdam",
  	"description": "Netherlands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NL",
  	"latitude": 52.35,
  	"longitude": 4.916667
  },{
  	"name": "Noumea",
  	"description": "New Caledonia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NC",
  	"latitude": -22.26666667,
  	"longitude": 166.45
  },{
  	"name": "Wellington",
  	"description": "New Zealand",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NZ",
  	"latitude": -41.3,
  	"longitude": 174.783333
  },{
  	"name": "Managua",
  	"description": "Nicaragua",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NI",
  	"latitude": 12.13333333,
  	"longitude": -86.25
  },{
  	"name": "Niamey",
  	"description": "Niger",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NE",
  	"latitude": 13.51666667,
  	"longitude": 2.116667
  },{
  	"name": "Abuja",
  	"description": "Nigeria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NG",
  	"latitude": 9.083333333,
  	"longitude": 7.533333
  },{
  	"name": "Alofi",
  	"description": "Niue",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NU",
  	"latitude": -19.01666667,
  	"longitude": -169.916667
  },{
  	"name": "Kingston",
  	"description": "Norfolk Island",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NF",
  	"latitude": -29.05,
  	"longitude": 167.966667
  },{
  	"name": "Saipan",
  	"description": "Northern Mariana Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MP",
  	"latitude": 15.2,
  	"longitude": 145.75
  },{
  	"name": "Oslo",
  	"description": "Norway",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NO",
  	"latitude": 59.91666667,
  	"longitude": 10.75
  },{
  	"name": "Muscat",
  	"description": "Oman",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "OM",
  	"latitude": 23.61666667,
  	"longitude": 58.583333
  },{
  	"name": "Islamabad",
  	"description": "Pakistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PK",
  	"latitude": 33.68333333,
  	"longitude": 73.05
  },{
  	"name": "Melekeok",
  	"description": "Palau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PW",
  	"latitude": 7.483333333,
  	"longitude": 134.633333
  },{
  	"name": "Panama City",
  	"description": "Panama",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PA",
  	"latitude": 8.966666667,
  	"longitude": -79.533333
  },{
  	"name": "Port Moresby",
  	"description": "Papua New Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PG",
  	"latitude": -9.45,
  	"longitude": 147.183333
  },{
  	"name": "Asuncion",
  	"description": "Paraguay",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PY",
  	"latitude": -25.26666667,
  	"longitude": -57.666667
  },{
  	"name": "Lima",
  	"description": "Peru",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PE",
  	"latitude": -12.05,
  	"longitude": -77.05
  },{
  	"name": "Manila",
  	"description": "Philippines",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PH",
  	"latitude": 14.6,
  	"longitude": 120.966667
  },{
  	"name": "Adamstown",
  	"description": "Pitcairn Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PN",
  	"latitude": -25.06666667,
  	"longitude": -130.083333
  },{
  	"name": "Warsaw",
  	"description": "Poland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PL",
  	"latitude": 52.25,
  	"longitude": 21
  },{
  	"name": "Lisbon",
  	"description": "Portugal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PT",
  	"latitude": 38.71666667,
  	"longitude": -9.133333
  },{
  	"name": "San Juan",
  	"description": "Puerto Rico",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PR",
  	"latitude": 18.46666667,
  	"longitude": -66.116667
  },{
  	"name": "Doha",
  	"description": "Qatar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "QA",
  	"latitude": 25.28333333,
  	"longitude": 51.533333
  },{
  	"name": "Bucharest",
  	"description": "Romania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RO",
  	"latitude": 44.43333333,
  	"longitude": 26.1
  },{
  	"name": "Moscow",
  	"description": "Russia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RU",
  	"latitude": 55.75,
  	"longitude": 37.6
  },{
  	"name": "Kigali",
  	"description": "Rwanda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RW",
  	"latitude": -1.95,
  	"longitude": 30.05
  },{
  	"name": "Jamestown",
  	"description": "Saint Helena",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SH",
  	"latitude": -15.93333333,
  	"longitude": -5.716667
  },{
  	"name": "Basseterre",
  	"description": "Saint Kitts and Nevis",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KN",
  	"latitude": 17.3,
  	"longitude": -62.716667
  },{
  	"name": "Castries",
  	"description": "Saint Lucia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LC",
  	"latitude": 14,
  	"longitude": -61
  },{
  	"name": "Saint-Pierre",
  	"description": "Saint Pierre and Miquelon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PM",
  	"latitude": 46.76666667,
  	"longitude": -56.183333
  },{
  	"name": "Kingstown",
  	"description": "Saint Vincent and the Grenadines",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VC",
  	"latitude": 13.13333333,
  	"longitude": -61.216667
  },{
  	"name": "Apia",
  	"description": "Samoa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "WS",
  	"latitude": -13.81666667,
  	"longitude": -171.766667
  },{
  	"name": "San Marino",
  	"description": "San Marino",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SM",
  	"latitude": 43.93333333,
  	"longitude": 12.416667
  },{
  	"name": "Sao Tome",
  	"description": "Sao Tome and Principe",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ST",
  	"latitude": 0.333333333,
  	"longitude": 6.733333
  },{
  	"name": "Riyadh",
  	"description": "Saudi Arabia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SA",
  	"latitude": 24.65,
  	"longitude": 46.7
  },{
  	"name": "Dakar",
  	"description": "Senegal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SN",
  	"latitude": 14.73333333,
  	"longitude": -17.633333
  },{
  	"name": "Belgrade",
  	"description": "Serbia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RS",
  	"latitude": 44.83333333,
  	"longitude": 20.5
  },{
  	"name": "Victoria",
  	"description": "Seychelles",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SC",
  	"latitude": -4.616666667,
  	"longitude": 55.45
  },{
  	"name": "Freetown",
  	"description": "Sierra Leone",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SL",
  	"latitude": 8.483333333,
  	"longitude": -13.233333
  },{
  	"name": "Singapore",
  	"description": "Singapore",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SG",
  	"latitude": 1.283333333,
  	"longitude": 103.85
  },{
  	"name": "Bratislava",
  	"description": "Slovakia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SK",
  	"latitude": 48.15,
  	"longitude": 17.116667
  },{
  	"name": "Ljubljana",
  	"description": "Slovenia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SI",
  	"latitude": 46.05,
  	"longitude": 14.516667
  },{
  	"name": "Honiara",
  	"description": "Solomon Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SB",
  	"latitude": -9.433333333,
  	"longitude": 159.95
  },{
  	"name": "Mogadishu",
  	"description": "Somalia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SO",
  	"latitude": 2.066666667,
  	"longitude": 45.333333
  },{
  	"name": "Pretoria",
  	"description": "South Africa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZA",
  	"latitude": -25.7,
  	"longitude": 28.216667
  },{
  	"name": "Madrid",
  	"description": "Spain",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ES",
  	"latitude": 40.4,
  	"longitude": -3.683333
  },{
  	"name": "Colombo",
  	"description": "Sri Lanka",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LK",
  	"latitude": 6.916666667,
  	"longitude": 79.833333
  },{
  	"name": "Khartoum",
  	"description": "Sudan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SD",
  	"latitude": 15.6,
  	"longitude": 32.533333
  },{
  	"name": "Paramaribo",
  	"description": "Suriname",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SR",
  	"latitude": 5.833333333,
  	"longitude": -55.166667
  },{
  	"name": "Longyearbyen",
  	"description": "Svalbard",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SJ",
  	"latitude": 78.21666667,
  	"longitude": 15.633333
  },{
  	"name": "Mbabane",
  	"description": "Swaziland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SZ",
  	"latitude": -26.31666667,
  	"longitude": 31.133333
  },{
  	"name": "Stockholm",
  	"description": "Sweden",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SE",
  	"latitude": 59.33333333,
  	"longitude": 18.05
  },{
  	"name": "Bern",
  	"description": "Switzerland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CH",
  	"latitude": 46.91666667,
  	"longitude": 7.466667
  },{
  	"name": "Damascus",
  	"description": "Syria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SY",
  	"latitude": 33.5,
  	"longitude": 36.3
  },{
  	"name": "Taipei",
  	"description": "Taiwan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TW",
  	"latitude": 25.03333333,
  	"longitude": 121.516667
  },{
  	"name": "Dushanbe",
  	"description": "Tajikistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TJ",
  	"latitude": 38.55,
  	"longitude": 68.766667
  },{
  	"name": "Dar es Salaam",
  	"description": "Tanzania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TZ",
  	"latitude": -6.8,
  	"longitude": 39.283333
  },{
  	"name": "Bangkok",
  	"description": "Thailand",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TH",
  	"latitude": 13.75,
  	"longitude": 100.516667
  },{
  	"name": "Dili",
  	"description": "Timor-Leste",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TL",
  	"latitude": -8.583333333,
  	"longitude": 125.6
  },{
  	"name": "Lome",
  	"description": "Togo",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TG",
  	"latitude": 6.116666667,
  	"longitude": 1.216667
  },{
  	"name": "Nuku'alofa",
  	"description": "Tonga",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TO",
  	"latitude": -21.13333333,
  	"longitude": -175.2
  },{
  	"name": "Port of Spain",
  	"description": "Trinidad and Tobago",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TT",
  	"latitude": 10.65,
  	"longitude": -61.516667
  },{
  	"name": "Tunis",
  	"description": "Tunisia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TN",
  	"latitude": 36.8,
  	"longitude": 10.183333
  },{
  	"name": "Ankara",
  	"description": "Turkey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TR",
  	"latitude": 39.93333333,
  	"longitude": 32.866667
  },{
  	"name": "Ashgabat",
  	"description": "Turkmenistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TM",
  	"latitude": 37.95,
  	"longitude": 58.383333
  },{
  	"name": "Grand Turk",
  	"description": "Turks and Caicos Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TC",
  	"latitude": 21.46666667,
  	"longitude": -71.133333
  },{
  	"name": "Funafuti",
  	"description": "Tuvalu",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TV",
  	"latitude": -8.516666667,
  	"longitude": 179.216667
  },{
  	"name": "Kampala",
  	"description": "Uganda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UG",
  	"latitude": 0.316666667,
  	"longitude": 32.55
  },{
  	"name": "Kyiv",
  	"description": "Ukraine",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UA",
  	"latitude": 50.43333333,
  	"longitude": 30.516667
  },{
  	"name": "Abu Dhabi",
  	"description": "United Arab Emirates",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AE",
  	"latitude": 24.46666667,
  	"longitude": 54.366667
  },{
  	"name": "London",
  	"description": "United Kingdom",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GB",
  	"latitude": 51.5,
  	"longitude": -0.083333
  },{
  	"name": "Washington",
  	"description": "United States",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "US",
    "latitude": 38.883333,
  	"longitude": -77
  },{
  	"name": "Montevideo",
  	"description": "Uruguay",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UY",
  	"latitude": -34.85,
  	"longitude": -56.166667
  },{
  	"name": "Tashkent",
  	"description": "Uzbekistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UZ",
  	"latitude": 41.31666667,
  	"longitude": 69.25
  },{
  	"name": "Port-Vila",
  	"description": "Vanuatu",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VU",
  	"latitude": -17.73333333,
  	"longitude": 168.316667
  },{
  	"name": "Caracas",
  	"description": "Venezuela",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VE",
  	"latitude": 10.48333333,
  	"longitude": -66.866667
  },{
  	"name": "Hanoi",
  	"description": "Vietnam",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VN",
  	"latitude": 21.03333333,
  	"longitude": 105.85
  },{
  	"name": "Charlotte Amalie",
  	"description": "US Virgin Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VI",
  	"latitude": 18.35,
  	"longitude": -64.933333
  },{
  	"name": "Mata-Utu",
  	"description": "Wallis and Futuna",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "WF",
  	"latitude": -13.95,
  	"longitude": -171.933333
  },{
  	"name": "Sanaa",
  	"description": "Yemen",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "YE",
  	"latitude": 15.35,
  	"longitude": 44.2
  },{
  	"name": "Lusaka",
  	"description": "Zambia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZM",
  	"latitude": -15.41666667,
  	"longitude": 28.283333
  },{
  	"name": "Harare",
  	"description": "Zimbabwe",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZW",
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
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AD",
  	"latitude": 42.546245,
  	"longitude": 1.601554
  }, {
  	"name": "United Arab Emirates",
  	"description": "United Arab Emirates",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AE",
  	"latitude": 23.424076,
  	"longitude": 53.847818
  }, {
  	"name": "Afghanistan",
  	"description": "Afghanistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AF",
  	"latitude": 33.93911,
  	"longitude": 67.709953
  }, {
  	"name": "Antigua and Barbuda",
  	"description": "Antigua and Barbuda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AG",
  	"latitude": 17.060816,
  	"longitude": -61.796428
  }, {
  	"name": "Anguilla",
  	"description": "Anguilla",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AI",
  	"latitude": 18.220554,
  	"longitude": -63.068615
  }, {
  	"name": "Albania",
  	"description": "Albania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AL",
  	"latitude": 41.153332,
  	"longitude": 20.168331
  }, {
  	"name": "Armenia",
  	"description": "Armenia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AM",
  	"latitude": 40.069099,
  	"longitude": 45.038189
  }, {
  	"name": "Netherlands Antilles",
  	"description": "Netherlands Antilles",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AN",
  	"latitude": 12.226079,
  	"longitude": -69.060087
  }, {
  	"name": "Angola",
  	"description": "Angola",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AO",
  	"latitude": -11.202692,
  	"longitude": 17.873887
  }, {
  	"name": "Argentina",
  	"description": "Argentina",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AR",
  	"latitude": -38.416097,
  	"longitude": -63.616672
  }, {
  	"name": "American Samoa",
  	"description": "American Samoa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AS",
  	"latitude": -14.270972,
  	"longitude": -170.132217
  }, {
  	"name": "Austria",
  	"description": "Austria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AT",
  	"latitude": 47.516231,
  	"longitude": 14.550072
  }, {
  	"name": "Australia",
  	"description": "Australia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AU",
  	"latitude": -25.274398,
  	"longitude": 133.775136
  }, {
  	"name": "Aruba",
  	"description": "Aruba",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AW",
  	"latitude": 12.52111,
  	"longitude": -69.968338
  }, {
  	"name": "Azerbaijan",
  	"description": "Azerbaijan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "AZ",
  	"latitude": 40.143105,
  	"longitude": 47.576927
  }, {
  	"name": "Bosnia and Herzegovina",
  	"description": "Bosnia and Herzegovina",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BA",
  	"latitude": 43.915886,
  	"longitude": 17.679076
  }, {
  	"name": "Barbados",
  	"description": "Barbados",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BB",
  	"latitude": 13.193887,
  	"longitude": -59.543198
  }, {
  	"name": "Bangladesh",
  	"description": "Bangladesh",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BD",
  	"latitude": 23.684994,
  	"longitude": 90.356331
  }, {
  	"name": "Belgium",
  	"description": "Belgium",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BE",
  	"latitude": 50.503887,
  	"longitude": 4.469936
  }, {
  	"name": "Burkina Faso",
  	"description": "Burkina Faso",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BF",
  	"latitude": 12.238333,
  	"longitude": -1.561593
  }, {
  	"name": "Bulgaria",
  	"description": "Bulgaria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BG",
  	"latitude": 42.733883,
  	"longitude": 25.48583
  }, {
  	"name": "Bahrain",
  	"description": "Bahrain",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BH",
  	"latitude": 25.930414,
  	"longitude": 50.637772
  }, {
  	"name": "Burundi",
  	"description": "Burundi",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BI",
  	"latitude": -3.373056,
  	"longitude": 29.918886
  }, {
  	"name": "Benin",
  	"description": "Benin",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BJ",
  	"latitude": 9.30769,
  	"longitude": 2.315834
  }, {
  	"name": "Bermuda",
  	"description": "Bermuda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BM",
  	"latitude": 32.321384,
  	"longitude": -64.75737
  }, {
  	"name": "Brunei",
  	"description": "Brunei",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BN",
  	"latitude": 4.535277,
  	"longitude": 114.727669
  }, {
  	"name": "Bolivia",
  	"description": "Bolivia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BO",
  	"latitude": -16.290154,
  	"longitude": -63.588653
  }, {
  	"name": "Brazil",
  	"description": "Brazil",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BR",
  	"latitude": -14.235004,
  	"longitude": -51.92528
  }, {
  	"name": "Bahamas",
  	"description": "Bahamas",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BS",
  	"latitude": 25.03428,
  	"longitude": -77.39628
  }, {
  	"name": "Bhutan",
  	"description": "Bhutan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BT",
  	"latitude": 27.514162,
  	"longitude": 90.433601
  }, {
  	"name": "Bouvet Island",
  	"description": "Bouvet Island",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BV",
  	"latitude": -54.423199,
  	"longitude": 3.413194
  }, {
  	"name": "Botswana",
  	"description": "Botswana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BW",
  	"latitude": -22.328474,
  	"longitude": 24.684866
  }, {
  	"name": "Belarus",
  	"description": "Belarus",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BY",
  	"latitude": 53.709807,
  	"longitude": 27.953389
  }, {
  	"name": "Belize",
  	"description": "Belize",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "BZ",
  	"latitude": 17.189877,
  	"longitude": -88.49765
  }, {
  	"name": "Canada",
  	"description": "Canada",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CA",
  	"latitude": 56.130366,
  	"longitude": -106.346771
  }, {
  	"name": "Cocos [Keeling] Islands",
  	"description": "Cocos [Keeling] Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CC",
  	"latitude": -12.164165,
  	"longitude": 96.870956
  }, {
  	"name": "Congo [DRC]",
  	"description": "Congo [DRC]",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CD",
  	"latitude": -4.038333,
  	"longitude": 21.758664
  }, {
  	"name": "Central African Republic",
  	"description": "Central African Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CF",
  	"latitude": 6.611111,
  	"longitude": 20.939444
  }, {
  	"name": "Congo [Republic]",
  	"description": "Congo [Republic]",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CG",
  	"latitude": -0.228021,
  	"longitude": 15.827659
  }, {
  	"name": "Switzerland",
  	"description": "Switzerland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CH",
  	"latitude": 46.818188,
  	"longitude": 8.227512
  }, {
  	"name": "Côte d'Ivoire",
  	"description": "Côte d'Ivoire",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CI",
  	"latitude": 7.539989,
  	"longitude": -5.54708
  }, {
  	"name": "Cook Islands",
  	"description": "Cook Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CK",
  	"latitude": -21.236736,
  	"longitude": -159.777671
  }, {
  	"name": "Chile",
  	"description": "Chile",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CL",
  	"latitude": -35.675147,
  	"longitude": -71.542969
  }, {
  	"name": "Cameroon",
  	"description": "Cameroon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CM",
  	"latitude": 7.369722,
  	"longitude": 12.354722
  }, {
  	"name": "China",
  	"description": "China",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CN",
  	"latitude": 35.86166,
  	"longitude": 104.195397
  }, {
  	"name": "Colombia",
  	"description": "Colombia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CO",
  	"latitude": 4.570868,
  	"longitude": -74.297333
  }, {
  	"name": "Costa Rica",
  	"description": "Costa Rica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CR",
  	"latitude": 9.748917,
  	"longitude": -83.753428
  }, {
  	"name": "Cuba",
  	"description": "Cuba",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CU",
  	"latitude": 21.521757,
  	"longitude": -77.781167
  }, {
  	"name": "Cape Verde",
  	"description": "Cape Verde",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CV",
  	"latitude": 16.002082,
  	"longitude": -24.013197
  }, {
  	"name": "Christmas Island",
  	"description": "Christmas Island",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CX",
  	"latitude": -10.447525,
  	"longitude": 105.690449
  }, {
  	"name": "Cyprus",
  	"description": "Cyprus",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CY",
  	"latitude": 35.126413,
  	"longitude": 33.429859
  }, {
  	"name": "Czech Republic",
  	"description": "Czech Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "CZ",
  	"latitude": 49.817492,
  	"longitude": 15.472962
  }, {
  	"name": "Germany",
  	"description": "Germany",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DE",
  	"latitude": 51.165691,
  	"longitude": 10.451526
  }, {
  	"name": "Djibouti",
  	"description": "Djibouti",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DJ",
  	"latitude": 11.825138,
  	"longitude": 42.590275
  }, {
  	"name": "Denmark",
  	"description": "Denmark",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DK",
  	"latitude": 56.26392,
  	"longitude": 9.501785
  }, {
  	"name": "Dominica",
  	"description": "Dominica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DM",
  	"latitude": 15.414999,
  	"longitude": -61.370976
  }, {
  	"name": "Dominican Republic",
  	"description": "Dominican Republic",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DO",
  	"latitude": 18.735693,
  	"longitude": -70.162651
  }, {
  	"name": "Algeria",
  	"description": "Algeria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "DZ",
  	"latitude": 28.033886,
  	"longitude": 1.659626
  }, {
  	"name": "Ecuador",
  	"description": "Ecuador",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EC",
  	"latitude": -1.831239,
  	"longitude": -78.183406
  }, {
  	"name": "Estonia",
  	"description": "Estonia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EE",
  	"latitude": 58.595272,
  	"longitude": 25.013607
  }, {
  	"name": "Egypt",
  	"description": "Egypt",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EG",
  	"latitude": 26.820553,
  	"longitude": 30.802498
  }, {
  	"name": "Western Sahara",
  	"description": "Western Sahara",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "EH",
  	"latitude": 24.215527,
  	"longitude": -12.885834
  }, {
  	"name": "Eritrea",
  	"description": "Eritrea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ER",
  	"latitude": 15.179384,
  	"longitude": 39.782334
  }, {
  	"name": "Spain",
  	"description": "Spain",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ES",
  	"latitude": 40.463667,
  	"longitude": -3.74922
  }, {
  	"name": "Ethiopia",
  	"description": "Ethiopia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ET",
  	"latitude": 9.145,
  	"longitude": 40.489673
  }, {
  	"name": "Finland",
  	"description": "Finland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FI",
  	"latitude": 61.92411,
  	"longitude": 25.748151
  }, {
  	"name": "Fiji",
  	"description": "Fiji",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FJ",
  	"latitude": -16.578193,
  	"longitude": 179.414413
  }, {
  	"name": "Falkland Islands [Islas Malvinas]",
  	"description": "Falkland Islands [Islas Malvinas]",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FK",
  	"latitude": -51.796253,
  	"longitude": -59.523613
  }, {
  	"name": "Micronesia",
  	"description": "Micronesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FM",
  	"latitude": 7.425554,
  	"longitude": 150.550812
  }, {
  	"name": "Faroe Islands",
  	"description": "Faroe Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FO",
  	"latitude": 61.892635,
  	"longitude": -6.911806
  }, {
  	"name": "France",
  	"description": "France",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "FR",
  	"latitude": 46.227638,
  	"longitude": 2.213749
  }, {
  	"name": "Gabon",
  	"description": "Gabon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GA",
  	"latitude": -0.803689,
  	"longitude": 11.609444
  }, {
  	"name": "United Kingdom",
  	"description": "United Kingdom",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GB",
  	"latitude": 55.378051,
  	"longitude": -3.435973
  }, {
  	"name": "Grenada",
  	"description": "Grenada",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GD",
  	"latitude": 12.262776,
  	"longitude": -61.604171
  }, {
  	"name": "Georgia",
  	"description": "Georgia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GE",
  	"latitude": 42.315407,
  	"longitude": 43.356892
  }, {
  	"name": "French Guiana",
  	"description": "French Guiana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GF",
  	"latitude": 3.933889,
  	"longitude": -53.125782
  }, {
  	"name": "Guernsey",
  	"description": "Guernsey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GG",
  	"latitude": 49.465691,
  	"longitude": -2.585278
  }, {
  	"name": "Ghana",
  	"description": "Ghana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GH",
  	"latitude": 7.946527,
  	"longitude": -1.023194
  }, {
  	"name": "Gibraltar",
  	"description": "Gibraltar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GI",
  	"latitude": 36.137741,
  	"longitude": -5.345374
  }, {
  	"name": "Greenland",
  	"description": "Greenland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GL",
  	"latitude": 71.706936,
  	"longitude": -42.604303
  }, {
  	"name": "Gambia",
  	"description": "Gambia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GM",
  	"latitude": 13.443182,
  	"longitude": -15.310139
  }, {
  	"name": "Guinea",
  	"description": "Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GN",
  	"latitude": 9.945587,
  	"longitude": -9.696645
  }, {
  	"name": "Guadeloupe",
  	"description": "Guadeloupe",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GP",
  	"latitude": 16.995971,
  	"longitude": -62.067641
  }, {
  	"name": "Equatorial Guinea",
  	"description": "Equatorial Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GQ",
  	"latitude": 1.650801,
  	"longitude": 10.267895
  }, {
  	"name": "Greece",
  	"description": "Greece",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GR",
  	"latitude": 39.074208,
  	"longitude": 21.824312
  }, {
  	"name": "South Georgia and the South Sandwich Islands",
  	"description": "South Georgia and the South Sandwich Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GS",
  	"latitude": -54.429579,
  	"longitude": -36.587909
  }, {
  	"name": "Guatemala",
  	"description": "Guatemala",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GT",
  	"latitude": 15.783471,
  	"longitude": -90.230759
  }, {
  	"name": "Guam",
  	"description": "Guam",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GU",
  	"latitude": 13.444304,
  	"longitude": 144.793731
  }, {
  	"name": "Guinea-Bissau",
  	"description": "Guinea-Bissau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GW",
  	"latitude": 11.803749,
  	"longitude": -15.180413
  }, {
  	"name": "Guyana",
  	"description": "Guyana",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GY",
  	"latitude": 4.860416,
  	"longitude": -58.93018
  }, {
  	"name": "Gaza Strip",
  	"description": "Gaza Strip",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "GZ",
  	"latitude": 31.354676,
  	"longitude": 34.308825
  }, {
  	"name": "Hong Kong",
  	"description": "Hong Kong",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HK",
  	"latitude": 22.396428,
  	"longitude": 114.109497
  }, {
  	"name": "Heard Island and McDonald Islands",
  	"description": "Heard Island and McDonald Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HM",
  	"latitude": -53.08181,
  	"longitude": 73.504158
  }, {
  	"name": "Honduras",
  	"description": "Honduras",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HN",
  	"latitude": 15.199999,
  	"longitude": -86.241905
  }, {
  	"name": "Croatia",
  	"description": "Croatia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HR",
  	"latitude": 45.1,
  	"longitude": 15.2
  }, {
  	"name": "Haiti",
  	"description": "Haiti",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HT",
  	"latitude": 18.971187,
  	"longitude": -72.285215
  }, {
  	"name": "Hungary",
  	"description": "Hungary",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "HU",
  	"latitude": 47.162494,
  	"longitude": 19.503304
  }, {
  	"name": "Indonesia",
  	"description": "Indonesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ID",
  	"latitude": -0.789275,
  	"longitude": 113.921327
  }, {
  	"name": "Ireland",
  	"description": "Ireland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IE",
  	"latitude": 53.41291,
  	"longitude": -8.24389
  }, {
  	"name": "Israel",
  	"description": "Israel",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IL",
  	"latitude": 31.046051,
  	"longitude": 34.851612
  }, {
  	"name": "Isle of Man",
  	"description": "Isle of Man",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IM",
  	"latitude": 54.236107,
  	"longitude": -4.548056
  }, {
  	"name": "India",
  	"description": "India",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IN",
  	"latitude": 20.593684,
  	"longitude": 78.96288
  }, {
  	"name": "British Indian Ocean Territory",
  	"description": "British Indian Ocean Territory",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IO",
  	"latitude": -6.343194,
  	"longitude": 71.876519
  }, {
  	"name": "Iraq",
  	"description": "Iraq",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IQ",
  	"latitude": 33.223191,
  	"longitude": 43.679291
  }, {
  	"name": "Iran",
  	"description": "Iran",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IR",
  	"latitude": 32.427908,
  	"longitude": 53.688046
  }, {
  	"name": "Iceland",
  	"description": "Iceland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IS",
  	"latitude": 64.963051,
  	"longitude": -19.020835
  }, {
  	"name": "Italy",
  	"description": "Italy",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "IT",
  	"latitude": 41.87194,
  	"longitude": 12.56738
  }, {
  	"name": "Jersey",
  	"description": "Jersey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JE",
  	"latitude": 49.214439,
  	"longitude": -2.13125
  }, {
  	"name": "Jamaica",
  	"description": "Jamaica",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JM",
  	"latitude": 18.109581,
  	"longitude": -77.297508
  }, {
  	"name": "Jordan",
  	"description": "Jordan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JO",
  	"latitude": 30.585164,
  	"longitude": 36.238414
  }, {
  	"name": "Japan",
  	"description": "Japan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "JP",
  	"latitude": 36.204824,
  	"longitude": 138.252924
  }, {
  	"name": "Kenya",
  	"description": "Kenya",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KE",
  	"latitude": -0.023559,
  	"longitude": 37.906193
  }, {
  	"name": "Kyrgyzstan",
  	"description": "Kyrgyzstan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KG",
  	"latitude": 41.20438,
  	"longitude": 74.766098
  }, {
  	"name": "Cambodia",
  	"description": "Cambodia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KH",
  	"latitude": 12.565679,
  	"longitude": 104.990963
  }, {
  	"name": "Kiribati",
  	"description": "Kiribati",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KI",
  	"latitude": -3.370417,
  	"longitude": -168.734039
  }, {
  	"name": "Comoros",
  	"description": "Comoros",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KM",
  	"latitude": -11.875001,
  	"longitude": 43.872219
  }, {
  	"name": "Saint Kitts and Nevis",
  	"description": "Saint Kitts and Nevis",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KN",
  	"latitude": 17.357822,
  	"longitude": -62.782998
  }, {
  	"name": "North Korea",
  	"description": "North Korea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KP",
  	"latitude": 40.339852,
  	"longitude": 127.510093
  }, {
  	"name": "South Korea",
  	"description": "South Korea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KR",
  	"latitude": 35.907757,
  	"longitude": 127.766922
  }, {
  	"name": "Kuwait",
  	"description": "Kuwait",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KW",
  	"latitude": 29.31166,
  	"longitude": 47.481766
  }, {
  	"name": "Cayman Islands",
  	"description": "Cayman Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KY",
  	"latitude": 19.513469,
  	"longitude": -80.566956
  }, {
  	"name": "Kazakhstan",
  	"description": "Kazakhstan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "KZ",
  	"latitude": 48.019573,
  	"longitude": 66.923684
  }, {
  	"name": "Laos",
  	"description": "Laos",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LA",
  	"latitude": 19.85627,
  	"longitude": 102.495496
  }, {
  	"name": "Lebanon",
  	"description": "Lebanon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LB",
  	"latitude": 33.854721,
  	"longitude": 35.862285
  }, {
  	"name": "Saint Lucia",
  	"description": "Saint Lucia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LC",
  	"latitude": 13.909444,
  	"longitude": -60.978893
  }, {
  	"name": "Liechtenstein",
  	"description": "Liechtenstein",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LI",
  	"latitude": 47.166,
  	"longitude": 9.555373
  }, {
  	"name": "Sri Lanka",
  	"description": "Sri Lanka",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LK",
  	"latitude": 7.873054,
  	"longitude": 80.771797
  }, {
  	"name": "Liberia",
  	"description": "Liberia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LR",
  	"latitude": 6.428055,
  	"longitude": -9.429499
  }, {
  	"name": "Lesotho",
  	"description": "Lesotho",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LS",
  	"latitude": -29.609988,
  	"longitude": 28.233608
  }, {
  	"name": "Lithuania",
  	"description": "Lithuania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LT",
  	"latitude": 55.169438,
  	"longitude": 23.881275
  }, {
  	"name": "Luxembourg",
  	"description": "Luxembourg",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LU",
  	"latitude": 49.815273,
  	"longitude": 6.129583
  }, {
  	"name": "Latvia",
  	"description": "Latvia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LV",
  	"latitude": 56.879635,
  	"longitude": 24.603189
  }, {
  	"name": "Libya",
  	"description": "Libya",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "LY",
  	"latitude": 26.3351,
  	"longitude": 17.228331
  }, {
  	"name": "Morocco",
  	"description": "Morocco",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MA",
  	"latitude": 31.791702,
  	"longitude": -7.09262
  }, {
  	"name": "Monaco",
  	"description": "Monaco",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MC",
  	"latitude": 43.750298,
  	"longitude": 7.412841
  }, {
  	"name": "Moldova",
  	"description": "Moldova",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MD",
  	"latitude": 47.411631,
  	"longitude": 28.369885
  }, {
  	"name": "Montenegro",
  	"description": "Montenegro",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ME",
  	"latitude": 42.708678,
  	"longitude": 19.37439
  }, {
  	"name": "Madagascar",
  	"description": "Madagascar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MG",
  	"latitude": -18.766947,
  	"longitude": 46.869107
  }, {
  	"name": "Marshall Islands",
  	"description": "Marshall Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MH",
  	"latitude": 7.131474,
  	"longitude": 171.184478
  }, {
  	"name": "Macedonia [FYROM]",
  	"description": "Macedonia [FYROM]",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MK",
  	"latitude": 41.608635,
  	"longitude": 21.745275
  }, {
  	"name": "Mali",
  	"description": "Mali",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ML",
  	"latitude": 17.570692,
  	"longitude": -3.996166
  }, {
  	"name": "Myanmar [Burma]",
  	"description": "Myanmar [Burma]",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MM",
  	"latitude": 21.913965,
  	"longitude": 95.956223
  }, {
  	"name": "Mongolia",
  	"description": "Mongolia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MN",
  	"latitude": 46.862496,
  	"longitude": 103.846656
  }, {
  	"name": "Macau",
  	"description": "Macau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MO",
  	"latitude": 22.198745,
  	"longitude": 113.543873
  }, {
  	"name": "Northern Mariana Islands",
  	"description": "Northern Mariana Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MP",
  	"latitude": 17.33083,
  	"longitude": 145.38469
  }, {
  	"name": "Martinique",
  	"description": "Martinique",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MQ",
  	"latitude": 14.641528,
  	"longitude": -61.024174
  }, {
  	"name": "Mauritania",
  	"description": "Mauritania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MR",
  	"latitude": 21.00789,
  	"longitude": -10.940835
  }, {
  	"name": "Montserrat",
  	"description": "Montserrat",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MS",
  	"latitude": 16.742498,
  	"longitude": -62.187366
  }, {
  	"name": "Malta",
  	"description": "Malta",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MT",
  	"latitude": 35.937496,
  	"longitude": 14.375416
  }, {
  	"name": "Mauritius",
  	"description": "Mauritius",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MU",
  	"latitude": -20.348404,
  	"longitude": 57.552152
  }, {
  	"name": "Maldives",
  	"description": "Maldives",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MV",
  	"latitude": 3.202778,
  	"longitude": 73.22068
  }, {
  	"name": "Malawi",
  	"description": "Malawi",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MW",
  	"latitude": -13.254308,
  	"longitude": 34.301525
  }, {
  	"name": "Mexico",
  	"description": "Mexico",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MX",
  	"latitude": 23.634501,
  	"longitude": -102.552784
  }, {
  	"name": "Malaysia",
  	"description": "Malaysia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MY",
  	"latitude": 4.210484,
  	"longitude": 101.975766
  }, {
  	"name": "Mozambique",
  	"description": "Mozambique",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "MZ",
  	"latitude": -18.665695,
  	"longitude": 35.529562
  }, {
  	"name": "Namibia",
  	"description": "Namibia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NA",
  	"latitude": -22.95764,
  	"longitude": 18.49041
  }, {
  	"name": "New Caledonia",
  	"description": "New Caledonia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NC",
  	"latitude": -20.904305,
  	"longitude": 165.618042
  }, {
  	"name": "Niger",
  	"description": "Niger",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NE",
  	"latitude": 17.607789,
  	"longitude": 8.081666
  }, {
  	"name": "Norfolk Island",
  	"description": "Norfolk Island",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NF",
  	"latitude": -29.040835,
  	"longitude": 167.954712
  }, {
  	"name": "Nigeria",
  	"description": "Nigeria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NG",
  	"latitude": 9.081999,
  	"longitude": 8.675277
  }, {
  	"name": "Nicaragua",
  	"description": "Nicaragua",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NI",
  	"latitude": 12.865416,
  	"longitude": -85.207229
  }, {
  	"name": "Netherlands",
  	"description": "Netherlands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NL",
  	"latitude": 52.132633,
  	"longitude": 5.291266
  }, {
  	"name": "Norway",
  	"description": "Norway",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NO",
  	"latitude": 60.472024,
  	"longitude": 8.468946
  }, {
  	"name": "Nepal",
  	"description": "Nepal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NP",
  	"latitude": 28.394857,
  	"longitude": 84.124008
  }, {
  	"name": "Nauru",
  	"description": "Nauru",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NR",
  	"latitude": -0.522778,
  	"longitude": 166.931503
  }, {
  	"name": "Niue",
  	"description": "Niue",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NU",
  	"latitude": -19.054445,
  	"longitude": -169.867233
  }, {
  	"name": "New Zealand",
  	"description": "New Zealand",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "NZ",
  	"latitude": -40.900557,
  	"longitude": 174.885971
  }, {
  	"name": "Oman",
  	"description": "Oman",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "OM",
  	"latitude": 21.512583,
  	"longitude": 55.923255
  }, {
  	"name": "Panama",
  	"description": "Panama",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PA",
  	"latitude": 8.537981,
  	"longitude": -80.782127
  }, {
  	"name": "Peru",
  	"description": "Peru",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PE",
  	"latitude": -9.189967,
  	"longitude": -75.015152
  }, {
  	"name": "French Polynesia",
  	"description": "French Polynesia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PF",
  	"latitude": -17.679742,
  	"longitude": -149.406843
  }, {
  	"name": "Papua New Guinea",
  	"description": "Papua New Guinea",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PG",
  	"latitude": -6.314993,
  	"longitude": 143.95555
  }, {
  	"name": "Philippines",
  	"description": "Philippines",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PH",
  	"latitude": 12.879721,
  	"longitude": 121.774017
  }, {
  	"name": "Pakistan",
  	"description": "Pakistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PK",
  	"latitude": 30.375321,
  	"longitude": 69.345116
  }, {
  	"name": "Poland",
  	"description": "Poland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PL",
  	"latitude": 51.919438,
  	"longitude": 19.145136
  }, {
  	"name": "Saint Pierre and Miquelon",
  	"description": "Saint Pierre and Miquelon",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PM",
  	"latitude": 46.941936,
  	"longitude": -56.27111
  }, {
  	"name": "Pitcairn Islands",
  	"description": "Pitcairn Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PN",
  	"latitude": -24.703615,
  	"longitude": -127.439308
  }, {
  	"name": "Puerto Rico",
  	"description": "Puerto Rico",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PR",
  	"latitude": 18.220833,
  	"longitude": -66.590149
  }, {
  	"name": "Palestinian Territories",
  	"description": "Palestinian Territories",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PS",
  	"latitude": 31.952162,
  	"longitude": 35.233154
  }, {
  	"name": "Portugal",
  	"description": "Portugal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PT",
  	"latitude": 39.399872,
  	"longitude": -8.224454
  }, {
  	"name": "Palau",
  	"description": "Palau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PW",
  	"latitude": 7.51498,
  	"longitude": 134.58252
  }, {
  	"name": "Paraguay",
  	"description": "Paraguay",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "PY",
  	"latitude": -23.442503,
  	"longitude": -58.443832
  }, {
  	"name": "Qatar",
  	"description": "Qatar",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "QA",
  	"latitude": 25.354826,
  	"longitude": 51.183884
  }, {
  	"name": "Réunion",
  	"description": "Réunion",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RE",
  	"latitude": -21.115141,
  	"longitude": 55.536384
  }, {
  	"name": "Romania",
  	"description": "Romania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RO",
  	"latitude": 45.943161,
  	"longitude": 24.96676
  }, {
  	"name": "Serbia",
  	"description": "Serbia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RS",
  	"latitude": 44.016521,
  	"longitude": 21.005859
  }, {
  	"name": "Russia",
  	"description": "Russia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RU",
  	"latitude": 61.52401,
  	"longitude": 105.318756
  }, {
  	"name": "Rwanda",
  	"description": "Rwanda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "RW",
  	"latitude": -1.940278,
  	"longitude": 29.873888
  }, {
  	"name": "Saudi Arabia",
  	"description": "Saudi Arabia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SA",
  	"latitude": 23.885942,
  	"longitude": 45.079162
  }, {
  	"name": "Solomon Islands",
  	"description": "Solomon Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SB",
  	"latitude": -9.64571,
  	"longitude": 160.156194
  }, {
  	"name": "Seychelles",
  	"description": "Seychelles",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SC",
  	"latitude": -4.679574,
  	"longitude": 55.491977
  }, {
  	"name": "Sudan",
  	"description": "Sudan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SD",
  	"latitude": 12.862807,
  	"longitude": 30.217636
  }, {
  	"name": "Sweden",
  	"description": "Sweden",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SE",
  	"latitude": 60.128161,
  	"longitude": 18.643501
  }, {
  	"name": "Singapore",
  	"description": "Singapore",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SG",
  	"latitude": 1.352083,
  	"longitude": 103.819836
  }, {
  	"name": "Saint Helena",
  	"description": "Saint Helena",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SH",
  	"latitude": -24.143474,
  	"longitude": -10.030696
  }, {
  	"name": "Slovenia",
  	"description": "Slovenia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SI",
  	"latitude": 46.151241,
  	"longitude": 14.995463
  }, {
  	"name": "Svalbard and Jan Mayen",
  	"description": "Svalbard and Jan Mayen",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SJ",
  	"latitude": 77.553604,
  	"longitude": 23.670272
  }, {
  	"name": "Slovakia",
  	"description": "Slovakia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SK",
  	"latitude": 48.669026,
  	"longitude": 19.699024
  }, {
  	"name": "Sierra Leone",
  	"description": "Sierra Leone",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SL",
  	"latitude": 8.460555,
  	"longitude": -11.779889
  }, {
  	"name": "San Marino",
  	"description": "San Marino",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SM",
  	"latitude": 43.94236,
  	"longitude": 12.457777
  }, {
  	"name": "Senegal",
  	"description": "Senegal",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SN",
  	"latitude": 14.497401,
  	"longitude": -14.452362
  }, {
  	"name": "Somalia",
  	"description": "Somalia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SO",
  	"latitude": 5.152149,
  	"longitude": 46.199616
  }, {
  	"name": "Suriname",
  	"description": "Suriname",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SR",
  	"latitude": 3.919305,
  	"longitude": -56.027783
  }, {
  	"name": "São Tomé and Príncipe",
  	"description": "São Tomé and Príncipe",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ST",
  	"latitude": 0.18636,
  	"longitude": 6.613081
  }, {
  	"name": "El Salvador",
  	"description": "El Salvador",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SV",
  	"latitude": 13.794185,
  	"longitude": -88.89653
  }, {
  	"name": "Syria",
  	"description": "Syria",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SY",
  	"latitude": 34.802075,
  	"longitude": 38.996815
  }, {
  	"name": "Swaziland",
  	"description": "Swaziland",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "SZ",
  	"latitude": -26.522503,
  	"longitude": 31.465866
  }, {
  	"name": "Turks and Caicos Islands",
  	"description": "Turks and Caicos Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TC",
  	"latitude": 21.694025,
  	"longitude": -71.797928
  }, {
  	"name": "Chad",
  	"description": "Chad",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TD",
  	"latitude": 15.454166,
  	"longitude": 18.732207
  }, {
  	"name": "French Southern Territories",
  	"description": "French Southern Territories",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TF",
  	"latitude": -49.280366,
  	"longitude": 69.348557
  }, {
  	"name": "Togo",
  	"description": "Togo",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TG",
  	"latitude": 8.619543,
  	"longitude": 0.824782
  }, {
  	"name": "Thailand",
  	"description": "Thailand",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TH",
  	"latitude": 15.870032,
  	"longitude": 100.992541
  }, {
  	"name": "Tajikistan",
  	"description": "Tajikistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TJ",
  	"latitude": 38.861034,
  	"longitude": 71.276093
  }, {
  	"name": "Tokelau",
  	"description": "Tokelau",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TK",
  	"latitude": -8.967363,
  	"longitude": -171.855881
  }, {
  	"name": "Timor-Leste",
  	"description": "Timor-Leste",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TL",
  	"latitude": -8.874217,
  	"longitude": 125.727539
  }, {
  	"name": "Turkmenistan",
  	"description": "Turkmenistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TM",
  	"latitude": 38.969719,
  	"longitude": 59.556278
  }, {
  	"name": "Tunisia",
  	"description": "Tunisia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TN",
  	"latitude": 33.886917,
  	"longitude": 9.537499
  }, {
  	"name": "Tonga",
  	"description": "Tonga",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TO",
  	"latitude": -21.178986,
  	"longitude": -175.198242
  }, {
  	"name": "Turkey",
  	"description": "Turkey",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TR",
  	"latitude": 38.963745,
  	"longitude": 35.243322
  }, {
  	"name": "Trinidad and Tobago",
  	"description": "Trinidad and Tobago",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TT",
  	"latitude": 10.691803,
  	"longitude": -61.222503
  }, {
  	"name": "Tuvalu",
  	"description": "Tuvalu",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TV",
  	"latitude": -7.109535,
  	"longitude": 177.64933
  }, {
  	"name": "Taiwan",
  	"description": "Taiwan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TW",
  	"latitude": 23.69781,
  	"longitude": 120.960515
  }, {
  	"name": "Tanzania",
  	"description": "Tanzania",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "TZ",
  	"latitude": -6.369028,
  	"longitude": 34.888822
  }, {
  	"name": "Ukraine",
  	"description": "Ukraine",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UA",
  	"latitude": 48.379433,
  	"longitude": 31.16558
  }, {
  	"name": "Uganda",
  	"description": "Uganda",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UG",
  	"latitude": 1.373333,
  	"longitude": 32.290275
  }, {
  	"name": "United States",
  	"description": "United States",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "US",
  	"latitude": 37.09024,
  	"longitude": -95.712891
  }, {
  	"name": "Uruguay",
  	"description": "Uruguay",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UY",
  	"latitude": -32.522779,
  	"longitude": -55.765835
  }, {
  	"name": "Uzbekistan",
  	"description": "Uzbekistan",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "UZ",
  	"latitude": 41.377491,
  	"longitude": 64.585262
  }, {
  	"name": "Vatican City",
  	"description": "Vatican City",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VA",
  	"latitude": 41.902916,
  	"longitude": 12.453389
  }, {
  	"name": "Saint Vincent and the Grenadines",
  	"description": "Saint Vincent and the Grenadines",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VC",
  	"latitude": 12.984305,
  	"longitude": -61.287228
  }, {
  	"name": "Venezuela",
  	"description": "Venezuela",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VE",
  	"latitude": 6.42375,
  	"longitude": -66.58973
  }, {
  	"name": "British Virgin Islands",
  	"description": "British Virgin Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VG",
  	"latitude": 18.420695,
  	"longitude": -64.639968
  }, {
  	"name": "U.S. Virgin Islands",
  	"description": "U.S. Virgin Islands",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VI",
  	"latitude": 18.335765,
  	"longitude": -64.896335
  }, {
  	"name": "Vietnam",
  	"description": "Vietnam",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VN",
  	"latitude": 14.058324,
  	"longitude": 108.277199
  }, {
  	"name": "Vanuatu",
  	"description": "Vanuatu",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "VU",
  	"latitude": -15.376706,
  	"longitude": 166.959158
  }, {
  	"name": "Wallis and Futuna",
  	"description": "Wallis and Futuna",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "WF",
  	"latitude": -13.768752,
  	"longitude": -177.156097
  }, {
  	"name": "Samoa",
  	"description": "Samoa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "WS",
  	"latitude": -13.759029,
  	"longitude": -172.104629
  }, {
  	"name": "Kosovo",
  	"description": "Kosovo",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "XK",
  	"latitude": 42.602636,
  	"longitude": 20.902977
  }, {
  	"name": "Yemen",
  	"description": "Yemen",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "YE",
  	"latitude": 15.552727,
  	"longitude": 48.516388
  }, {
  	"name": "Mayotte",
  	"description": "Mayotte",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "YT",
  	"latitude": -12.8275,
  	"longitude": 45.166244
  }, {
  	"name": "South Africa",
  	"description": "South Africa",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZA",
  	"latitude": -30.559482,
  	"longitude": 22.937506
  }, {
  	"name": "Zambia",
  	"description": "Zambia",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZM",
  	"latitude": -13.133897,
  	"longitude": 27.849332
  }, {
  	"name": "Zimbabwe",
  	"description": "Zimbabwe",
  	"cost": 0,
  	"happiness": 0,
  	"days": 0,
  	"country": "ZW",
  	"latitude": -19.015438,
  	"longitude": 29.154857
  }
];
