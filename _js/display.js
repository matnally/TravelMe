
function resetErrorStyles() {

  //resets any error styles
  calcAfford(0, 0, "divActionHappiness");
  calcAfford(0, 0, "divActionDays");
  calcAfford(0, 0, "divActionMoney");

} //function

function resetDestination() {
  updateElement("locationDestinationName", "");
  updateElement("locationDays", "");
  updateElement("locationDestinationCost", "");
  updateElement("travelledDistance", "");
  updateElement("locationHappiness", "");
  updateElement("locationRegion", "");
  updateElement("locationRegionDetails", "");

  document.getElementById("butTravel").disabled = true;

} //function


function displayOpeningMessage() {

  // swal("Begin New Game"
  //     ,JSONconfig[0].OpeningMessage
  //     ,"info"
  //     ,buttons: ["Oh noez!", "Aww yiss!"]
  // );
  swal({
    title: 'Input something',
    type: 'question',
    input: 'select',
    inputOptions: {
    	1: 'success',
      2: 'try again',
      3: 'not accepted'
    },
    preConfirm: function(value) {
    	return new Promise(function (resolve, reject) {
        if (value == 2) {
        	reject('Try again')
        } else {
        	resolve()
        }
      })
    }
  }).then(function(result) {
    if (result == 1) {
      swal('success')
    } else if (result == 3) {
      swal('not accepted')
    }
  }).catch(swal.noop);
  


} //function
