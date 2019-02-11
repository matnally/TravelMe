
function eventCheck() {

  var intRandomChancePercentage = 0;
  var intEvent = 0;
  var intTotal = 0;

  intRandomChancePercentage = Math.random() * 100;
  intEvent = Math.floor(Math.random() * (JSONevent.length - 1) + 0); //choose a random event

  if (intRandomChancePercentage <= JSONconfig[0].eventCheckChancePercentage) {

    //MONEY
    intTotal = (JSONplayer[0].money + JSONevent[intEvent].cost); //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    //HAPPINESS
    intTotal = (JSONplayer[0].happiness + JSONevent[intEvent].happiness); //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE

    alert(JSONconfig[0].txtDialogEventTitle + "<br><br>" + JSONevent[intEvent].name
      + "<br>" + JSONevent[intEvent].description
      + "<br>" + JSONconfig[0].txtDialogEventCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONevent[intEvent].cost)
      + "<br>" + JSONconfig[0].txtDialogEventHappiness + " " + defThousandsDelimiter(JSONevent[intEvent].happiness)
    );
    // guiCreateDialog(JSONconfig[0].txtDialogEventTitle, JSONevent[intEvent].name
    //   + "<br>" + JSONevent[intEvent].description
    //   + "<br>" + JSONconfig[0].txtDialogEventCost + " " + JSONgame[0].currency + defThousandsDelimiter(JSONevent[intEvent].cost)
    //   + "<br>" + JSONconfig[0].txtDialogEventHappiness + " " + defThousandsDelimiter(JSONevent[intEvent].happiness)
    // );

  } //if

} //function
