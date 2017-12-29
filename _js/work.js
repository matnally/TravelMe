
function calcWork() {

  var elem = document.getElementById("workChoice");
  var intWorkDays = elem.options[elem.selectedIndex].value;

  JSONwork["work"][0].money = calcWorkMoney(intWorkDays);
  JSONwork["work"][0].happiness = calHappiness(intWorkDays, calcWorkMoney(intWorkDays), 0, JSONconfig["config"][0].units)
  JSONwork["work"][0].holidays = calcWorkHolidays(intWorkDays);

  updateElement("divWorkDays", intWorkDays);
  updateElement("divWorkMoney", JSONconfig["config"][0].currency + JSONwork["work"][0].money);
  updateElement("divWorkHappiness", JSONwork["work"][0].happiness);
  updateElement("divWorkHolidays", JSONwork["work"][0].holidays);


  //calcAfford(total, value, "locationDestinationCost");

  if (calcAfford(JSONme["me"][0].happiness, Math.abs(JSONwork["work"][0].happiness), "divWorkHappiness") < 1) {
    alert("If you work for this long, you'll be too unhappy!");
    document.getElementById("butWork").disabled = true;
  } else {
    document.getElementById("butWork").disabled = false;
  }


}

function calcWorkMoney(intWorkDays) {

  var intResult = 0;
  var intSalary = JSONme["me"][0].salary;

  intResult = intSalary * intWorkDays;
  return intResult;

}

function calcWorkHolidays(intWorkDays) {

  var intResult = 0;
      intResult = intWorkDays / 14;
  return intResult;

}
