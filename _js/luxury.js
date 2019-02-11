
function luxuryBuy(intLuxury) {

  var intTotal = 0;

  if (!isNaN(intLuxury)) {

    //MONEY
    intTotal = JSONplayer[0].money - JSONluxury[intLuxury].cost; //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = JSONplayer[0].happiness + JSONluxury[intLuxury].happiness; //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE

    JSONplayer[0].luxury.push(intLuxury); //add luxury to player

    $("#selLuxury option[value="+intLuxury+"]").hide(); //remove from dropdown

    alert(JSONconfig[0].txtDialogLuxuryTitle + "<br><br>" + JSONluxury[intLuxury].name
      + "<br>" + JSONluxury[intLuxury].description
      + "<br>" + JSONconfig[0].txtDialogLuxuryCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
      + "<br>" + JSONconfig[0].txtDialogLuxuryHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    );

    // guiCreateDialog(JSONconfig[0].txtDialogLuxuryTitle, JSONluxury[intLuxury].name
    //   + "<br>" + JSONluxury[intLuxury].description
    //   + "<br>" + JSONconfig[0].txtDialogLuxuryCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
    //   + "<br>" + JSONconfig[0].txtDialogLuxuryHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    // );

    guiUpdateAndReset();
    gameCheckEndGame();

  } //if

} //function

function luxuryBrokenCheck() {

  var intLuxury = 0;
  var intRandomChancePercentage = 0;
  var boolAsk = false;
  var intTotal = 0;

  intRandomChancePercentage = Math.random() * 100;
  intLuxury = Math.floor(Math.random() * (JSONplayer[0].luxury.length - 1) + 0); //choose a random luxury
  intLuxury = JSONplayer[0].luxury[intLuxury];

  if (intRandomChancePercentage <= JSONconfig[0].luxuryBrokenCheckChancePercentage) {
    //met the requirments for broken luxury

    boolAsk = confirm(JSONconfig[0].txtDialogLuxuryBrokenTitle + "<br><br>" +  JSONluxury[intLuxury].name + " " + JSONconfig[0].txtDialogLuxuryBrokenDescription
          + "<br>" + JSONconfig[0].txtDialogLuxuryBrokenCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
          + "<br>" + JSONconfig[0].txtDialogLuxuryBrokenHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    );
    // guiCreateDialogConfirmLuxury(JSONconfig[0].txtDialogLuxuryBrokenTitle, JSONluxury[intLuxury].name + " " + JSONconfig[0].txtDialogLuxuryBrokenDescription
    //   + "<br>" + JSONconfig[0].txtDialogLuxuryBrokenCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost)
    //   + "<br>" + JSONconfig[0].txtDialogLuxuryBrokenHappiness + " " + defThousandsDelimiter(JSONluxury[intLuxury].happiness)
    //   ,intLuxury
    // );

    if (boolAsk == true) {
      luxuryRepair(intLuxury);
    } else {
      luxuryDiscard(intLuxury);
    } //if

  } //iif

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

  JSONplayer[0].luxury.splice(intLuxury, 1); //remove luxury from player
  $("#selLuxury option[value="+intLuxury+"]").toggle(); //show in dropdown
} //function
