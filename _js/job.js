
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

    var strTemp = (JSONconfig[0].txtPromotionTitle
      + "\n\n" + JSONjob[intPercent].name
      + "\n" + JSONjob[intPercent].description
      + "\n\n" + JSONconfig[0].txtPromotionWage + " " + JSONgame[0].currency + defThousandsDelimiter(JSONjob[intPercent].wage)
    );
    alert( $('<span/>').html(strTemp).text());
    // guiCreateDialog(JSONconfig[0].txtPromotionTitle, strTemp);

  } //if

} //function
