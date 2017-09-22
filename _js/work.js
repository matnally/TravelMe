
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

}

function calcWorkMoney(intWorkDays) {

  var intResult = 0;
  var intSalary = JSONme["me"][0].salary;

  intResult = intSalary * intWorkDays;
  return intResult;

}

function calcWorkHolidays(intWorkDays) {

  var intResult = 0;
  return intResult;

}
