
function desigGetDesignation() {

  var intMoney = 0;
  var intHappiness = 0;
  var intDestinations = 0;
  var intLuxuries = 0;
  var intDaysWorked = 0;
  var intDistanceTravelled = 0;
  var intJob = 0;

  intMoney = JSONplayer[0].money
  intHappiness = JSONplayer[0].happiness
  intDestinations = JSONplayer[0].destination.length
  intLuxuries = JSONplayer[0].luxury.length
  intDaysWorked = JSONplayer[0].daysWorked
  intDistanceTravelled =JSONplayer[0].distanceTravelled
  intJob = JSONplayer[0].job

  return "Dunno";
  
} //function
