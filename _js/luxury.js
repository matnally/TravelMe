
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

    guiCreateDialog("Luxury Bought", "You bought " + JSONluxury[intLuxury].name);

    gameTurnEnd();

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

    boolAsk = confirm(JSONluxury[intLuxury].name + " is broken. Do you want to fix it? It'll cost " + JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].costRepair) + " or loose " + JSONluxury[intLuxury].happiness + " happiness.");
    if (boolAsk == true) {
      //MONEY
      intTotal = (JSONplayer[0].money - JSONluxury[intLuxury].costRepair); //CALC
      JSONplayer[0].money = intTotal; //UPDATE
    } else {
      //HAPPINESS
      intTotal = (JSONplayer[0].happiness - JSONluxury[intLuxury].happiness); //CALC
      JSONplayer[0].happiness = intTotal; //UPDATE

      JSONplayer[0].luxury.splice(intLuxury, 1); //remove luxury from player
      $("#selLuxury option[value="+intLuxury+"]").toggle(); //show in dropdown
    } //if

  } //iif

} //function
