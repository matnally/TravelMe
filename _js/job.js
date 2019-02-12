
function jobPromotionCheck() {

  var intTemp = 0;
  var intPercent = 0;
      intPercent = defCalcPercentage(JSONplayer[0].daysWorked, JSONgame[0].days); //get percentage of days worked for the year
      intPercent = (intPercent / 10).toFixed(0);

  if (JSONplayer[0].job < intPercent) {
    //better than current job so promote

    if (intPercent >= JSONjob.length) //max job if percent over length
      intPercent = JSONjob.length - 1; //-1 asARRAY starts at 0

    JSONplayer[0].job = intPercent;

    alert(JSONconfig[0].txtPromotionTitle + "<br><br>" + JSONjob[intPercent].name
      + "<br>" + JSONjob[intPercent].description
      + "<br>" + JSONconfig[0].txtPromotionWage + " " + JSONgame[0].currency + defThousandsDelimiter(JSONjob[intPercent].wage)
    );

  } //if

} //function
