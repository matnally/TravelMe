
function work(intDays) {

  var intTotal = 0;

  //MONEY
  intTotal = (JSONplayer[0].money + (Math.round(JSONjob[JSONplayer[0].job].wage / 365) * intDays)); //CALC
  JSONplayer[0].money = intTotal; //UPDATE
  //HAPPINESS
  intTotal = (JSONplayer[0].happiness - (JSONconfig[0].workHappiness * intDays)); //CALC
  JSONplayer[0].happiness = intTotal; //UPDATE
  //DAYS WORKED
  intTotal = JSONplayer[0].daysWorked + intDays; //CALC
  JSONplayer[0].daysWorked = intTotal; //UPDATE
  //DAY / TURN
  intTotal = JSONgame[0].day + intDays; //CALC
  JSONgame[0].day = intTotal; //UPDATE

  alert(JSONconfig[0].txtDialogWorkTitle + "<br><br>" + JSONconfig[0].txtDialogWorkCost
    + " " + JSONgame[0].currency + defThousandsDelimiter(Math.round(JSONjob[JSONplayer[0].job].wage / 365) * intDays)
    + "<br>" + intDays + " " + JSONconfig[0].txtDialogWorkDays
  );
  // guiCreateDialog(JSONconfig[0].txtDialogWorkTitle, JSONconfig[0].txtDialogWorkCost
  //   + " " + JSONgame[0].currency + defThousandsDelimiter(Math.round(JSONjob[JSONplayer[0].job].wage / 365) * intDays)
  //   + "<br>" + intDays + " " + JSONconfig[0].txtDialogWorkDays
  // );

  gameTurnEnd();

} //function
