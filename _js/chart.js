
function chartStatsUpdate() {
	//update stats for graph
	JSONplayer[0].historyMoney.push(JSONplayer[0].money);
	JSONplayer[0].historyDistance.push(JSONplayer[0].distanceTravelled);
	JSONplayer[0].historyHappiness.push(JSONplayer[0].happiness);
	JSONplayer[0].historyWage.push(JSONjob[JSONplayer[0].job].wage);
} //function

function chartCreate(tmpElem) {

	var arrValues = [];
	var strObjectKey = "";

	var strTooltips = [];
	var arrLabels = [];

	strObjectKey = tmpElem.value;
	arrValues = JSONplayer[0][strObjectKey]; //get object key for chosen chart

	$("#divChart").chart('clear');

	for (var i = 0; i < arrValues.length; i++) {
		strTooltips[i] = defThousandsDelimiter(arrValues[i]);
		arrLabels[i] = "Turn " + i;
  } //for

	chartCreateTemplate(); //so no errors

	$("#divChart").chart({
		template : "raphael_analytics"
		,labels: arrLabels
		,tooltips : {
			serie1 : strTooltips
		} //tooltips
		,values : {
			serie1 : arrValues
		} //values
		,defaultSeries : {
			fill : true
			,stacked : false
			,highlight : {
				scale : 2
			} //highlight
			,startAnimation : {
				active : true
				,type : "grow"
				,easing : "bounce"
			} //startAnimation
		} //defaultSeries
	}); //$("#divChart").chart

} //function

function chartCreateTemplate() {
	// this is a reausable template definition. scroll down for the real chart call
	$.elycharts.templates['raphael_analytics'] = {
	  type: "line"
	  ,style: {
	    "background-color": "black"
	  } //style
		,margins: [10, 50, 50, 50] //top right bottom left
	  ,defaultSeries: {
	    rounded: 0.6
	    ,fill: false
	    ,plotProps: {
	      "stroke-width": 4
	    } //plotProps
	    ,dot: true
	    ,dotProps: {
	      stroke: "#5AF"
	      ,"stroke-width": 2
	      ,fill: "black"
	    } //dotProps
	    ,startAnimation: { // use an animation to start plotting the chart
	      active: true
	      ,type: "avg" // start from the average line
	      ,speed: 500 // animate in 1 second
	      ,easing: "bounce"
	    } //startAnimation
	    ,highlight: {
	      scaleSpeed: 0 // do not animate the dot scaling. instant grow
	      ,scaleEasing: ''
	      ,scale: 2 // enlarge the dot on hover
	    }, //highlight
	    tooltip: {
	      height: 35
	      ,width: 80
	      // ,padding: [3, 3]
				// ,offset: [-15, -10]
				,offset: [0, 0]
	      ,frameProps: {
	        opacity: 0.75
	        ,fill: "#FFF"
	        ,stroke: "#CCC"
	      } //frameProps
	    } //tooltip
	  } //defaultSeries
	  ,series: {
	    serie1: {
	      color: "#5AF"
	    } //series1
	  } //series
	  ,defaultAxis: {
	    labels: true
	    ,labelsProps: {
	      fill: "white"
	      ,"font-size": "12px"
	    } //labelsProps
	    ,labelsDistance: 14
	  } //defaultAxis
	  ,axis: {
	    l: { // left axis
	      labels: true // show labels for left axis
	      ,labelsDistance: 10
	    } //1
	  } //axis
		,features : {
			grid : {
				draw : [true, true]
			} //grid
			,legend : {
				horizontal : false
				,width : 80
				,height : 50
				,x : 220
				,y : 250
				,dotType : "circle"
				,dotProps : {
					stroke : "white"
					,"stroke-width" : 2
				} //dotProps
				,borderProps : {
					opacity : 0.3
					,fill : "#c0c0c0"
					,"stroke-width" : 0
				} //borderProps
			} //legend
		} //features
	}; // END $.elycharts.templates['raphael_analytics']

} //function
