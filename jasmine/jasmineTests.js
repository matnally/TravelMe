
describe("Testing default.js file", function() {

  //defThousandsDelimiter
  it("defThousandsDelimiter(1000): Return will be 1,000,000", function() {
    var result = defThousandsDelimiter(1000000);
    expect(result).toEqual("1&#44;000&#44;000");
  });
  it("defThousandsDelimiter(1000): Return will be 1,000", function() {
    var result = defThousandsDelimiter(1000);
    expect(result).toEqual("1&#44;000");
  });
  it("defThousandsDelimiter(100): Return will be 100", function() {
    var result = defThousandsDelimiter(100);
    expect(result).toEqual("100");
  });

  //defUpdateElement
  it("defUpdateElement('spnTest', ''): Return will be ''", function() {
    defUpdateElement('spnTest', '');
    var result = document.getElementById("spnTest").innerHTML;
    expect(result).toEqual("");
  });
  it("defUpdateElement('spnTest', 'Test text'): Return will be 'Test text'", function() {
    defUpdateElement('spnTest', 'Test text');
    var result = document.getElementById("spnTest").innerHTML;
    expect(result).toEqual("Test text");
  });

  //defCalcPercentage(intValue, intTotal)
  it("defCalcPercentage(10, 100): Return will be 10", function() {
    var result = defCalcPercentage(10, 100);
    expect(result).toEqual(10);
  });
  it("defCalcPercentage(100, 10): Return will be 1000", function() {
    var result = defCalcPercentage(100, 10);
    expect(result).toEqual(1000);
  });

  //defRemoveDuplicatesArray
  it("defRemoveDuplicatesArray([0,0,1,1,2,2,3,3,4,4,5,5]): Return will be [0,1,2,3,4,5]", function() {
    var arrTemp = [0,0,1,1,2,2,3,3,4,4,5,5];
    var result = defRemoveDuplicatesArray(arrTemp);
    expect(result).toEqual([0,1,2,3,4,5]);
  });
  it("defRemoveDuplicatesArray([0,1,2,3,4,5,0,1,2,3,4,5]): Return will be [0,1,2,3,4,5]", function() {
    var arrTemp = [0,1,2,3,4,5,0,1,2,3,4,5];
    var result = defRemoveDuplicatesArray(arrTemp);
    expect(result).toEqual([0,1,2,3,4,5]);
  });
  it("defRemoveDuplicatesArray(['red','red','green','green','blue','blue']): Return will be ['red','green','blue']", function() {
    var arrTemp = ['red','red','green','green','blue','blue'];
    var result = defRemoveDuplicatesArray(arrTemp);
    expect(result).toEqual(['red','green','blue']);
  });
  it("defRemoveDuplicatesArray(['red','green','blue','red','green','blue']): Return will be ['red','green','blue']", function() {
    var arrTemp = ['red','red','green','green','blue','blue'];
    var result = defRemoveDuplicatesArray(arrTemp);
    expect(result).toEqual(['red','green','blue']);
  });

  //defRemoveDuplicatesArrayByPropertyName
  it("defRemoveDuplicatesArrayByPropertyName(JSONtest, 'name'): Return will be JSONtest", function() {
    var JSONtest = [
      {
      	"name": "TestName1",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": true
      },{
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      },{
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test1",
      	"boolean": false
      }
    ];
    var result = defRemoveDuplicatesArrayByPropertyName(JSONtest, "name");
    expect(result).toEqual(JSONtest);
  });
  it("defRemoveDuplicatesArrayByPropertyName(JSONtest, 'integer'): Return will be TestName2, TestName3 node", function() {
    var JSONtest = [
      {
      	"name": "TestName1",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": true
      },{
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      },{
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test1",
      	"boolean": false
      }
    ];
    var result = defRemoveDuplicatesArrayByPropertyName(JSONtest, "integer");
    expect(result).toEqual([
      {
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      }
      ,{
        "name": "TestName3",
        "description": "TestDescription",
        "integer": 1,
        "string": "test1",
        "boolean": false
      }
    ]);
  });
  it("defRemoveDuplicatesArrayByPropertyName(JSONtest, 'string'): Return will be TestName2, TestName3 node", function() {
    var JSONtest = [
      {
      	"name": "TestName1",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": true
      },{
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      },{
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test3",
      	"boolean": false
      }
    ];
    var result = defRemoveDuplicatesArrayByPropertyName(JSONtest, "string");
    expect(result).toEqual([
      {
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      }
      ,{
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test3",
      	"boolean": false
      }
    ]);
  });
  it("defRemoveDuplicatesArrayByPropertyName(JSONtest, 'description'): Return will be TestName3 node", function() {
    var JSONtest = [
      {
      	"name": "TestName1",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": true
      },{
        "name": "TestName2",
      	"description": "TestDescription",
      	"integer": 0,
      	"string": "test",
      	"boolean": false
      },{
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test3",
      	"boolean": false
      }
    ];
    var result = defRemoveDuplicatesArrayByPropertyName(JSONtest, "description");
    expect(result).toEqual([
      {
        "name": "TestName3",
      	"description": "TestDescription",
      	"integer": 1,
      	"string": "test3",
      	"boolean": false
      }
    ]);
  });

  //defFindMostFrequent
  it("defFindMostFrequent([0,0,1,1,2,2,3,3,4,4,5,5]): Return will be [0,1,2,3,4,5]", function() {
    var arrTemp = [0,0,1,1,2,2,3,3,4,4,5,5];
    var result = defFindMostFrequent(arrTemp);
    expect(result).toEqual([0,1,2,3,4,5]);
  });
  it("defFindMostFrequent([0,1,2,3,4,5,0,1,2,3,4,5,0]): Return will be [0]", function() {
    var arrTemp = [0,1,2,3,4,5,0,1,2,3,4,5,0];
    var result = defFindMostFrequent(arrTemp);
    expect(result).toEqual([0]);
  });
  it("defFindMostFrequent(['red','red','red','green','green','blue','blue']): Return will be ['red']", function() {
    var arrTemp = ['red','red','red','green','green','blue','blue'];
    var result = defFindMostFrequent(arrTemp);
    expect(result).toEqual(['red']);
  });
  it("defFindMostFrequent(['red','green','blue','red','green','blue']): Return will be ['red','green','blue']", function() {
    var arrTemp = ['red','red','green','green','blue','blue'];
    var result = defFindMostFrequent(arrTemp);
    expect(result).toEqual(['red','green','blue']);
  });

  //defGetCheapest
  it("defGetCheapest(JSONtest): Return will be 1]", function() {
    var JSONtest = [{"cost":1},{"cost":10},{"cost":100}];
    var result = defGetCheapest(JSONtest);
    expect(result).toEqual(1);
  });
  it("defGetCheapest(JSONtest): Return will be 10]", function() {
    var JSONtest = [{"cost":11},{"cost":10},{"cost":10}];
    var result = defGetCheapest(JSONtest);
    expect(result).toEqual(10);
  });

});

describe("Testing destination.js file", function() {

  //destCreateStats ???

});

describe("Testing event.js file", function() {

  //eventCheck ???

  //defThousandsDelimiter
  it("eventGetEventRandom(): Return will be between within JSONevent.length", function() {
    var result = eventGetEventRandom();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(JSONevent.length);
  });

  //eventCreateStats ???

});

describe("Testing game.js file", function() {

  //gameEmulate
  //gameChooseTurn
  //gameInit
  //gameStart
  //gameEnd
  //gameTurnEnd
  //gamCheckEndGame
  //gamApplyDefaults
  //gameSetDifficultyDefaults
  //gamSetGameText

});

describe("Testing gui.js file", function() {

  //guiUpdateAndReset
  //guiUpdateHTMLPlayer
  //guiReset
  //guiUpdateHTMLStats
  //guiUpdateHTMLLuxury
  //guiUpdateHTMLLuxuryReset
  //guiSectionHide
  //guiSectionShow
  //guiCreateHTMLComboBoxSettings
  //guiCreateHTMLComboBox
  //guiCreateHTMLComboBoxMulti
  //guiCreateDialog
  //guiCreateDialogConfirmLuxury

});

describe("Testing job.js file", function() {

  //jobPromotionCheck

});

describe("Testing luxury.js file", function() {

  //luxuryBuy
  //luxuryRepair
  //luxuryDiscard
  //luxGetLuxuryFromName
  //luxBrokenCheck
  //luxCreateStats

});

describe("Testing map.js file", function() {

  //mapChoose
  //mapCreate
  //mapArcAdd
  //mapRedraw
  //mapZoomIn
  //mapZoomOut
  //mapReset
  //mapGoTo
  //mapUpdateCountryVisited
  //mapGetCountryCodeAlpha3Code
  //mapGetCountryCodeAlpha2Code
  //mapGetCountryName

});

describe("Testing player.js file", function() {

  //plaCanAfford

});

describe("Testing result.js file", function() {

  // mapCreateResult
  // mapCreateResultArcsReset
  // mapCreateResultArcs
  // resShowResult

});

describe("Testing travel.js file", function() {

  // travel
  // travDestinationsInCountry
  // travDestinationsInCountryVisited
  // travAlreadyVisited
  // travCalcDistance
  // travCalcDistanceTotal
  // travGetCountryComplete

});

describe("Testing work.js file", function() {

  // work
  // wokCheckMaxDaysCanWork
  // wokCheckMaxDays
  
});
