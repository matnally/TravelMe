
function defThousandsDelimiter(intNumber) {
  //delimits a number to thousands using a comma
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&#44;");
} //function

function defUpdateElement(elemName, strTemp) {
  //update an element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function defCalcPercentage(intValue, intTotal) {
   return Math.floor((100 * intValue) / intTotal);
} //function

function defRemoveDuplicatesArray(arrTemp) {
  return arrTemp.filter(function(value, index){ return arrTemp.indexOf(value) == index }); //remove duplicates
} //function
function defRemoveDuplicatesArrayByPropertyName(originalArray, prop) {
  //removes all but last duplicate of prop
  var newArray = [];
  var lookupObject  = {};
  for(var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  } //for
  for(i in lookupObject) {
    newArray.push(lookupObject[i]);
  } //for
  return newArray;
} //function

function defFindMostFrequent(arr) {
  return arr.reduce((acc, cur, ind, arr) => {
      if (arr.indexOf(cur) === ind) {
        return [...acc, [cur, 1]];
      } else {
        acc[acc.indexOf(acc.find(e => e[0] === cur))] = [cur, acc[acc.indexOf(acc.find(e => e[0] === cur))][1] + 1]; //acc
        return acc;
      } //if
    }, []) //reduce
    .sort((a, b) => b[1] - a[1])
    .filter((cur, ind, arr) => cur[1] === arr[0][1])
    .map(cur => cur[0]);
} //function

function defGetCheapest(JSONtoUse) {
  var intCost = 1000000; //purposely high
  var intI = 0;
  for (i in JSONtoUse) {
    if (parseInt(JSONtoUse[i].cost) < intCost) {
      intI = i;
      intCost = JSONtoUse[i].cost;
    } //if
  } //for
  return parseInt(JSONtoUse[intI].cost);
} //function

function defJSONshow(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON]));
} //function

function defGetCountriesVisited() {
  var arrTemp = [];
  for (d in JSONplayer[0].destination) {
    arrTemp.push(JSONdestination[JSONplayer[0].destination[d]].country);
  } //for
  return arrTemp;
} //function
