
function guiUpdateAndReset() {
  guiUpdateHTMLPlayer();
  guiUpdateHTMLStats();
  guiReset();
} //function

function guiUpdateHTMLPlayer() {

  var strTemp = "";
  var arrTemp = [];

  defUpdateElement("spnMoney", JSONgame[0].currency + defThousandsDelimiter(JSONplayer[0].money));
  defUpdateElement("spnHappiness", defThousandsDelimiter(JSONplayer[0].happiness));
  defUpdateElement("spnDaysWorked", defThousandsDelimiter(JSONplayer[0].daysWorked));
  defUpdateElement("spnJob", JSONjob[JSONplayer[0].job].name);
  defUpdateElement("spnJobDescription", JSONjob[JSONplayer[0].job].description);
  defUpdateElement("spnWage", JSONgame[0].currency + defThousandsDelimiter(JSONjob[JSONplayer[0].job].wage));
  defUpdateElement("spnWagePerDay", JSONgame[0].currency + defThousandsDelimiter((JSONjob[JSONplayer[0].job].wage/365).toFixed(0)) + " " + JSONconfig[0].gameWagePerDay);
  defUpdateElement("spnHappinessPerDay", JSONgame[0].workHappiness + " " +  JSONconfig[0].gameHappinessPerDay);
  defUpdateElement("spnDistanceTravelled", defThousandsDelimiter(JSONplayer[0].distanceTravelled) + " " + JSONgame[0].measure);

  //LUXURY
  for (l in JSONplayer[0].luxury) {
    strTemp += JSONluxury[JSONplayer[0].luxury[l]].name + "<br>";
    arrTemp.push(JSONluxury[JSONplayer[0].luxury[l]].name);
  } //for
  defUpdateElement("spnLuxuryOwned", strTemp);
  defUpdateElement("spnLuxuryOwned", guiCreateHTMLComboBoxSettings(arrTemp, "selLuxuryOwned"));
  $('#selLuxuryOwned').prepend($("<option value='DEFAULT'>" + JSONconfig[0].txtLuxurySelectPromptOwned + "</option>")); //do after sort dropdown
  document.getElementById("selLuxuryOwned").value = "DEFAULT";
  document.getElementById("selLuxuryOwned").addEventListener("change",function(event){
    guiUpdateHTMLLuxury(luxGetLuxuryFromName(document.getElementById("selLuxuryOwned")));
  }, { passive: true }); //addEventListener

  //MILESTONES
  if (JSONgame[0].milestoneLuxury != true)
    strTemp = JSONplayer[0].luxury.length + " / " + JSONgame[0].milestoneLuxury;
  else
    strTemp = "Complete";
  defUpdateElement("spnMilestoneLuxury", strTemp);
  if (JSONgame[0].milestoneDistance != true)
    strTemp = defThousandsDelimiter(JSONplayer[0].distanceTravelled) + " / " + defThousandsDelimiter(JSONgame[0].milestoneDistance);
  else
    strTemp = "Complete";
  defUpdateElement("spnMilestoneDistance", strTemp);
  if (JSONgame[0].milestoneDestination != true)
    strTemp = defThousandsDelimiter(defRemoveDuplicatesArray(JSONplayer[0].destination).length) + " / " + defThousandsDelimiter(JSONgame[0].milestoneDestination);
  else
    strTemp = "Complete";
  defUpdateElement("spnMilestoneDestination", strTemp);
  if (JSONgame[0].milestoneCountryVisited != true)
    strTemp = defRemoveDuplicatesArray(defGetCountriesVisited()).length + " / " + defThousandsDelimiter(JSONgame[0].milestoneCountryVisited);
  else
    strTemp = "Complete";
  defUpdateElement("spnMilestoneCountryVisited", strTemp);

} //function

function guiReset() {
  document.getElementById("inpWorkDays").value = 1;
  guiUpdateHTMLLuxuryReset();
} //function

function guiUpdateHTMLStats() {
  defUpdateElement("spnDay", defThousandsDelimiter(JSONgame[0].day));
  defUpdateElement("spnDays", defThousandsDelimiter(JSONgame[0].days));
} //function

function guiUpdateHTMLLuxury(intLuxury) {
  if (!isNaN(intLuxury)) {
    defUpdateElement("spnLuxuryDescription", JSONluxury[intLuxury].description);
    defUpdateElement("spnLuxuryCost", JSONgame[0].currency + defThousandsDelimiter(JSONluxury[intLuxury].cost));
    defUpdateElement("spnLuxuryHappiness", defThousandsDelimiter(JSONluxury[intLuxury].happiness));
  } else {
    guiUpdateHTMLLuxuryReset();
  } //if
} //function

function guiUpdateHTMLLuxuryReset() {
  document.getElementById("selLuxury").value = "DEFAULT";
  document.getElementById("selLuxuryOwned").value = "DEFAULT";
  defUpdateElement("spnLuxuryDescription", "");
  defUpdateElement("spnLuxuryCost", "");
  defUpdateElement("spnLuxuryHappiness", "");
} //function

function guiCelebrate(elem) {
  $(elem).celebrate({unicode: '\u2B50', color: 'gold'});
  // $(elem).celebrate({unicode: '\u2605', color: 'gold', particles:3});
} //function

function guiAddCelebrate() { //adds celebrate functionality to all buttons
  var elemButtons = document.getElementsByTagName('button');
  for (var i=0; i<elemButtons.length; i++) {
    elemButtons[i].addEventListener("click",function(){
      guiCelebrate(this);
    }, { passive: true }); //addEventListener
  } //for
} //function

function guiDisplayMessage(strTemp) {
  alert($('<span/>').html(strTemp).text());
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function guiSectionHide() {
  var tmpElems = document.getElementsByTagName("section");
  for (var i = 0; i < tmpElems.length; i++) {
    $(tmpElems[i]).hide();
  } //for
} //function

function guiSectionShow(tmpElem) {
  guiSectionHide();
  $(tmpElem).show();
} //function

function guiCreateHTMLComboBoxSettings(tmpArray, strID) {
  var strTemp = "";
  var intTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
  for (i in tmpArray) {
    if (!isNaN(tmpArray[i])) {
      intTemp = defThousandsDelimiter(tmpArray[i]);
    } else {
      intTemp = tmpArray[i];
    }  //if
    strTemp += "<option value='" + i + "'>" + intTemp + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

function guiCreateHTMLComboBox(tmpArray, strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
  for (i in tmpArray) {
    strTemp += "<option value='" + i + "'>" + tmpArray[i].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

function guiCreateHTMLComboBoxMulti(tmpArray, strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
  for (i in tmpArray) {
    strTemp += "<option value='" + i + "'>" + tmpArray[i][0] + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function




/////////////////////////////////
//// UNUSED AS DIALOG STACKS ////
/////////////////////////////////

// JQUERY UI
function guiCreateDialog(strTitle, strText) {
  return $("<div class='dialog' title='" + strTitle + "'><p>" + strText + "</p></div>")
    .dialog({
        resizable: false
        ,modal: true
        ,buttons: [
          {
            text: "OK"
            ,icon: "ui-icon-heart"
            ,click: function() {
              $(this).dialog("close");
            } //click
          } //ok
        ] //buttons
    }); //dialog
} //function

function guiCreateDialogConfirmLuxury(strTitle, strText, intIndex) {
  $("<div class='dialog' title='" + strTitle + "'><p>" + strText + "</p></div>")
    .dialog({
        resizable: false
        ,modal: true
        ,buttons: [
          {
            text: "Repair"
            ,icon: "ui-icon-heart"
            ,click: function() {
              luxuryRepair(intIndex);
              $(this).dialog("close");
            } //click
          } //Repair
          ,{
            text: "Discard"
            ,icon: "ui-icon-heart"
            ,click: function() {
              luxuryDiscard(intIndex);
              $(this).dialog("close");
            } //click
          } //Discard
        ] //buttons
    }); //dialog
} //function
