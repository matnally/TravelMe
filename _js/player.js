
function plaCanAfford(intTotal, intCost) {
  var booReturn = true;
  intTotal = intTotal - intCost;
  if (intTotal > 0)
    booReturn = true;
  else
    booReturn = false;
  return booReturn;
} //function
