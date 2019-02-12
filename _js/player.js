
function plaApplyDefaults() {
  //apply defaults and player choices

  JSONplayer[0].money = JSONconfig[0].moneyNormal;
  JSONplayer[0].happiness = JSONconfig[0].happinessNormal;

} //function

function plaCanAfford(intCost) {
  var booReturn = true;
  var intTotal = 0;
  intTotal = JSONplayer[0].money - intCost;
  if (intTotal >= 0)
    booReturn = true;
  else
    booReturn = false;
  return booReturn;
} //function
