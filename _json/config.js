
var JSONconfig = [{

  //SETTINGS
  "currency"              : ["&#163;", "&#36;", "&#128;", "&#165;"] //£, $, €, ¥
  ,"measure"              : ["Miles", "Kilometres"] //imperial, metric
  ,"difficulty"           : ["Easy", "Normal", "Hard", "Real Life"] //seperate from difficultyOffset for guiCreateHTMLComboBoxSettings
  ,"difficultyOffset"     : [2, 1, 0.5, 0.25] //easy, normal, hard, real life
  ,"money"                : 10000 //starting value
  ,"happiness"            : 100 //starting value
  ,"days"                 : [365,730,1095,1460]
  ,"startingDay"          : 1 //what day to begin with

  //MAP
  ,"maps"                     : [ "World", "USA"]
  ,"mapsHomeJSON"             : [ ["Newcastle upon Tyne", "Bangkok"] //world
                                  ,["Tannersville", "Venice Beach"] //usa
                                ] //mapsHomeJSON
  ,"mapsHomeLocationLatLong"  : [
                                  [[54.97328, -1.61396], [13.7563, 100.5018]] //world
                                  ,[[42.217312, -73.864571], [33.9850, -118.4695] ] //usa
                                ] //mapsHomeLocationLatLong
  ,"mapsJSON"                 : [
                                  [
                                    ["RTW Trip","JSONRTWTrip"]
                                    ,["Countries","JSONcountries"]
                                    ,["Capital Cities","JSONcapitals"]
                                  ] //world
                                  ,[
                                    ["Trips","JSONRTWTrip"]
                                    ,["State Capitals","JSONcapitals"]
                                  ] //USA
                                ] //mapsJSON
  //MAP COLOURS
  ,"mapCountryOutline"          : "#000"
  ,"mapCountryBackground"       : "#CCC"
  ,"mapCountryVisited"          : "#006600"
  ,"mapDestinationHover"        : "#FFFF00"
  ,"mapDestinationBorderColor"  : "#000"
  ,"mapArcColour"               : "#00F"

  //OFFSETS
  ,"workHappiness"                      : -25 //happiness to take away
  ,"luxuryBrokenCheckChancePercentage"  : 10 //% chance
  ,"eventCheckChancePercentage"         : 10 //% chance
  ,"eventGetEventTypeOffsetDestination" : 2 //if (player destinations > (destinations / THIS))
  ,"eventGetEventTypeOffsetDistance"    : 2 //if (player distance > total distance / THIS)

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
  ,"JSONluxurySellOffset"       : 2
  //EVENT
  ,"JSONeventBaseValueMin"    : 50
  ,"JSONeventBaseValueMax"    : 500
  ,"JSONeventCostOffset"      : 1
  ,"JSONeventHappinessOffset" : 2
  //END JSON CREATION OFFSETS

  //IMAGES
  ,"imgEventWork"   : "_images/eventWork.png"
  ,"imgEventTravel" : "_images/eventTravel.png"

  //START TEXT INGAME
  ////////////////////////////////
  //GAME
  ,"gameDayPrefix"          : "Day&nbsp;"
  ,"gameDaysPrefix"         : "&nbsp;of&nbsp;"
  ,"gameEnd"                : "You failed"
  ,"gameResult"             : "Your result is"
  ,"gameWagePerDay"         : "per day"
  ,"gameHappinessPerDay"    : "Happiness per day"
  ,"gameEndReasonMoney"     : "You've run out of money"
  ,"gameEndReasonHappiness" : "You're too unhappy"
  ,"gameEndReasonDays"      : "End of days"
  ,"gameEndReasonAction"    : "You can't perform an action (too little happiness and money)"
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
  ,"txtDialogLuxurySellTitle"       : "Sell Luxury"
  ,"txtDialogLuxurySellDescription" : "Are you sure you want to sell"
  ,"txtDialogLuxurySellCost"        : "You will recieve cashback of"
  ,"txtDialogLuxurySellHappiness"   : "Happiness lost will be"
  ,"txtDialogLuxuryTitle"           : "Luxury bought"
  ,"txtDialogLuxuryCost"            : "It cost"
  ,"txtDialogLuxuryHappiness"       : "Happiness was increased by"
  ,"txtLuxurySelectPrompt"          : "Choose A Luxury"
  ,"txtLuxurySelectPromptOwned"     : "Luxury Owned"
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

  //MILESTONES
  ,"txtMilestoneLuxury"         : "You have achieved the Luxury milestone"
  ,"txtMilestoneDistance"       : "You have achieved the Distance Travelled milestone"
  ,"txtMilestoneDestination"    : "You have achieved the Destinations Visited milestone"
  ,"txtMilestoneCountryVisited" : "You have achieved the Countries Visited milestone"
  //MILESTONE BONUS
  ,"BonusMilestoneLuxuryMoney"              : 0
  ,"BonusMilestoneLuxuryHappiness"          : 0
  ,"BonusMilestoneDistanceMoney"            : 0
  ,"BonusMilestoneDistanceHappiness"        : 0
  ,"BonusMilestoneDestinationMoney"         : 0
  ,"BonusMilestoneDestinationHappiness"     : 0
  ,"BonusMilestoneCountryVisitedMoney"      : 0
  ,"BonusMilestoneCountryVisitedHappiness"  : 0

  ////////////////////////////////
  //END TEXT INGAME

}];
