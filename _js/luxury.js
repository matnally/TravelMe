
function luxuryBuy(intLuxury) {

  var intTotal = 0;

  if (!isNaN(intLuxury)) {

    if (plaCanAfford(JSONplayer[0].money, JSONluxury[intLuxury].cost)) {

      //MONEY
      intTotal = JSONplayer[0].money - JSONluxury[intLuxury].cost; //CALC
      JSONplayer[0].money = intTotal; //UPDATE
      //HAPPINESS
      intTotal = JSONplayer[0].happiness + JSONluxury[intLuxury].happiness; //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      JSONplayer[0].luxury.push(intLuxury); //add luxury to player

      $("#selLuxury option[value="+intLuxury+"]").hide(); //remove from dropdown

      var strTemp = (JSONconfig[0].txtDialogLuxuryTitle
        + "\n\n" + JSONluxury[intLuxury].name
        + "\n" + JSONluxury[intLuxury].description
        + "\n\n" + JSONconfig[0].txtDialogLuxuryCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
        + "\n" + JSONconfig[0].txtDialogLuxuryHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
      );
      alert( $('<span/>').html(strTemp).text());
      // guiCreateDialog(JSONconfig[0].txtDialogLuxuryTitle, strTemp);

      gameTurnEnd("luxury");

    } else {

      alert(JSONconfig[0].txtDialogLuxuryNotAfford + " " + JSONluxury[intLuxury].name);
      // guiCreateDialog(JSONconfig[0].txtDialogLuxuryNotAfford, JSONconfig[0].txtDialogLuxuryNotAfford + " " + JSONluxury[intLuxury].name);

    } //if

  } //if

} //function

function luxuryRepair(intLuxury) {
  var intTotal = 0;
  //MONEY
  intTotal = (JSONplayer[0].money - JSONluxury[intLuxury].costRepair); //CALC
  JSONplayer[0].money = intTotal; //UPDATE
} //function

function luxuryDiscard(intLuxury) {
  var intTotal = 0;
  //HAPPINESS
  intTotal = (JSONplayer[0].happiness - JSONluxury[intLuxury].happiness); //CALC
  JSONplayer[0].happiness = intTotal; //UPDATE

  //remove luxury from player
  for (l in JSONluxury) {
    if (intLuxury == JSONplayer[0].luxury[l])
      JSONplayer[0].luxury.splice(l, 1);
  } //for

  $("#selLuxury option[value="+intLuxury+"]").toggle(); //show in dropdown
} //function

function luxurySell(intLuxury) {
  //sells luxury for half the price and loose any benefits (happiness)

  if (!isNaN(intLuxury)) {

    var strTemp = (JSONconfig[0].txtDialogLuxurySellTitle
          + "\n\n" +  JSONconfig[0].txtDialogLuxurySellDescription + " " + JSONluxury[intLuxury].name
          + "\n\n" + JSONconfig[0].txtDialogLuxurySellCost + " " + JSONgame[0].currency + defThousandsDelimiter(Math.round(JSONluxury[intLuxury].cost / JSONconfig[0].JSONluxurySellOffset))
          + "\n\n" + JSONconfig[0].txtDialogLuxurySellHappiness + " -" + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    );
    boolAsk = confirm( $('<span/>').html(strTemp).text());
    // guiCreateDialogConfirmLuxury(JSONconfig[0].txtDialogLuxurySellTitle, strTemp, intLuxury);

    if (boolAsk == true) {
      var intTotal = 0;
      //MONEY
      intTotal = (JSONplayer[0].money + Math.round((JSONluxury[intLuxury].cost / JSONconfig[0].JSONluxurySellOffset))); //CALC TODO: resell offset
      JSONplayer[0].money = intTotal; //UPDATE
      luxuryDiscard(intLuxury);
      gameTurnEnd("luxury");
    } //if

  } //if

} //function

//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function luxGetLuxuryFromName(elem) {
  var intTemp = 0;
  if (elem.options[elem.selectedIndex].value == "DEFAULT")
    intTemp = "DEFAULT"
  else {
    for (l in JSONluxury) {
      if (elem.options[elem.selectedIndex].text == JSONluxury[l].name)
        intTemp = l;
    } //for
  } //if
  return intTemp;
} //function

function luxBrokenCheck() {

  var intLuxury = 0;
  var intRandomChancePercentage = 0;
  var boolAsk = false;
  var intTotal = 0;

  intRandomChancePercentage = Math.random() * 100;
  intLuxury = Math.floor(Math.random() * (JSONplayer[0].luxury.length - 1) + 0); //choose a random luxury
  intLuxury = JSONplayer[0].luxury[intLuxury];

  if (intRandomChancePercentage <= JSONconfig[0].luxuryBrokenCheckChancePercentage) {
    //met the requirments for broken luxury

    var strTemp = (JSONconfig[0].txtDialogLuxuryBrokenTitle
          + "\n\n" +  JSONluxury[intLuxury].name + " " + JSONconfig[0].txtDialogLuxuryBrokenDescription
          + "\n\n" + JSONconfig[0].txtDialogLuxuryBrokenCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
          + "\n\n" + JSONconfig[0].txtDialogLuxuryBrokenHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    );
    boolAsk = confirm( $('<span/>').html(strTemp).text());
    // guiCreateDialogConfirmLuxury(JSONconfig[0].txtDialogLuxuryBrokenTitle, strTemp, intLuxury);

    if (boolAsk == true) {
      luxuryRepair(intLuxury);
    } else {
      luxuryDiscard(intLuxury);
    } //if

  } //iif

} //function

function luxCreateStats() {

  var intCost = 0;
  var intCostRepair = 0;
  var intHappiness = 0;
  var intBaseValue = 0;

  for (l in JSONluxury) {

    intBaseValue = Math.floor(Math.random() * (JSONconfig[0].JSONluxuryBaseValueMax) + JSONconfig[0].JSONluxuryBaseValueMin); //get random base value

    intCost = (intBaseValue / JSONconfig[0].JSONluxuryCostOffset).toFixed(0);
    intCostRepair = (intBaseValue / JSONconfig[0].JSONluxuryCostRepairOffset).toFixed(0);
    intHappiness = (intBaseValue / JSONconfig[0].JSONluxuryHappinessOffset).toFixed(0);

    JSONluxury[l].cost = parseInt(intCost);
    JSONluxury[l].costRepair = parseInt(intCostRepair);
    JSONluxury[l].happiness = parseInt(intHappiness);

  } //for

} //function
