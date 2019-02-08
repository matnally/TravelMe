//details of all events that can occur
var JSONevent = [
  {
    "id"                  : 0
    ,"name"               : "Old traveller"
    ,"description"        : "You're getting old! You require a rest day from all the travelling."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : -10
    ,"money"              : -0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 1
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 1
    ,"name"               : "Missed flight"
    ,"description"        : "You got distracted by beer and missed your flight."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : -50
    ,"money"              : -200
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 1
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 2
    ,"name"               : "Delayed flight"
    ,"description"        : "Your flight has been delayed."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "common"
    ,"happiness"          : -10
    ,"money"              : -20
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 1
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 3
    ,"name"               : "No foreign money"
    ,"description"        : "You have none of the country's money and are unable to buy food at the airport."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 4
    ,"name"               : "Cheap late / early flights"
    ,"description"        : "All the duty free shops are closed! You are so bored."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 5
    ,"name"               : "Peak time immigration"
    ,"description"        : "Numerous arrivals cause a bottleneck at immigration. You wait hours."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 6
    ,"name"               : "Nee beer"
    ,"description"        : "No bars at the airport. What else does one do?"
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 7
    ,"name"               : "Screaming sexcrement"
    ,"description"        : "Why do people with children? Loads of screaming kids on the plane."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "common"
    ,"happiness"          : -15
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 8
    ,"name"               : "Old planes"
    ,"description"        : "There are no individual TV screens. We share films!"
    ,"eventCategory"      : "negative"
    ,"eventType"          : "common"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 9
    ,"name"               : "Legs-a-trembling"
    ,"description"        : "There are only squat toilets at the aiport. Ewe."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 10
    ,"name"               : "Shit toilets"
    ,"description"        : "The toilets are very busy, smelly and ploppy."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "common"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 11
    ,"name"               : "Drunk walking"
    ,"description"        : "You're so drunk from free plane booze that you get lost in the airport."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "low"
    ,"happiness"          : -10
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 12
    ,"name"               : "n00b traveller"
    ,"description"        : "You get in to the first taxi you see. Fool."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : -10
    ,"money"              : -100
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 13
    ,"name"               : "You wait for one..."
    ,"description"        : "You wait at the wrong bus stop to your hotel."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : -10
    ,"money"              : -20
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 14
    ,"name"               : "Think they own the road"
    ,"description"        : "Taxi driver rips you off. Again."
    ,"eventCategory"      : "negative"
    ,"eventType"          : "medium"
    ,"happiness"          : -10
    ,"money"              : -50
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 15
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 16
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 17
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 18
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 19
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
  ,{
    "id"                  : 20
    ,"name"               : ""
    ,"description"        : ""
    ,"eventCategory"      : "negative"
    ,"eventType"          : "rare"
    ,"happiness"          : 0
    ,"money"              : 0
    ,"salary"             : 0
    ,"daysLeft"           : 0
    ,"daysWorked"         : 0
    ,"travelledDistance"  : 0
    ,"travelledDays"      : 0
    ,"eventTypeWorkTravel": "travel"
  }
/**
 *END ALL FOR FIGHTS?
 */


 /**
  *START work?
  */
 ,{
   "id"                  : 21
   ,"name"               : "A work one!"
   ,"description"        : "Dunno yet"
   ,"eventCategory"      : "negative"
   ,"eventType"          : "high"
   ,"happiness"          : -10
   ,"money"              : 0
   ,"salary"             : 0
   ,"daysLeft"           : 0
   ,"daysWorked"         : 0
   ,"travelledDistance"  : 0
   ,"travelledDays"      : 0
   ,"eventTypeWorkTravel": "work"
 }

];
