var dt=["1610892000",  "1610901000",  "1610910900",  "1611000000", "1610881200", "1610881200",  "1610895600",  "1610895600",  "1610902800",  "1610902800", "1610883000",  "1610892000",  "1610892000",  "1610902800",  "1610912700", "1610893800",  "1610902800", "1610932200", "1610910000",  "1610924700",  "1610932200","1610917200"];

var dtprox=[];

var dta = [];
for (var i = 0; i <= 30; i++) {

	var date = new Date(dt[i] * 1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();

	// Will display time in 10:30:23 format
	var formattedTime = hours + ':' + minutes.substr(-2) /*+ ':' + seconds.substr(-2)*/;
	
	dta.push(formattedTime);

	// console.log(dta[i]);
}