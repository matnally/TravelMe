
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

// defRemoveDuplicatesArrayByProperty
// defFindMostFrequent

});
