
function work(intDays) {

  var intTotal = 0;
  var intDaysCanWork = 0;

  intDays = wokCheckMaxDays(intDays); //check so don't go over max days

  if (plaCanAfford(JSONplayer[0].happiness, Math.abs(JSONgame[0].workHappiness * intDays))) { //Math.abs so turn workHappiness positive

    //MONEY
    intTotal = (JSONplayer[0].money + (Math.round(JSONjob[JSONplayer[0].job].wage / 365) * intDays)); //CALC
    JSONplayer[0].money = intTotal; //UPDATE
    JSONplayer[0].moneyEarned = intTotal; //UPDATE
    //HAPPINESS
    intTotal = (JSONplayer[0].happiness + (JSONgame[0].workHappiness * intDays)); //CALC
    JSONplayer[0].happiness = intTotal; //UPDATE
    //DAYS WORKED
    intTotal = JSONplayer[0].daysWorked + intDays; //CALC
    JSONplayer[0].daysWorked = intTotal; //UPDATE
    //DAY / TURN
    intTotal = JSONgame[0].day + intDays; //CALC
    JSONgame[0].day = intTotal; //UPDATE

    var strTemp = (JSONconfig[0].txtDialogWorkTitle
      + "\n\n" + "<img src='" + JSONconfig[0].imgEventWork + "' alt='Work Event'>"
      + "\n\n" + intDays + " " + JSONconfig[0].txtDialogWorkDays
      + "\n\n" + JSONconfig[0].txtDialogWorkCost + " " + JSONgame[0].currency + defThousandsDelimiter(Math.round(JSONjob[JSONplayer[0].job].wage / 365) * intDays)
      + "\n" + JSONconfig[0].txtDialogWorkHappiness + " " + defThousandsDelimiter(JSONgame[0].workHappiness * intDays)
    );
    alert( $('<span/>').html(strTemp).text());
    // guiCreateDialog(JSONconfig[0].txtDialogWorkTitle, strTemp);

    gameTurnEnd("work");

  } else {

    intDaysCanWork = wokCheckMaxDaysCanWork();
    document.getElementById("inpWorkDays").value = intDaysCanWork;

    var strTemp = (JSONconfig[0].txtDialogWorkHappinessNotAfford
      + "\n\n" + JSONconfig[0].txtDialogWorkDaysMax + " " + intDaysCanWork
    );
    alert( $('<span/>').html(strTemp).text());
    // guiCreateDialog(JSONconfig[0].txtDialogWorkHappinessNotAfford, strTemp);

  } //if

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function wokCheckMaxDaysCanWork() {
  //work out max days can work on the basis of current happiness
  var intDaysCanWork = Math.floor(Math.abs(JSONplayer[0].happiness / JSONgame[0].workHappiness));
  var intDaysCanWorkRemainder = (JSONplayer[0].happiness % JSONgame[0].workHappiness);
  if (intDaysCanWorkRemainder == 0) //if there is a remainder then can't afford it
    intDaysCanWork--;
  return intDaysCanWork;
} //function

function wokCheckMaxDays(intDays) {
  if ((intDays + JSONgame[0].day) > JSONgame[0].days) //check so don't go over max days
    intDays = JSONgame[0].days - JSONgame[0].day;
  return intDays;
} //function


$(function () { //TODO: Best way of doing this?
  $('#inpWorkDays').on('keyup keydown keypress onchange', function(e) {
    $(this).val(wokCheckMaxDays(parseInt($(this).val())));
  }); //on
}); //function
