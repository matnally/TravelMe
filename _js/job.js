
function jobPromotionCheck() {

  var intTemp = 0;
  var intPercent = 0;
      intPercent = defCalcPercentage(JSONplayer[0].daysWorked, JSONgame[0].days); //get percentage of days worked for the year
      intPercent = (intPercent / 10).toFixed(0);

  if (JSONplayer[0].job < intPercent) {
    //better than current job so promote
    JSONplayer[0].job = intPercent;
    
    //TODO:
    alert("You have been promoted to " + JSONjob[JSONplayer[0].job].name);
  }

} //function
