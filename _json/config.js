
var JSONconfig = [{

  //SETTINGS
  "currency"              : ["&#163;", "&#36;", "&#128;", "&#165;"] //£, $, €, ¥
  ,"measure"              : ["Miles", "Kilometres"] //imperial, metric
  ,"difficulty"           : ["Easy", "Normal", "Hard", "Real Life"] //seperate from difficultyOffset for guiCreateHTMLComboBoxSettings
  ,"difficultyOffset"     : [2, 1, 0.5, 0.25] //easy, normal, hard, real life
  ,"money"                : 10000 //starting value
  ,"happiness"            : 100 //starting value
  ,"days"                 : [365,730,1095,1460]
  ,"startingDay"          : 0 //what day to begin with
  ,"homeLocation"         : ["Newcastle upon Tyne", "London"]
  ,"homeLocationLatLong"  : [ [54.97328,-1.61396], [51.5074,0.1278] ]
  ,"destinations"         : ["RTW Trip", "Countries", "Capital Cities"]
  ,"destinationsJSON"     : ["JSONRTWTrip", "JSONcountries", "JSONcapitals"]

  //OFFSETS
  ,"workHappiness"                      : -50 //happiness to take away
  ,"luxuryBrokenCheckChancePercentage"  : 10 //% chance
  ,"eventCheckChancePercentage"         : 10 //% chance
  ,"eventGetEventTypeOffsetDestination" : 2 //if (player destinations > (destinations / THIS))
  ,"eventGetEventTypeOffsetDistance"    : 2 //if (player distance > total distance / THIS)

  //MAP
  // ,"mapCountryOutline"          : "#FFF" // AT WORK
  // ,"mapCountryBackground"       : "#FFF" // AT WORK
  ,"mapCountryOutline"          : "#000"
  ,"mapCountryBackground"       : "#CCC"
  ,"mapCountryVisited"          : "#006600"
  ,"mapDestinationHover"        : "#FFFF00"
  ,"mapDestinationBorderColor"  : "#000"
  ,"mapArcColour"               : "#00F"


  //START JSON CREATION OFFSETS
  // NOTE: include and change in gameSetDifficultyDefaults()
  //DESTINATION
  ,"JSONdestinationCostOffset"      : 14
  ,"JSONdestinationHappinessOffset" : 100
  ,"JSONdestinationDaysOffset"      : 1000
  //LUXURY
  ,"JSONluxuryBaseValueMin"     : 500
  ,"JSONluxuryBaseValueMax"     : 10000
  ,"JSONluxuryCostOffset"       : 1
  ,"JSONluxuryCostRepairOffset" : 2
  ,"JSONluxuryHappinessOffset"  : 3
  //EVENT
  ,"JSONeventBaseValueMin"    : -500
  ,"JSONeventBaseValueMax"    : 500
  ,"JSONeventCostOffset"      : 1
  ,"JSONeventHappinessOffset" : 2
  //END JSON CREATION OFFSETS


  //TEXT INGAME
  ////////////////////////////////
  //GAME
  ,"gameDayPrefix"        : "Day&nbsp;"
  ,"gameDaysPrefix"       : "&nbsp;of&nbsp;"
  ,"gameEnd"              : "You failed"
  ,"gameResult"           : "Your result is"
  ,"gameWagePerDay"       : "per day"
  ,"gameHappinessPerDay"  : "Happiness per day"
  //WORK
  ,"txtDialogWorkTitle"               : "Nice day at work, dear?"
  ,"txtDialogWorkCost"                : "You earned"
  ,"txtDialogWorkDays"                : "days worked"
  ,"txtDialogWorkDaysMax"             : "The maximum days you can work is"
  ,"txtDialogWorkHappiness"           : "Happiness was affected by"
  ,"txtDialogWorkHappinessNotAfford"  : "You'll be too unhappy if you work this long"
  //EVENT
  ,"txtDialogEventTitle"      : "Event"
  ,"txtDialogEventCost"       : "It cost"
  ,"txtDialogEventHappiness"  : "Happiness was affected by"
  //LUXURY
  ,"txtDialogLuxuryTitle"     : "Luxury bought"
  ,"txtDialogLuxuryCost"      : "It cost"
  ,"txtDialogLuxuryHappiness" : "Happiness was increased by"
  ,"txtLuxurySelectPrompt"    : "Choose A Luxury"
  //LUXURY BROKEN
  ,"txtDialogLuxuryBrokenTitle"       : "Luxury Broken"
  ,"txtDialogLuxuryBrokenDescription" : "has become broken"
  ,"txtDialogLuxuryBrokenCost"        : "To repair and keep all it's benefits will cost"
  ,"txtDialogLuxuryBrokenHappiness"   : "If you discard the luxury your happiness will be affected by -"
  ,"txtDialogLuxuryNotAfford"         : "You cannot afford the luxury"
  //TRAVEL
  ,"txtDialogTravelTitle"       : "Travel expands the mind"
  ,"txtDialogTravelDestination" : "You travelled to"
  ,"txtDialogTravelCost"        : "It cost"
  ,"txtDialogTravelDistance"    : "You travelled a distance of"
  ,"txtDialogTravelNotAfford"   : "You cannot afford to travel to"
  ,"txtDialogTravelDays"        : "days taken to travel"
  //PROMOTION
  ,"txtPromotionTitle"  : "You have been promoted"
  ,"txtPromotionWage"   : "Your new wage is"

  //IMAGES
  ,"imgEventWork"   : "_images/eventWork.png"
  ,"imgEventTravel" : "_images/eventTravel.png"

}];
