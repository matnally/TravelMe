
var JSONconfig = [{

  //SETTINGS
  "currency"          : ["&#163;","&#36;","&#128;","&#165;","&#162;","&#8355;","&#8356;","&#8359;","&#x20B9;","&#8361;","&#8372;","&#8367;","&#8366;","&#8368;","&#8370;","&#8369;","&#8371;","&#8373;","&#8365;","&#8362;","&#8363;"]
  ,"measure"          : ["Imperial (Miles)", "Metric (Kilometres)"]
  ,"difficulty"       : ["Easy", "Normal", "Hard", "Real Life"]
  ,"difficultyOffset" : [10, 1, 0.5, 0.25]
  ,"moneyNormal"      : 1000
  ,"happinessNormal"  : 100
  ,"days"             : [365,730,1095,1460]
  //OFFSETS
  ,"workHappiness"                      : 50 //happiness to take away
  ,"luxuryBrokenCheckChancePercentage"  : 10 //10% chance
  ,"eventCheckChancePercentage"         : 20 //20% chance
  //HOME
  ,"homeLatitude"   : 54.97328
  ,"homeLongitude"  : -1.61396
  //MAP
  ,"mapCountryOutline"          : "#FFF"
  ,"mapCountryBackground"       : "#FFF"
  // ,"mapCountryOutline"          : "#000"
  // ,"mapCountryBackground"       : "#CCC"
  ,"mapCountryVisited"          : "#006600"
  ,"mapDestinationHover"        : "#FFFF00"
  ,"mapDestinationBorderColor"  : "#000"

  //JSON CREATION OFFSETS
  ////////////////////////////////
  //DESTINATION
  ,"JSONdestinationCostOffset"      : 14
  ,"JSONdestinationHappinessOffset" : 100
  ,"JSONdestinationDaysOffset"      : 1000
  //LUXURY
  ,"JSONluxuryBaseValueMin"        : 500
  ,"JSONluxuryBaseValueMax"        : 10000
  ,"JSONluxuryCostOffset"       : 1
  ,"JSONluxuryCostRepairOffset" : 2
  ,"JSONluxuryHappinessOffset"  : 3

  //TEXT INGAME
  ////////////////////////////////
  //GAME
  ,"gameEnd"          : "You failed"
  ,"gameResult"  : "Your result is"
  //WORK
  ,"txtDialogWorkTitle" : "Nice day at work, dear?"
  ,"txtDialogWorkCost"  : "You earned"
  ,"txtDialogWorkDays"  : "days worked"
  //EVENT
  ,"txtDialogEventTitle"      : "Event"
  ,"txtDialogEventCost"       : "It cost"
  ,"txtDialogEventHappiness"  : "Happiness was affected by"
  //LUXURY
  ,"txtDialogLuxuryTitle"     : "Luxury bought"
  ,"txtDialogLuxuryCost"      : "It cost"
  ,"txtDialogLuxuryHappiness" : "Happiness was increased by"
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
  //PROMOTION
  ,"txtPromotionTitle"  : "You have been promoted"
  ,"txtPromotionWage"   : "Your new wage is"

}];
