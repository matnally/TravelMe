
function guiUpdateAndReset() {
  guiUpdateHTMLPlayer();
  guiUpdateHTMLStats();
  guiReset();
} //function

function guiUpdateHTMLPlayer() {
  defUpdateElement("spnMoney", JSONgame[0].currency + defThousandsDelimiter(JSONplayer[0].money));
  defUpdateElement("spnHappiness", defThousandsDelimiter(JSONplayer[0].happiness));
  defUpdateElement("spnDaysWorked", defThousandsDelimiter(JSONplayer[0].daysWorked));
  defUpdateElement("spnJob", JSONjob[JSONplayer[0].job].name);
  defUpdateElement("spnJobDescription", JSONjob[JSONplayer[0].job].description);
  defUpdateElement("spnWage", JSONgame[0].currency + defThousandsDelimiter(JSONjob[JSONplayer[0].job].wage));
  defUpdateElement("spnWagePerDay", JSONgame[0].currency + defThousandsDelimiter((JSONjob[JSONplayer[0].job].wage/365).toFixed(0)) + " " + JSONconfig[0].gameWagePerDay);
  defUpdateElement("spnHappinessPerDay", JSONgame[0].workHappiness + " " +  JSONconfig[0].gameHappinessPerDay);
  defUpdateElement("spnDistanceTravelled", defThousandsDelimiter(JSONplayer[0].distanceTravelled) + " " + JSONgame[0].measure);
} //function

function guiReset() {
  document.getElementById("inpWorkDays").value = 1;
  document.getElementById("selLuxury").value = "DEFAULT";
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
  defUpdateElement("spnLuxuryDescription", "");
  defUpdateElement("spnLuxuryCost", "");
  defUpdateElement("spnLuxuryHappiness", "");
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
