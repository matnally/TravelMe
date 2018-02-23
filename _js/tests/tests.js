var elem = 0;
var intDays = 0;
var intMoney = 0;
var intTravelledDistance = 0;
var intHappiness = 0;
QUnit.test("Combobox - Trek calc Happiness", function( assert ) {
  for (var i=0; i<$("#trekChoice option").length;i++) {
    elem = document.getElementById("trekChoice");
    intDays = JSONdestinations[elem.options[i].value].days;
    intMoney = JSONdestinations[elem.options[i].value].cost;
    intTravelledDistance = JSONdestinations[elem.options[i].value].travelledDistance;
    intHappiness = calHappiness(intDays, intMoney, intTravelledDistance, JSONconfig[0].units);
    assert.gt(parseInt(intHappiness), 1, JSONdestinations[elem.options[i].value].name + " calc Happiness is greater than 1!");
  } //for
});
QUnit.test("Combobox - walkAboutChoice calc Happiness", function( assert ) {
  for (var i=0; i<$("#walkAboutChoice option").length;i++) {
    elem = document.getElementById("walkAboutChoice");
    intDays = elem.options[i].value;
    intMoney = calcMoney(parseInt(intDays), parseInt(JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving));
    intTravelledDistance = JSONdestinations[JSONlocation[0].locationCurrent].travelledDistance; //put before happiness as needs the value
    intHappiness = -calHappiness(intDays, calcMoney(intDays, JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving), JSONlocation[0].travelledDistance, JSONconfig[0].units); //adding the - to calHappiness below forces a positive
    assert.gt(parseInt(intHappiness), 1, "WALKABOUT for " + intDays + " calc Happiness is greater than 1!");
  } //for
});
QUnit.test("Combobox - workChoice calc Happiness", function( assert ) {
  for (var i=0; i<$("#workChoice option").length;i++) {
    elem = document.getElementById("workChoice");
    intDays = elem.options[i].value;
    intMoney = calcMoney(intDays, JSONdestinations[JSONlocation[0].locationCurrent].costOfLiving);
    intTravelledDistance = 0; //as working NOT travelling
    intHappiness = calHappiness(intDays, intMoney, 0, JSONconfig[0].units);
    assert.gt(parseInt(intHappiness), 1, "WORK for " + intDays + " calc Happiness is greater than 1!");
  } //for
});
